import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import logoUrl from "@/assets/nansen-logo.png";

export function SiteChrome({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".nv-reveal-on-view");
    if (!els || !("IntersectionObserver" in window)) {
      els?.forEach((el) => el.classList.add("nv-in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("nv-in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [children]);

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <Link to="/" className="flex items-center gap-2.5 font-serif text-xl tracking-tight text-foreground md:text-2xl">
          <img src={logoUrl} alt="Nansen Vize" className="h-8 w-8 md:h-9 md:w-9" />
          <span>Nansen<span className="text-primary">.</span></span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          <Link to="/schengen-vizesi" className="transition-colors hover:text-foreground">Schengen</Link>
          <Link to="/amerika-vizesi" className="transition-colors hover:text-foreground">Amerika</Link>
          <Link to="/ingiltere-vizesi" className="transition-colors hover:text-foreground">İngiltere</Link>
          <Link to="/kanada-vizesi" className="transition-colors hover:text-foreground">Kanada</Link>
          <Link to="/sss" className="transition-colors hover:text-foreground">SSS</Link>
        </div>
        <a
          href="#iletisim"
          className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background md:px-5 md:py-2.5 md:text-sm"
        >
          Ön Görüşme
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <section id="iletisim" className="bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-6 md:py-32">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-[1.15] text-background sm:text-4xl md:text-5xl">
          Yeni hayatınıza veya global ofisinize giden yolda{" "}
          <em className="italic text-background/70">ilk adımı</em> atın.
        </h2>
        <div className="mt-10 md:mt-12">
          <a
            href="mailto:info@nansenvize.com"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-xs font-medium text-primary-foreground transition-all hover:scale-[1.02] md:px-9 md:py-4 md:text-sm"
          >
            Ön Değerlendirme İçin Bize Ulaşın
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-background/60 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-10 md:text-sm">
          <Link to="/" className="flex items-center gap-2.5 font-serif text-lg text-background md:text-xl">
            <img src={logoUrl} alt="Nansen Vize" className="h-8 w-8 md:h-9 md:w-9" />
            <span>Nansen<span className="text-primary">.</span></span>
          </Link>
          <a href="mailto:info@nansenvize.com" className="transition-colors hover:text-background">
            info@nansenvize.com
          </a>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="https://www.instagram.com/nansenvize" target="_blank" rel="noreferrer" className="transition-colors hover:text-background">Instagram</a>
            <Link to="/sss" className="transition-colors hover:text-background">SSS</Link>
            <span>© 2026 Nansen Vize</span>
          </div>
        </div>
      </div>
    </section>
  );
}