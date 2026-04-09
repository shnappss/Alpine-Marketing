import logoPath from "../../../../attached_assets/Screenshot_2026-03-22_at_21.14.04_1775773255892.png";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={logoPath}
              alt="Alpine Marketing Logo"
              className="h-8 w-auto invert brightness-200 opacity-80"
            />
            <p className="text-muted-foreground text-sm">
              Alpine Marketing · Systematized Growth for SMBs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>Zurich, Switzerland</p>
          <p>© 2026 Alpine Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
