import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-8ZY59D4VV7";

export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    const path = (import.meta.env.BASE_URL.replace(/\/$/, "") || "") + location;
    window.gtag("event", "page_view", {
      send_to: GA_ID,
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
}
