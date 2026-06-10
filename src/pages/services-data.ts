export type ServiceFaq = { q: string; a: string };

export type ServiceData = {
  slug: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: ServiceFaq[];
};

export const services: ServiceData[] = [
  {
    slug: "schengen-vizesi",
    navTitle: "Schengen Vizesi",
    title: "Schengen Vizesi Danışmanlığı",
    metaTitle: "Schengen Vizesi Danışmanlığı Ankara & İstanbul | Belgeler ve Başvuru — Nansen Vize",
    metaDescription:
      "Schengen vizesi başvurunuzu eksiksiz dosya hazırlığı, randevu takibi ve red riski analiziyle yönetiyoruz. 2026 güncel belge listesi ve süreç rehberi.",
    hero: "Schengen vizesi başvurularınızı, 27 ülke için tek standartta hazırlıyoruz.",
    intro:
      "Schengen vizesi; Almanya, Fransa, İtalya, İspanya, Hollanda ve toplam 27 Schengen ülkesini kapsayan ortak bir kısa dönem vizesidir. Nansen Vize olarak Ankara ve İstanbul ofislerimizden Türkiye geneline turistik, iş ve aile ziyareti başvurularında uçtan uca danışmanlık veriyoruz.",
    sections: [
      {
        heading: "Schengen vizesi için gerekli belgeler (2026 güncel)",
        body:
          "Konsolosluk dosyanız hem standart Schengen evraklarını hem de seyahat amacınıza özgü ek belgeleri içermelidir. Standart belgeler:",
        bullets: [
          "Son 10 yıl içinde alınmış, en az 6 ay geçerli pasaport",
          "Biyometrik fotoğraf (son 6 ay içinde çekilmiş)",
          "Tüm Schengen alanını ve seyahat süresini kapsayan seyahat sağlık sigortası (min. 30.000 EUR teminat)",
          "Gidiş-dönüş uçuş rezervasyonu ve konaklama belgeleri",
          "Son 3 aylık banka hesap dökümü ve gelir belgesi",
          "Çalışanlar için işveren yazısı, SGK hizmet dökümü, izin yazısı; şirket sahipleri için vergi levhası, ticaret sicil gazetesi ve imza sirküleri",
          "Tapu, araç ruhsatı gibi Türkiye'ye dönüş niyetinizi destekleyen belgeler",
        ],
      },
      {
        heading: "Schengen vizesi ne kadar sürede çıkar?",
        body:
          "Standart değerlendirme süresi 15 takvim günüdür; yoğun dönemlerde 45 güne kadar uzayabilir. Randevu bekleme süreleri eklendiğinde, seyahatten en az 2-3 ay önce başvuru yapmanızı öneriyoruz.",
      },
      {
        heading: "Schengen vizesi red riskini nasıl düşürürüz?",
        body:
          "Vize retlerinin büyük bölümü eksik veya tutarsız belgelerden, yetersiz finansal kanıttan ve zayıf seyahat planından kaynaklanır. Nansen Vize'de her dosya; konsolosluk kriterleri, geçmiş başvuru profili ve seyahat amacı çerçevesinde özel olarak hazırlanır.",
      },
    ],
    faqs: [
      {
        q: "Schengen vizesi için hangi belgeler gerekli?",
        a: "Temel belgeler: en az 6 ay geçerli pasaport, biyometrik fotoğraf, 30.000 EUR teminatlı seyahat sağlık sigortası, uçuş ve konaklama rezervasyonları, son 3 aylık banka dökümü, gelir belgesi ve çalışan/işveren statüsüne göre ek evraklar. Ülkeye göre değişen ek belgeler de eklenebilir.",
      },
      {
        q: "Schengen vizesi ne kadar sürede çıkar?",
        a: "Standart değerlendirme süresi 15 takvim günüdür; yoğun dönemlerde 45 güne kadar uzayabilir. Randevu bekleme süreleri de eklendiğinde seyahatten en az 2-3 ay önce başvuru yapılması önerilir.",
      },
      {
        q: "Schengen vize danışmanlığı onay garantisi verir mi?",
        a: "Hiçbir danışmanlık firması vize onayını garanti edemez; garanti vaat eden firmalara karşı dikkatli olun. Profesyonel danışmanlık, dosyanızın konsolosluk kriterlerine uygun ve tutarlı hazırlanmasını sağlayarak red riskini düşürür.",
      },
    ],
  },
  {
    slug: "amerika-vizesi",
    navTitle: "Amerika Vizesi",
    title: "Amerika (ABD) Vizesi Danışmanlığı",
    metaTitle: "Amerika (ABD) Vizesi Danışmanlığı | B1/B2, F-1, O-1, EB Vizeleri — Nansen Vize",
    metaDescription:
      "ABD turistik (B1/B2), öğrenci (F-1), yetenek (O-1) ve göçmenlik vizelerinde DS-160 hazırlığı, mülakat koçluğu ve dosya yönetimi.",
    hero: "ABD vizesinde fark, hazırlıkta başlar.",
    intro:
      "Amerika Birleşik Devletleri vize süreçleri, mülakat odaklı yapısıyla diğer ülkelerden ayrılır. Nansen Vize; B1/B2 turistik, F-1 öğrenci, O-1 olağanüstü yetenek ve EB göçmenlik kategorilerinde DS-160 form hazırlığı, randevu organizasyonu ve mülakat koçluğu sunar.",
    sections: [
      {
        heading: "Hizmet verdiğimiz ABD vize kategorileri",
        body: "Bireysel ve kurumsal başvurularınız için aşağıdaki kategorilerde tam kapsamlı danışmanlık veriyoruz:",
        bullets: [
          "B1/B2 — turistik ve iş ziyareti vizesi",
          "F-1 — öğrenci vizesi",
          "J-1 — değişim ziyaretçisi",
          "O-1 — olağanüstü yetenek vizesi",
          "L-1 — şirket içi transfer",
          "EB-1 / EB-2 (NIW) / EB-5 — göçmen vize kategorileri",
        ],
      },
      {
        heading: "ABD vize mülakatına nasıl hazırlıyoruz?",
        body:
          "Konsolos görüşmesi tipik olarak 2-4 dakika sürer; bu kısa sürede konsolosa net, tutarlı ve ikna edici cevaplar vermek gerekir. Birebir mülakat koçluğumuzda profilinize özgü olası soruları ve en güçlü cevap çerçevenizi hazırlıyoruz.",
      },
    ],
    faqs: [
      {
        q: "ABD B1/B2 vizesi mülakatında neler sorulur?",
        a: "Seyahat amacı, ABD'de kalış süresi, kim ile gidileceği, finansal durum, Türkiye'deki bağlar (iş, aile, mülk) ve önceki seyahat geçmişi en sık sorulan başlıklardır. Tutarlı, kısa ve net cevaplar belirleyicidir.",
      },
      {
        q: "ABD vizesi randevusu ne kadar sürede alınır?",
        a: "Randevu bekleme süreleri konsolosluğa ve döneme göre değişir; bazı dönemlerde 6 aydan uzun olabilir. Erken planlama ve uygun başvuru stratejisi süreyi belirgin şekilde kısaltır.",
      },
    ],
  },
  {
    slug: "ingiltere-vizesi",
    navTitle: "İngiltere Vizesi",
    title: "İngiltere Vizesi Danışmanlığı",
    metaTitle: "İngiltere Vizesi Danışmanlığı | Ziyaretçi, Öğrenci, Global Talent — Nansen Vize",
    metaDescription:
      "İngiltere ziyaretçi, öğrenci, Global Talent ve Skilled Worker vize başvurularında uzman danışmanlık. Güncel ücretler, belgeler ve süreç yönetimi.",
    hero: "Birleşik Krallık'a iş, eğitim ve yatırım için.",
    intro:
      "Birleşik Krallık vize süreçleri puan tabanlı bir göç sistemi etrafında şekillenir. Nansen Vize, ziyaretçiden Global Talent ve Skilled Worker'a kadar tüm kategorilerde dosya hazırlığı ve UKVI başvuru yönetimini üstlenir.",
    sections: [
      {
        heading: "Hizmet verdiğimiz UK vize kategorileri",
        body: "",
        bullets: [
          "Standard Visitor — turistik ve iş ziyareti",
          "Student (Tier 4) — öğrenci vizesi",
          "Skilled Worker — sponsor şirket üzerinden çalışma vizesi",
          "Global Talent — bilim, sanat ve teknoloji alanında yetenek vizesi",
          "Innovator Founder — girişimci vizesi",
        ],
      },
    ],
    faqs: [
      {
        q: "İngiltere Global Talent vizesi kimler için uygundur?",
        a: "Global Talent; akademi, dijital teknoloji, sanat ve kültür alanlarında uluslararası düzeyde lider veya gelecek vadeden profesyoneller için tasarlanmıştır. Önce yetkili kurumdan endorsement (onay) alınır, ardından vize başvurusu yapılır.",
      },
      {
        q: "İngiltere ziyaretçi vizesi ne kadar sürede çıkar?",
        a: "Standart başvurularda karar süresi yaklaşık 3 hafta, öncelikli (priority) başvurularda 5 iş günü, süper öncelikli başvurularda 1 iş günüdür. Süreler dönemsel olarak değişebilir.",
      },
    ],
  },
  {
    slug: "kanada-vizesi",
    navTitle: "Kanada Vizesi",
    title: "Kanada Vizesi Danışmanlığı",
    metaTitle: "Kanada Vizesi Danışmanlığı | Ziyaretçi, Öğrenci, Express Entry — Nansen Vize",
    metaDescription:
      "Kanada ziyaretçi ve öğrenci vizeleri ile Express Entry göçmenlik başvurularında dosya hazırlığı ve süreç takibi. Ankara ve İstanbul ofisleri.",
    hero: "Kanada'ya kısa süreli ziyaretten kalıcı yerleşime.",
    intro:
      "Kanada; ziyaretçi (TRV), öğrenci (Study Permit), çalışma (Work Permit) ve Express Entry üzerinden kalıcı oturum (PR) kategorileriyle geniş bir göç sistemi sunar. Nansen Vize her aşamada profilinize uygun stratejiyi belirler ve dosyanızı hazırlar.",
    sections: [
      {
        heading: "Express Entry nedir?",
        body:
          "Express Entry; Federal Skilled Worker, Federal Skilled Trades ve Canadian Experience Class programlarını yöneten puan tabanlı bir sistemdir. Profiliniz CRS (Comprehensive Ranking System) puanı üzerinden değerlendirilir.",
      },
    ],
    faqs: [
      {
        q: "Kanada Express Entry puanı nasıl hesaplanır?",
        a: "CRS puanı yaş, eğitim, dil yeterliği (IELTS/CELPIP veya TEF), iş tecrübesi, eş profili ve ek faktörlerden (provincial nomination, iş teklifi, Kanada'da eğitim/iş geçmişi) oluşur. Toplam 1200 üzerinden değerlendirilir.",
      },
      {
        q: "Kanada öğrenci vizesi için hangi belgeler gerekli?",
        a: "Kanada Study Permit için DLI listesindeki bir okuldan kabul mektubu, finansal yeterlik kanıtı (GIC dahil), pasaport, biyometrik veriler ve gerektiğinde dil sınav sonucu sunulur.",
      },
    ],
  },
  {
    slug: "calisma-vizesi",
    navTitle: "Çalışma Vizesi",
    title: "Çalışma Vizesi ve Yurt Dışı Çalışma İzni Danışmanlığı",
    metaTitle: "Çalışma Vizesi ve Yurt Dışı Çalışma İzni Danışmanlığı — Nansen Vize",
    metaDescription:
      "Avrupa, ABD, İngiltere ve Körfez ülkeleri için çalışma vizesi ve izin başvurularında uçtan uca danışmanlık. Bireysel ve kurumsal çözümler.",
    hero: "Yurt dışında çalışmak için doğru kategoriyi seçmek kritik.",
    intro:
      "Çalışma vizesi süreçleri ülkelere ve mesleki kategoriye göre büyük farklılıklar gösterir. Nansen Vize, profilinize en uygun vize kategorisini belirler ve hem birey hem de sponsor şirket adına evrak yönetimi yapar.",
    sections: [
      {
        heading: "Sıklıkla başvurduğumuz çalışma vizesi programları",
        body: "",
        bullets: [
          "Almanya — Blue Card, Skilled Worker, Job Seeker",
          "Hollanda — Highly Skilled Migrant, DAFT",
          "İngiltere — Skilled Worker, Global Talent",
          "ABD — H-1B, L-1, O-1",
          "BAE / Katar / Suudi Arabistan — Work Permit ve sponsorluk",
        ],
      },
    ],
    faqs: [
      {
        q: "Yurt dışında çalışmak için iş bulmadan vize alabilir miyim?",
        a: "Bazı ülkeler iş arama vizesi (örn. Almanya Job Seeker, Portekiz Job Search) verir. Bu vize ile ülkeye giriş yapıp belirli bir süre içinde iş bulup çalışma vizesine geçiş yapabilirsiniz.",
      },
    ],
  },
  {
    slug: "ogrenci-vizesi",
    navTitle: "Öğrenci Vizesi",
    title: "Öğrenci Vizesi Danışmanlığı",
    metaTitle: "Öğrenci Vizesi Danışmanlığı | Tüm Ülkeler — Nansen Vize",
    metaDescription:
      "Amerika, İngiltere, Kanada, Almanya ve diğer ülkeler için öğrenci vizesi başvurularında belge hazırlığı ve süreç yönetimi.",
    hero: "Eğitim hayatınızın doğru başlangıcı.",
    intro:
      "Öğrenci vizesi başvurularında en büyük risk; eksik finansal kanıtlar ve okul/program ile profilin tutarsızlığıdır. Nansen Vize; ABD F-1, UK Student, Kanada Study Permit, Almanya Studienvisum başta olmak üzere tüm ülkeler için öğrenci vizesi danışmanlığı sunar.",
    sections: [
      {
        heading: "Öğrenci vizesi sürecinde sunduğumuz hizmet",
        body: "",
        bullets: [
          "Profilinize uygun ülke ve okul stratejisi",
          "Kabul mektubu ve okul yazışmalarının yönetimi",
          "Finansal kanıt dosyası hazırlığı (sponsor mektubu, banka dökümü, GIC vb.)",
          "Vize başvuru formu ve randevu organizasyonu",
          "Mülakat (ABD, UK Credibility Interview) hazırlığı",
        ],
      },
    ],
    faqs: [
      {
        q: "Öğrenci vizesi için kaç para banka hesabında olmalı?",
        a: "Tutar ülkeye, program süresine ve yaşam maliyetine göre değişir. Örneğin Kanada Study Permit için GIC yaklaşık 20.635 CAD'dir; UK Student vize için Londra dışı kurslarda aylık 1.023 GBP × 9 ay tutarı gösterilmesi gerekir.",
      },
    ],
  },
  {
    slug: "turistik-vize",
    navTitle: "Turistik Vize",
    title: "Turistik Vize Danışmanlığı (Tüm Ülkeler)",
    metaTitle: "Turistik Vize Danışmanlığı | Tüm Ülkeler İçin Başvuru — Nansen Vize",
    metaDescription:
      "Schengen'den Japonya'ya, Dubai'den Çin'e tüm ülkelerin turistik vize başvurularında randevu, belge ve dosya yönetimi.",
    hero: "Tatiliniz seyahatle başlasın, bürokrasiyle değil.",
    intro:
      "Turistik vize başvurularında zaman ve doğru hazırlık her şeydir. Nansen Vize; Schengen, ABD, İngiltere, Kanada, Japonya, Çin, BAE ve dünya genelinde 100'ü aşkın ülke için turistik vize danışmanlığı sunar.",
    sections: [
      {
        heading: "Turistik vizede sunduğumuz hizmet",
        body: "",
        bullets: [
          "Ülke ve seyahat tarihinize göre uygun başvuru zamanlaması",
          "Eksiksiz evrak hazırlığı ve seyahat planı dokümantasyonu",
          "Randevu organizasyonu ve kurye ile evrak teslimi",
          "Geçmiş ret durumlarında strateji ve yeni başvuru danışmanlığı",
        ],
      },
    ],
    faqs: [
      {
        q: "Türkiye pasaportuyla vizesiz hangi ülkelere gidilebilir?",
        a: "Türkiye Cumhuriyeti pasaportuyla vizesiz, varışta vize veya e-vize ile gidilebilen 110'dan fazla ülke vardır. Güncel liste değişebilir; başvuru öncesi mutlaka doğrulanmalıdır.",
      },
    ],
  },
  {
    slug: "kurumsal-mobilite",
    navTitle: "Kurumsal Mobilite",
    title: "Kurumsal Vize ve Mobilite Danışmanlığı",
    metaTitle: "Kurumsal Vize ve Mobilite Danışmanlığı | Çalışma İzinleri — Nansen Vize",
    metaDescription:
      "Şirketler için yurt dışı görevlendirme, çalışma izni ve yetenek transferi süreçlerini tek noktadan yönetiyoruz.",
    hero: "Şirketinizin global hareketliliği için tek elden yönetim.",
    intro:
      "Kurumsal mobilite; bir şirketin çalışanlarını yurt dışı projelere yerleştirme, uluslararası ofislerine transfer etme veya global yetenek alımı yapma süreçlerinin tamamını kapsar. Nansen Vize; vize stratejisi, çalışma izni ve süreç dokümantasyonunu tek elden yönetir.",
    sections: [
      {
        heading: "Kurumsal hizmetlerimiz",
        body: "",
        bullets: [
          "Şirket içi transfer (L-1, ICT) ve sponsor lisansı danışmanlığı",
          "Toplu vize başvurularında dosya standartizasyonu",
          "Yurt dışı görevlendirmelerde compliance takibi",
          "Global yetenek alımı için ülke ve kategori stratejisi",
        ],
      },
    ],
    faqs: [
      {
        q: "Kurumsal mobilite süreci ne kadar sürer?",
        a: "Ülkeye ve kategoriye göre değişmekle birlikte tipik kurumsal vize / çalışma izni süreçleri 1-4 ay aralığındadır. Sponsor lisansı gerektiren süreçlerde ek süre öngörülmelidir.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}