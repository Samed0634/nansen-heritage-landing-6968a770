import { useEffect, useRef } from "react";
import { VisaMap } from "@/components/VisaMap";
import logoUrl from "@/assets/nansen-logo.png";

export default function App() {
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
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Heritage />
      <Expertise />
      <PassportReach />
      <Difference />
      <CtaFooter />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a href="#" className="flex items-center gap-2.5 font-serif text-xl tracking-tight text-foreground md:text-2xl">
          <img src={logoUrl} alt="Nansen Vize" className="h-8 w-8 md:h-9 md:w-9" />
          <span>Nansen<span className="text-primary">.</span></span>
        </a>
        <div className="hidden items-center gap-10 text-sm text-foreground/70 md:flex">
          <a href="#hikayemiz" className="transition-colors hover:text-foreground">Hikayemiz</a>
          <a href="#uzmanliklarimiz" className="transition-colors hover:text-foreground">Uzmanlıklarımız</a>
          <a href="#iletisim" className="transition-colors hover:text-foreground">İletişim</a>
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

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 pb-20 md:px-6 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-px max-w-5xl bg-foreground/10" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="nv-reveal mb-6 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-8 md:text-xs">
          — Est. Inspired by 1922 —
        </p>
        <h1
          className="nv-reveal font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "0.15s" }}
        >
          Sınırları <em className="font-normal italic text-primary">Aşan</em> Miras.
        </h1>
        <p
          className="nv-reveal mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base md:mt-8 md:text-lg"
          style={{ animationDelay: "0.35s" }}
        >
          Schengen, ABD, İngiltere ve dünya genelindeki vize başvurularınız için
          bürokrasiyi şeffaflığa dönüştüren butik bir danışmanlık.
        </p>
        <div className="nv-reveal mt-10 md:mt-12" style={{ animationDelay: "0.55s" }}>
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-xs font-medium text-primary-foreground shadow-[0_10px_40px_-15px_oklch(0.59_0.13_160/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_50px_-15px_oklch(0.59_0.13_160/0.7)] md:px-8 md:py-4 md:text-sm"
          >
            Bizimle İletişime Geçin
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="hikayemiz" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-36 lg:py-44">
        <div className="nv-reveal-on-view">
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-background/50 md:mb-6 md:text-xs">
            Hikayemiz
          </p>
          <h2 className="font-serif text-3xl leading-[1.1] text-background sm:text-4xl md:text-5xl lg:text-6xl">
            1922'den Bugüne <br />
            <em className="font-normal italic text-background/80">Nansen Vizyonu</em>
          </h2>
          <div className="mt-8 h-px w-16 bg-background/30 md:mt-10" />
          <p className="mt-8 text-sm leading-[1.85] text-background/75 md:mt-10 md:text-[1.05rem]">
            1922 yılında, I. Dünya Savaşı sonrası devletsiz kalanlara uluslararası
            seyahat hakkı tanımak için tarihteki ilk seyahat belgesi olan
            <span className="text-background"> "Nansen Pasaportu" </span>
            yaratıldı. O günkü amaç sınırları kaldırmak ve insanlara hareket
            özgürlüğü vermekti.
          </p>
          <p className="mt-6 text-sm leading-[1.85] text-background/75 md:text-[1.05rem]">
            Bugün, bu tarihi mirası devralıyoruz. Geleneksel acentelerin karmaşık
            ve yorucu süreçlerini reddediyor; yüksek nitelikli profesyonellerin ve
            şirketlerin globalleşme yolculuğunu güvenle, şeffaflıkla ve butik bir
            danışmanlık anlayışıyla yönetiyoruz.
          </p>
        </div>

        <div className="nv-reveal-on-view flex items-center justify-center">
          <StampMotif />
        </div>
      </div>
    </section>
  );
}

function StampMotif() {
  return (
    <div className="relative aspect-square w-full max-w-md">
      <div className="absolute inset-0 rotate-[-8deg] rounded-full border border-background/20" />
      <div className="absolute inset-6 rotate-[-8deg] rounded-full border border-background/15" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full rotate-[-8deg]">
        <defs>
          <path id="circlePath" d="M 200,200 m -160,0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" fill="none" />
        </defs>
        <text fill="currentColor" className="text-background/60" fontSize="14" letterSpacing="6">
          <textPath href="#circlePath" startOffset="0">
            NANSEN · MOBILITY · CONSULTING · SINCE 1922 · NANSEN · MOBILITY ·
          </textPath>
        </text>
        <g stroke="currentColor" className="text-background/40" strokeWidth="1" fill="none">
          <circle cx="200" cy="200" r="110" />
          <line x1="90" y1="200" x2="310" y2="200" />
          <line x1="200" y1="90" x2="200" y2="310" />
        </g>
        <text
          x="200"
          y="190"
          textAnchor="middle"
          fill="currentColor"
          className="text-background"
          fontFamily="Playfair Display, serif"
          fontStyle="italic"
          fontSize="42"
        >
          Nansen
        </text>
        <text
          x="200"
          y="225"
          textAnchor="middle"
          fill="currentColor"
          className="text-background/70"
          fontSize="11"
          letterSpacing="4"
        >
          PASSEPORT · TRAVEL DOC.
        </text>
      </svg>
    </div>
  );
}

function Expertise() {
  const items = [
    {
      n: "01",
      title: "Schengen Vizesi",
      body: "Almanya, Fransa, İtalya, İspanya ve 27 Schengen ülkesi için turistik, iş ve aile ziyareti başvurularında uçtan uca süreç yönetimi.",
    },
    {
      n: "02",
      title: "ABD & İngiltere Vizesi",
      body: "Amerika Birleşik Devletleri ve Birleşik Krallık vize süreçlerinde randevu, evrak hazırlığı ve mülakat danışmanlığı.",
    },
    {
      n: "03",
      title: "VIP & Global Vize",
      body: "Dubai, Rusya, Kanada ve dünya genelinde 100'ü aşkın ülke için kurye ile evrak teslimi ve kapıdan kapıya VIP danışmanlık.",
    },
  ];
  return (
    <section id="uzmanliklarimiz" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-36">
      <div className="nv-reveal-on-view mx-auto max-w-3xl text-center">
        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-6 md:text-xs">
          Uzmanlıklarımız
        </p>
        <h2 className="font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Belirli alanlarda, <em className="italic text-primary">derin</em> uzmanlık.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
        {items.map((it, i) => (
          <article
            key={it.n}
            className="nv-reveal-on-view group relative flex flex-col rounded-sm border border-foreground/15 bg-background/50 p-7 transition-all duration-500 hover:border-primary/60 hover:bg-card md:p-10"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-serif text-sm italic text-foreground/40">{it.n}</span>
            <h3 className="mt-6 font-serif text-xl leading-snug text-foreground md:mt-10 md:text-2xl">
              {it.title}
            </h3>
            <div className="mt-5 h-px w-10 bg-foreground/20 transition-all duration-500 group-hover:w-20 group-hover:bg-primary md:mt-6" />
            <p className="mt-5 text-sm leading-relaxed text-foreground/65 md:mt-6">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="border-y border-foreground/10 bg-card/40">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-6 md:py-36">
        <p className="nv-reveal-on-view mb-5 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-6 md:text-xs">
          Farkımız
        </p>
        <p className="nv-reveal-on-view font-serif text-lg leading-[1.55] text-foreground sm:text-xl md:text-[1.85rem] md:leading-[1.55]">
          “Güvensiz evrak trafiğine ve belirsiz bekleme
          sürelerine son. Sadece size özel atanan danışmanınızla, kişisel
          verilerinizin maksimum güvenlikle korunduğu
          <em className="italic text-primary"> şeffaf bir süreç </em>
          sunuyoruz.”
        </p>
      </div>
    </section>
  );
}

function PassportReach() {
  return (
    <section id="pasaport-gucu" className="border-t border-foreground/10 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-36">
        <div className="nv-reveal-on-view mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-6 md:text-xs">
            Türkiye Cumhuriyeti Pasaportunun Gücü
          </p>
          <h2 className="font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Pasaportunuzun <em className="italic text-primary">dünya haritası</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/65 md:mt-6 md:text-[1.05rem]">
            Türkiye pasaportuyla hangi ülkelere vizesiz, varışta veya e-vize ile
            gidebileceğinizi tek bakışta görün. Bizimle çalıştığınız her ülke,
            sizin için titizlikle yönetilen bir süreçtir.
          </p>
        </div>

        <div className="nv-reveal-on-view mt-10 md:mt-16">
          <VisaMap />
        </div>
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <section id="iletisim" className="bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-6 md:py-40">
        <h2 className="nv-reveal-on-view mx-auto max-w-3xl font-serif text-3xl leading-[1.15] text-background sm:text-4xl md:text-6xl">
          Yeni hayatınıza veya global ofisinize giden yolda{" "}
          <em className="italic text-background/70">ilk adımı</em> atın.
        </h2>
        <div className="nv-reveal-on-view mt-10 md:mt-12">
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
          <div className="flex items-center gap-2.5 font-serif text-lg text-background md:text-xl">
            <span className="inline-flex items-center justify-center rounded-sm bg-[#EAE3D7] p-1.5">
              <img src={logoUrl} alt="Nansen Vize" className="h-6 w-6 md:h-7 md:w-7" />
            </span>
            <span>Nansen<span className="text-primary">.</span></span>
          </div>
          <a href="mailto:info@nansenvize.com" className="transition-colors hover:text-background">
            info@nansenvize.com
          </a>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="#" className="transition-colors hover:text-background">Privacy Policy</a>
            <span>© 2026 Nansen Vize</span>
          </div>
        </div>
      </div>
    </section>
  );
}