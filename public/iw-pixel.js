/**
 * Inflowave Heatmaps — client-side tracking script (E3)
 *
 * Tracks clicks, scroll depth, mouse movement (optional), rage clicks,
 * and page exit. Buffers events in memory and flushes every 2s or 50 events.
 *
 * Configuration (set BEFORE loading this script):
 *   window._hmConfig = {
 *     apiUrl:         'https://heatmaps.inflowave.io',  // required
 *     agencyClientId: 123,                              // required
 *     projectId:      'uuid-here',                      // required
 *     trackMovement:  false,                            // optional, default false
 *   };
 */
(function () {
  'use strict';

  // ── Guard ────────────────────────────────────────────────────────────────
  var cfg = window._hmConfig;
  if (!cfg || !cfg.agencyClientId) return;

  // ── Config ───────────────────────────────────────────────────────────────
  var BASE             = (cfg.apiUrl || 'https://heatmaps.inflowave.io').replace(/\/$/, '');
  var AGENCY_CLIENT_ID = cfg.agencyClientId;
  var PROJECT_ID       = cfg.projectId || null;

  // Respect prefers-reduced-motion: disable mousemove tracking if user prefers reduced motion
  var _prefersReducedMotion = (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  var TRACK_MOVEMENT   = cfg.trackMovement === true && !_prefersReducedMotion;

  var EVENTS_URL       = BASE + '/events';
  var SESSION_INIT_URL = BASE + '/sessions/init';
  var FLUSH_INTERVAL   = 1000;  // ms — short so even brief preview visits flush ≥1 batch
  var FLUSH_BATCH      = 50;    // flush when buffer reaches this many events
  var MAX_BATCH        = 100;   // max events per POST request
  var MOVEMENT_SAMPLE  = 100;   // ms between mousemove samples
  var PAGE_URL         = window.location.href;

  // ── UUID v4 ──────────────────────────────────────────────────────────────
  function _uuid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    // Fallback: use crypto.getRandomValues for cryptographically secure randomness
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      var buf = new Uint8Array(16);
      crypto.getRandomValues(buf);
      // Set version (4) and variant (10xx) bits per RFC 4122
      buf[6] = (buf[6] & 0x0f) | 0x40;
      buf[8] = (buf[8] & 0x3f) | 0x80;
      var hex = '';
      for (var i = 0; i < 16; i++) {
        var b = buf[i].toString(16);
        if (b.length === 1) b = '0' + b;
        hex += b;
        if (i === 3 || i === 5 || i === 7 || i === 9) hex += '-';
      }
      return hex;
    }
    // Last resort for very old environments (non-security-critical: session tracking only)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  // ── Session / visitor IDs ─────────────────────────────────────────────────
  var sessionId = sessionStorage.getItem('_hm_sid');
  if (!sessionId) {
    sessionId = _uuid();
    try { sessionStorage.setItem('_hm_sid', sessionId); } catch (e) { /* quota */ }
  }

  var visitorId = localStorage.getItem('_hm_vid');
  if (!visitorId) {
    visitorId = _uuid();
    try { localStorage.setItem('_hm_vid', visitorId); } catch (e) { /* quota */ }
  }

  // ── State ─────────────────────────────────────────────────────────────────
  var _buffer       = [];
  var _sessionStart = Date.now();
  var _maxScrollY   = 0;
  var _stopped      = false;

  function _elapsed() {
    return Date.now() - _sessionStart;
  }

  // ── CSS selector helper ───────────────────────────────────────────────────
  // Returns a short, stable selector: id > class+tag > tag, max depth 3
  function getSelector(el) {
    if (!el || !el.tagName) return '';
    try {
      var parts  = [];
      var node   = el;
      var depth  = 0;

      while (node && node.tagName && depth < 3) {
        var tag = node.tagName.toLowerCase();
        if (node.id) {
          parts.unshift('#' + node.id);
          break; // id is unique — stop climbing
        }
        var cls = '';
        if (node.className && typeof node.className === 'string') {
          var first = node.className.trim().split(/\s+/)[0];
          if (first) cls = '.' + first;
        }
        parts.unshift(tag + cls);
        node = node.parentElement;
        depth++;
      }

      return parts.join(' > ').slice(0, 200);
    } catch (e) {
      return '';
    }
  }

  // ── Event builder helpers ─────────────────────────────────────────────────
  function _evt(type, overrides) {
    var base = {
      event_type:       type,
      x:                null,
      y:                null,
      scroll_y:         null,
      element_selector: null,
      element_text:     null,
      timestamp_ms:     _elapsed(),
      metadata:         {},
    };
    for (var k in overrides) {
      if (Object.prototype.hasOwnProperty.call(overrides, k)) {
        base[k] = overrides[k];
      }
    }
    return base;
  }

  // ── Buffer + flush ────────────────────────────────────────────────────────
  function _push(evt) {
    if (_stopped) return;
    _buffer.push(evt);
    if (_buffer.length >= FLUSH_BATCH) _flush(false);
  }

  function _flush(isFinal) {
    if (!_buffer.length) return;

    // Drain buffer in MAX_BATCH-sized chunks
    while (_buffer.length > 0) {
      var chunk   = _buffer.splice(0, MAX_BATCH);
      var payload = JSON.stringify({
        session_id: sessionId,
        visitor_id: visitorId,
        page_url:   PAGE_URL,
        events:     chunk,
      });

      if (isFinal && typeof navigator.sendBeacon === 'function') {
        try {
          navigator.sendBeacon(EVENTS_URL, new Blob([payload], { type: 'application/json' }));
        } catch (e) { /* silent */ }
        // For final flush use sendBeacon for all chunks; can't retry on unload
        continue;
      }

      _sendXhr(payload, false);
    }
  }

  function _sendXhr(payload, isRetry) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', EVENTS_URL, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.timeout = 5000;
      xhr.onerror = function () {
        if (!isRetry) {
          setTimeout(function () { _sendXhr(payload, true); }, 5000);
        }
        // Drop silently after one retry — NEVER block the page
      };
      xhr.send(payload);
    } catch (e) { /* silent */ }
  }

  // ── Rage click detection ──────────────────────────────────────────────────
  // Track per-selector click timestamps. When 3+ clicks within 1000ms on same
  // selector: emit rage_click and suppress the individual click events for that burst.
  var _rageMap     = {};   // selector -> [timestamp, ...]
  var _ragePending = {};   // selector -> [buffered click events] during accumulation

  function _checkRageClick(selector, clickEvt) {
    var now      = Date.now();
    var times    = _rageMap[selector] || [];
    var pending  = _ragePending[selector] || [];

    // Prune timestamps older than 1000ms
    times   = times.filter(function (t) { return now - t < 1000; });
    pending = pending.filter(function (e) { return now - (e._absTime || 0) < 1000; });

    times.push(now);
    clickEvt._absTime = now;
    pending.push(clickEvt);

    _rageMap[selector]    = times;
    _ragePending[selector] = pending;

    if (times.length >= 3) {
      // Rage click detected — emit rage_click, suppress individual click events
      // Remove the pending individual clicks from the buffer
      _buffer = _buffer.filter(function (e) {
        return pending.indexOf(e) === -1;
      });

      _push(_evt('rage_click', {
        x:                clickEvt.x,
        y:                clickEvt.y,
        element_selector: selector,
        metadata:         { click_count: times.length },
      }));

      // Reset accumulation for this selector
      delete _rageMap[selector];
      delete _ragePending[selector];
      return true; // rage click was emitted
    }

    return false; // normal click, emit as-is
  }

  // ── Click tracking ────────────────────────────────────────────────────────
  function _onClick(e) {
    if (_stopped) return;
    var target   = e.target || {};
    var selector = getSelector(target);
    var text     = ((target.innerText || target.textContent || '').trim()).slice(0, 100);

    var clickEvt = _evt('click', {
      x:                e.clientX,
      y:                e.clientY,
      element_selector: selector,
      element_text:     text || null,
    });

    // Push the click first; rage detection may remove it from the buffer
    _push(clickEvt);

    // Rage click check — may suppress clickEvt and emit rage_click instead
    _checkRageClick(selector, clickEvt);
  }

  document.addEventListener('click', _onClick, { passive: true });

  // ── Scroll tracking (debounced 500 ms) ────────────────────────────────────
  var _scrollTimer = null;

  function _onScroll() {
    if (_stopped) return;
    var sy = window.scrollY || window.pageYOffset || 0;
    if (sy > _maxScrollY) _maxScrollY = sy;

    clearTimeout(_scrollTimer);
    _scrollTimer = setTimeout(function () {
      _push(_evt('scroll', { scroll_y: sy }));
    }, 500);
  }

  window.addEventListener('scroll', _onScroll, { passive: true });

  // ── Mouse movement (sampled every 100 ms, only when enabled) ──────────────
  var _lastMoveSample = 0;

  function _onMouseMove(e) {
    if (_stopped) return;
    var now = Date.now();
    if (now - _lastMoveSample < MOVEMENT_SAMPLE) return;
    _lastMoveSample = now;
    _push(_evt('mousemove', { x: e.clientX, y: e.clientY }));
  }

  if (TRACK_MOVEMENT) {
    document.addEventListener('mousemove', _onMouseMove, { passive: true });
  }

  // ── Page exit ─────────────────────────────────────────────────────────────
  var _exitFired = false;

  function _onExit() {
    if (_exitFired) return;
    _exitFired = true;

    var scrollPct = 0;
    try {
      var docH = Math.max(
        document.body ? document.body.scrollHeight : 0,
        document.documentElement.scrollHeight
      );
      var viewH = window.innerHeight;
      scrollPct = docH > viewH
        ? Math.min(Math.round((_maxScrollY / (docH - viewH)) * 100), 100)
        : 100;
    } catch (e) { /* silent */ }

    _push(_evt('page_exit', {
      scroll_y: _maxScrollY,
      metadata: {
        scroll_depth_percent: scrollPct,
        duration_ms:          _elapsed(),
      },
    }));

    _flush(true);
  }

  // Persist buffered events the moment the page is backgrounded. Uses
  // sendBeacon (so it lands even while the tab is frozen/closing) and is
  // repeatable — if the visitor tabs back and keeps interacting, the next
  // hide flushes again. (Don't fire the one-shot _onExit here, or tabbing
  // away once would stop all later final flushes.)
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') _flush(true);
  });
  // pagehide fires reliably when an iframe is removed from the DOM or the page
  // enters the bfcache — beforeunload does NOT fire on iframe teardown in most
  // browsers, which is exactly the builder-preview case that lost every event.
  window.addEventListener('pagehide', function () { _onExit(); });
  window.addEventListener('beforeunload', function () { _onExit(); });

  // ── Periodic flush ────────────────────────────────────────────────────────
  var _flushInterval = setInterval(function () { _flush(false); }, FLUSH_INTERVAL);

  // ── Session init (fire-and-forget) ────────────────────────────────────────
  (function () {
    try {
      var initPayload = JSON.stringify({
        id:               sessionId,
        agency_client_id: AGENCY_CLIENT_ID,
        project_id:       PROJECT_ID,
        visitor_id:       visitorId,
        page_url:         PAGE_URL,
        referrer:         document.referrer || null,
        user_agent:       navigator.userAgent,
        screen_width:     screen.width,
        screen_height:    screen.height,
      });
      var xhr = new XMLHttpRequest();
      xhr.open('POST', SESSION_INIT_URL, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.timeout = 5000;
      xhr.send(initPayload);
    } catch (e) { /* silent */ }
  })();

  // ── Public API ────────────────────────────────────────────────────────────
  window._hm = {
    /**
     * Immediately flush any buffered events to the server.
     */
    flush: function () { _flush(false); },

    /**
     * Pause event collection without removing listeners.
     */
    pause: function () { _stopped = true; },

    /**
     * Resume event collection after a pause.
     */
    resume: function () { _stopped = false; },

    /**
     * Stop all tracking and remove event listeners.
     * Remaining buffered events are flushed before stopping.
     */
    stop: function () {
      if (_stopped) return;
      _flush(false);
      _stopped = true;
      clearInterval(_flushInterval);
      document.removeEventListener('click', _onClick);
      window.removeEventListener('scroll', _onScroll);
      if (TRACK_MOVEMENT) {
        document.removeEventListener('mousemove', _onMouseMove);
      }
    },
  };

})();
