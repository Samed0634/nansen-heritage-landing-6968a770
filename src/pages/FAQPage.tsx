import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { services } from "./services-data";

const SITE = "https://www.nansenvize.com";

const generalFaqs = [
  {
    q: "Vize danışmanlığı almak vize onay şansını artırır mı?",
    a: "Vize retlerinin büyük bölümü eksik veya tutarsız belgelerden kaynaklanır. Profesyonel danışmanlık, dosyanızın konsolosluk kriterlerine uygun ve tutarlı hazırlanmasını sağlayarak red riskini düşürür; ancak hiçbir danışman vize onayını garanti edemez — garanti vaat eden firmalara karşı dikkatli olun.",
  },
  {
    q: "Nansen Vize hangi şehirlerde hizmet veriyor?",
    a: "Nansen Vize'nin Ankara ve İstanbul'da ofisleri bulunur; online danışmanlık ile Türkiye'nin her yerinden başvuru süreci yürütülebilir.",
  },
  {
    q: "Vize danışmanlığı ücreti nasıl belirlenir?",
    a: "Ücretlendirme; vize türü, ülke, başvurunun karmaşıklığı ve hizmet kapsamına göre belirlenir. Ön değerlendirme görüşmesinin ardından net teklif sunulur.",
  },
  {
    q: "Geçmiş ret aldığım bir ülkeye yeniden başvurabilir miyim?",
    a: "Evet, ret kararı sonsuz değildir. Önceki red gerekçeleri analiz edilip dosyanız buna göre yeniden kurgulandığında yeni başvuru başarılı olabilir. Strateji belirlemek için ret notunuzu mutlaka paylaşın.",
  },
];

export default function FAQPage() {
  const allFaqs = [...generalFaqs, ...services.flatMap((s) => s.faqs)];
  const url = `${SITE}/sss`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Sık Sorulan Sorular | Vize Danışmanlığı — Nansen Vize</title>
        <meta
          name="description"
          content="Schengen, ABD, İngiltere, Kanada ve diğer vize başvuruları, danışmanlık ücretleri, randevu süreleri ve red sonrası adımlar hakkında en çok sorulan sorular."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Sık Sorulan Sorular — Nansen Vize" />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <nav className="mb-8 text-xs text-foreground/50 md:text-sm">
            <Link to="/" className="hover:text-foreground">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/80">SSS</span>
          </nav>
          <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Sık Sorulan Sorular
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">
            Vize başvuru süreçleri, danışmanlık kapsamımız ve sıkça karşılaşılan durumlar hakkında.
          </p>

          <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10 md:mt-14">
            {allFaqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none text-sm font-medium text-foreground md:text-base">
                  <span className="mr-3 text-primary">+</span>
                  {f.q}
                </summary>
                <p className="mt-3 pl-6 text-sm leading-relaxed text-foreground/70 md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}