import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { VisaMap } from "@/components/VisaMap";
import { services } from "./services-data";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nansen Vize | Vize Danışmanlığı Ankara & İstanbul — Tüm Ülkeler</title>
        <meta
          name="description"
          content="Nansen Vize, Ankara ve İstanbul ofisleriyle Türkiye genelinde hizmet veren butik vize danışmanlığıdır. Schengen, Amerika, İngiltere, Kanada ve tüm ülke vizeleri; çalışma izni ve kurumsal mobilite süreçlerini uçtan uca yönetiyoruz."
        />
        <link rel="canonical" href="https://www.nansenvize.com/" />
      </Helmet>
      <Hero />
      <Heritage />
      <Expertise />
      <PassportReach />
      <Difference />
    </>
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
        <h1 className="nv-reveal font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-[5.5rem]" style={{ animationDelay: "0.15s" }}>
          Sınırları <em className="font-normal italic text-primary">Aşan</em> Miras.
        </h1>
        <p className="nv-reveal mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base md:mt-8 md:text-lg" style={{ animationDelay: "0.35s" }}>
          Schengen, ABD, İngiltere ve dünya genelindeki vize başvurularınız için bürokrasiyi şeffaflığa dönüştüren butik bir danışmanlık.
        </p>
        <div className="nv-reveal mt-10 md:mt-12" style={{ animationDelay: "0.55s" }}>
          <a href="#iletisim" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-xs font-medium text-primary-foreground shadow-[0_10px_40px_-15px_oklch(0.59_0.13_160/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_50px_-15px_oklch(0.59_0.13_160/0.7)] md:px-8 md:py-4 md:text-sm">
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
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-background/50 md:mb-6 md:text-xs">Hikayemiz</p>
          <h2 className="font-serif text-3xl leading-[1.1] text-background sm:text-4xl md:text-5xl lg:text-6xl">
            1922'den Bugüne <br />
            <em className="font-normal italic text-background/80">Nansen Vizyonu</em>
          </h2>
          <div className="mt-8 h-px w-16 bg-background/30 md:mt-10" />
          <p className="mt-8 text-sm leading-[1.85] text-background/75 md:mt-10 md:text-[1.05rem]">
            1922 yılında, I. Dünya Savaşı sonrası devletsiz kalanlara uluslararası seyahat hakkı tanımak için tarihteki ilk seyahat belgesi olan
            <span className="text-background"> "Nansen Pasaportu" </span>
            yaratıldı. O günkü amaç sınırları kaldırmak ve insanlara hareket özgürlüğü vermekti.
          </p>
          <p className="mt-6 text-sm leading-[1.85] text-background/75 md:text-[1.05rem]">
            Bugün, bu tarihi mirası devralıyoruz. Geleneksel acentelerin karmaşık ve yorucu süreçlerini reddediyor; yüksek nitelikli profesyonellerin ve şirketlerin globalleşme yolculuğunu güvenle, şeffaflıkla ve butik bir danışmanlık anlayışıyla yönetiyoruz.
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
          <textPath href="#circlePath" startOffset="0">NANSEN · MOBILITY · CONSULTING · SINCE 1922 · NANSEN · MOBILITY ·</textPath>
        </text>
        <g stroke="currentColor" className="text-background/40" strokeWidth="1" fill="none">
          <circle cx="200" cy="200" r="110" />
          <line x1="90" y1="200" x2="310" y2="200" />
          <line x1="200" y1="90" x2="200" y2="310" />
        </g>
        <text x="200" y="190" textAnchor="middle" fill="currentColor" className="text-background" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="42">Nansen</text>
        <text x="200" y="225" textAnchor="middle" fill="currentColor" className="text-background/70" fontSize="11" letterSpacing="4">PASSEPORT · TRAVEL DOC.</text>
      </svg>
    </div>
  );
}

function Expertise() {
  return (
    <section id="uzmanliklarimiz" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-36">
      <div className="nv-reveal-on-view mx-auto max-w-3xl text-center">
        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-6 md:text-xs">Uzmanlıklarımız</p>
        <h2 className="font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Belirli alanlarda, <em className="italic text-primary">derin</em> uzmanlık.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
        {services.map((s, i) => (
          <Link key={s.slug} to={`/${s.slug}`} className="nv-reveal-on-view group relative flex flex-col rounded-sm border border-foreground/15 bg-background/50 p-7 transition-all duration-500 hover:border-primary/60 hover:bg-card md:p-10" style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="font-serif text-sm italic text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-serif text-xl leading-snug text-foreground md:mt-10 md:text-2xl">{s.navTitle}</h3>
            <div className="mt-5 h-px w-10 bg-foreground/20 transition-all duration-500 group-hover:w-20 group-hover:bg-primary md:mt-6" />
            <p className="mt-5 text-sm leading-relaxed text-foreground/65 md:mt-6">{s.hero}</p>
            <span className="mt-6 text-xs font-medium text-primary">Detaylar →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="border-y border-foreground/10 bg-card/40">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-6 md:py-36">
        <p className="nv-reveal-on-view mb-5 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-6 md:text-xs">Farkımız</p>
        <p className="nv-reveal-on-view font-serif text-lg leading-[1.55] text-foreground sm:text-xl md:text-[1.85rem] md:leading-[1.55]">
          "Güvensiz evrak trafiğine ve belirsiz bekleme sürelerine son. Sadece size özel atanan danışmanınızla, kişisel verilerinizin maksimum güvenlikle korunduğu
          <em className="italic text-primary"> şeffaf bir süreç </em>
          sunuyoruz."
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
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:mb-6 md:text-xs">Türkiye Cumhuriyeti Pasaportunun Gücü</p>
          <h2 className="font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Pasaportunuzun <em className="italic text-primary">dünya haritası</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/65 md:mt-6 md:text-[1.05rem]">
            Türkiye pasaportuyla hangi ülkelere vizesiz, varışta veya e-vize ile gidebileceğinizi tek bakışta görün. Bizimle çalıştığınız her ülke, sizin için titizlikle yönetilen bir süreçtir.
          </p>
        </div>
        <div className="nv-reveal-on-view mt-10 md:mt-16">
          <VisaMap />
        </div>
      </div>
    </section>
  );
}