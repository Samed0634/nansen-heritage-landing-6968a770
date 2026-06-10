import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { getService } from "./services-data";

const SITE = "https://www.nansenvize.com";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;
  if (!service) return <Navigate to="/" replace />;

  const url = `${SITE}/${service.slug}`;
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "ProfessionalService", name: "Nansen Vize", url: SITE },
    areaServed: { "@type": "Country", name: "Türkiye" },
    url,
  };
  const faqLd = service.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: service.navTitle, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        {faqLd && <script type="application/ld+json">{JSON.stringify(faqLd)}</script>}
      </Helmet>

      <article className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <nav className="mb-8 text-xs text-foreground/50 md:text-sm">
            <Link to="/" className="hover:text-foreground">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/80">{service.navTitle}</span>
          </nav>

          <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">{service.hero}</p>
          <div className="mt-8 h-px w-16 bg-foreground/20" />
          <p className="mt-8 text-sm leading-[1.85] text-foreground/75 md:text-base">{service.intro}</p>

          {service.sections.map((sec) => (
            <section key={sec.heading} className="mt-12 md:mt-16">
              <h2 className="font-serif text-xl text-foreground md:text-2xl">{sec.heading}</h2>
              {sec.body && (
                <p className="mt-4 text-sm leading-[1.85] text-foreground/75 md:text-base">{sec.body}</p>
              )}
              {sec.bullets && (
                <ul className="mt-5 space-y-2.5 text-sm text-foreground/75 md:text-base">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {service.faqs.length > 0 && (
            <section className="mt-16 md:mt-20">
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">Sık Sorulan Sorular</h2>
              <div className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
                {service.faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="cursor-pointer list-none text-sm font-medium text-foreground md:text-base">
                      <span className="mr-3 text-primary">+</span>
                      {f.q}
                    </summary>
                    <p className="mt-3 pl-6 text-sm leading-relaxed text-foreground/70 md:text-base">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 rounded-sm border border-foreground/15 bg-card/40 p-8 text-center md:p-10">
            <p className="font-serif text-xl text-foreground md:text-2xl">
              {service.navTitle} başvurunuz için <em className="italic text-primary">ön değerlendirme</em> alın.
            </p>
            <a
              href="mailto:info@nansenvize.com"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-medium text-primary-foreground transition-all hover:scale-[1.02] md:text-sm"
            >
              Bize Ulaşın <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}