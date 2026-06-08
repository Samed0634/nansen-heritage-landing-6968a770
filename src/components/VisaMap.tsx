import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { feature, mesh } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

type VisaStatus = "visa-free" | "visa-arrival" | "evisa" | "visa-required";

const VISA: Record<string, VisaStatus> = {"Albania":"visa-free","Algeria":"visa-required","Andorra":"visa-required","Angola":"visa-free","Antigua and Barbuda":"visa-free","Argentina":"visa-free","Armenia":"visa-arrival","Australia":"evisa","Austria":"visa-required","Azerbaijan":"visa-free","Bahamas":"visa-free","Bahrain":"evisa","Bangladesh":"visa-arrival","Barbados":"visa-free","Belarus":"visa-free","Belgium":"visa-required","Belize":"visa-free","Benin":"evisa","Bhutan":"evisa","Bolivia":"visa-free","Bosnia and Herzegovina":"visa-free","Botswana":"visa-free","Brazil":"visa-free","Brunei":"visa-free","Bulgaria":"visa-required","Burkina Faso":"visa-arrival","Burundi":"visa-arrival","Cambodia":"visa-arrival","Cameroon":"evisa","Canada":"visa-required","Cape Verde":"visa-arrival","Central African Republic":"visa-required","Chad":"visa-required","Chile":"visa-free","China":"visa-required","Colombia":"visa-free","Comoros":"visa-arrival","Republic of the Congo":"visa-required","Democratic Republic of the Congo":"evisa","Costa Rica":"visa-free","Ivory Coast":"evisa","Croatia":"visa-required","Cuba":"evisa","Cyprus":"visa-required","Czech Republic":"visa-required","Denmark":"visa-required","Djibouti":"visa-arrival","Dominica":"visa-free","Dominican Republic":"visa-free","Ecuador":"visa-free","Egypt":"visa-arrival","El Salvador":"visa-free","Equatorial Guinea":"visa-free","Eritrea":"visa-required","Estonia":"visa-required","Eswatini":"visa-free","Ethiopia":"visa-arrival","Fiji":"visa-free","Finland":"visa-required","France":"visa-required","Gabon":"evisa","Gambia":"visa-free","Georgia":"visa-free","Germany":"visa-required","Ghana":"visa-arrival","Greece":"visa-required","Grenada":"visa-required","Guatemala":"visa-free","Guinea":"evisa","Guinea-Bissau":"visa-arrival","Guyana":"visa-required","Haiti":"visa-free","Honduras":"visa-free","Hong Kong":"visa-free","Hungary":"visa-required","Iceland":"visa-required","India":"visa-required","Indonesia":"visa-arrival","Iran":"visa-free","Iraq":"evisa","Ireland":"visa-required","Israel":"visa-required","Italy":"visa-required","Jamaica":"visa-free","Japan":"visa-free","Jordan":"visa-free","Kazakhstan":"visa-free","Kenya":"evisa","Kiribati":"visa-required","Kosovo":"visa-free","Kuwait":"visa-arrival","Kyrgyzstan":"visa-free","Laos":"visa-arrival","Latvia":"visa-required","Lebanon":"visa-arrival","Lesotho":"evisa","Liberia":"visa-required","Libya":"evisa","Liechtenstein":"visa-required","Lithuania":"visa-required","Luxembourg":"visa-required","Madagascar":"visa-arrival","Malawi":"evisa","Malaysia":"visa-free","Maldives":"visa-arrival","Mali":"visa-required","Malta":"visa-required","Marshall Islands":"visa-arrival","Mauritania":"visa-arrival","Mauritius":"visa-free","Mexico":"evisa","Micronesia":"visa-free","Moldova":"visa-free","Monaco":"visa-required","Mongolia":"visa-free","Montenegro":"visa-free","Morocco":"visa-free","Mozambique":"visa-arrival","Myanmar":"evisa","Namibia":"visa-arrival","Nauru":"visa-required","Nepal":"visa-arrival","Netherlands":"visa-required","New Zealand":"visa-required","Nicaragua":"visa-free","Niger":"visa-required","Nigeria":"evisa","North Korea":"visa-required","North Macedonia":"visa-free","Norway":"visa-required","Oman":"visa-arrival","Pakistan":"evisa","Palau":"visa-arrival","Palestine":"visa-free","Panama":"visa-free","Papua New Guinea":"evisa","Paraguay":"visa-free","Peru":"visa-free","Philippines":"visa-free","Poland":"visa-required","Portugal":"visa-required","Qatar":"visa-arrival","Romania":"visa-required","Russia":"evisa","Rwanda":"visa-arrival","Saint Kitts and Nevis":"visa-free","Saint Lucia":"visa-free","Samoa":"visa-arrival","San Marino":"visa-required","Sao Tome and Principe":"visa-free","Saudi Arabia":"visa-arrival","Senegal":"visa-arrival","Serbia":"visa-free","Seychelles":"visa-free","Sierra Leone":"visa-arrival","Singapore":"visa-free","Slovakia":"visa-required","Slovenia":"visa-required","Solomon Islands":"visa-required","Somalia":"visa-arrival","South Africa":"visa-free","South Korea":"evisa","South Sudan":"evisa","Spain":"visa-required","Sri Lanka":"visa-arrival","Saint Vincent and the Grenadines":"visa-free","Sudan":"visa-arrival","Suriname":"visa-required","Sweden":"visa-required","Switzerland":"visa-required","Syria":"visa-free","Taiwan":"visa-arrival","Tajikistan":"evisa","Tanzania":"visa-arrival","Thailand":"visa-free","Timor-Leste":"visa-arrival","Togo":"evisa","Tonga":"visa-arrival","Trinidad and Tobago":"visa-free","Tunisia":"visa-free","Turkmenistan":"visa-required","Tuvalu":"visa-arrival","Uganda":"evisa","Ukraine":"visa-free","United Arab Emirates":"evisa","United Kingdom":"visa-required","United States of America":"visa-required","Uruguay":"visa-free","Uzbekistan":"visa-free","Vanuatu":"visa-free","Vatican City":"visa-required","Venezuela":"visa-free","Vietnam":"evisa","Yemen":"visa-required","Zambia":"visa-arrival","Zimbabwe":"visa-arrival","Afghanistan":"visa-required"};

const DAYS: Record<string, string> = {"Angola":"30 gün","Antigua and Barbuda":"180 gün","Argentina":"90 gün","Azerbaijan":"90 gün","Bahamas":"240 gün","Belarus":"30 gün","Belize":"90 gün","Bolivia":"90 gün","Bosnia and Herzegovina":"90 gün","Botswana":"90 gün","Brazil":"90 gün","Brunei":"30 gün","Chile":"90 gün","Colombia":"90 gün","Costa Rica":"30 gün","Dominican Republic":"Vizesiz","Ecuador":"90 gün","El Salvador":"180 gün","Equatorial Guinea":"90 gün","Eswatini":"30 gün","Fiji":"120 gün","Gambia":"90 gün","Georgia":"360 gün","Guatemala":"90 gün","Haiti":"90 gün","Honduras":"90 gün","Hong Kong":"90 gün","Iran":"90 gün","Jamaica":"90 gün","Japan":"90 gün","Jordan":"90 gün","Kazakhstan":"30 gün","Kosovo":"90 gün","Kyrgyzstan":"90 gün","Malaysia":"90 gün","Mauritius":"90 gün","Micronesia":"30 gün","Moldova":"90 gün","Mongolia":"30 gün","Montenegro":"90 gün","Morocco":"90 gün","Nicaragua":"90 gün","North Macedonia":"90 gün","Panama":"90 gün","Paraguay":"90 gün","Peru":"180 gün","Philippines":"30 gün","Saint Kitts and Nevis":"90 gün","Saint Lucia":"42 gün","Saint Vincent and the Grenadines":"90 gün","Sao Tome and Principe":"15 gün","Serbia":"90 gün","Seychelles":"90 gün","Singapore":"30 gün","South Africa":"30 gün","Syria":"90 gün","Thailand":"60 gün","Trinidad and Tobago":"90 gün","Tunisia":"90 gün","Ukraine":"90 gün","Uruguay":"90 gün","Uzbekistan":"30 gün","Vanuatu":"120 gün","Venezuela":"90 gün"};

const TR: Record<string, string> = {"Albania":"Arnavutluk","Algeria":"Cezayir","Andorra":"Andorra","Angola":"Angola","Antigua and Barbuda":"Antigua ve Barbuda","Argentina":"Arjantin","Armenia":"Ermenistan","Australia":"Avustralya","Austria":"Avusturya","Azerbaijan":"Azerbaycan","Bahamas":"Bahamalar","Bahrain":"Bahreyn","Bangladesh":"Bangladeş","Barbados":"Barbados","Belarus":"Belarus","Belgium":"Belçika","Belize":"Belize","Benin":"Benin","Bhutan":"Bhutan","Bolivia":"Bolivya","Bosnia and Herzegovina":"Bosna-Hersek","Botswana":"Botsvana","Brazil":"Brezilya","Brunei":"Brunei","Bulgaria":"Bulgaristan","Burkina Faso":"Burkina Faso","Burundi":"Burundi","Cambodia":"Kamboçya","Cameroon":"Kamerun","Canada":"Kanada","Cape Verde":"Yeşil Burun Adaları","Central African Republic":"Orta Afrika Cumhuriyeti","Chad":"Çad","Chile":"Şili","China":"Çin","Colombia":"Kolombiya","Comoros":"Komorlar","Republic of the Congo":"Kongo","Democratic Republic of the Congo":"Kongo (DK)","Costa Rica":"Kosta Rika","Ivory Coast":"Fildişi Sahili","Croatia":"Hırvatistan","Cuba":"Küba","Cyprus":"Kıbrıs","Czech Republic":"Çek Cumhuriyeti","Denmark":"Danimarka","Djibouti":"Cibuti","Dominica":"Dominika","Dominican Republic":"Dominik Cumhuriyeti","Ecuador":"Ekvador","Egypt":"Mısır","El Salvador":"El Salvador","Equatorial Guinea":"Ekvator Ginesi","Eritrea":"Eritre","Estonia":"Estonya","Eswatini":"Esvatini","Ethiopia":"Etiyopya","Fiji":"Fiji","Finland":"Finlandiya","France":"Fransa","Gabon":"Gabon","Gambia":"Gambiya","Georgia":"Gürcistan","Germany":"Almanya","Ghana":"Gana","Greece":"Yunanistan","Grenada":"Grenada","Guatemala":"Guatemala","Guinea":"Gine","Guinea-Bissau":"Gine-Bissau","Guyana":"Guyana","Haiti":"Haiti","Honduras":"Honduras","Hong Kong":"Hong Kong","Hungary":"Macaristan","Iceland":"İzlanda","India":"Hindistan","Indonesia":"Endonezya","Iran":"İran","Iraq":"Irak","Ireland":"İrlanda","Israel":"İsrail","Italy":"İtalya","Jamaica":"Jamaika","Japan":"Japonya","Jordan":"Ürdün","Kazakhstan":"Kazakistan","Kenya":"Kenya","Kiribati":"Kiribati","Kosovo":"Kosova","Kuwait":"Kuveyt","Kyrgyzstan":"Kırgızistan","Laos":"Laos","Latvia":"Letonya","Lebanon":"Lübnan","Lesotho":"Lesoto","Liberia":"Liberya","Libya":"Libya","Liechtenstein":"Lihtenştayn","Lithuania":"Litvanya","Luxembourg":"Lüksemburg","Madagascar":"Madagaskar","Malawi":"Malavi","Malaysia":"Malezya","Maldives":"Maldivler","Mali":"Mali","Malta":"Malta","Marshall Islands":"Marshall Adaları","Mauritania":"Moritanya","Mauritius":"Mauritius","Mexico":"Meksika","Micronesia":"Mikronezya","Moldova":"Moldova","Monaco":"Monako","Mongolia":"Moğolistan","Montenegro":"Karadağ","Morocco":"Fas","Mozambique":"Mozambik","Myanmar":"Myanmar","Namibia":"Namibya","Nauru":"Nauru","Nepal":"Nepal","Netherlands":"Hollanda","New Zealand":"Yeni Zelanda","Nicaragua":"Nikaragua","Niger":"Nijer","Nigeria":"Nijerya","North Korea":"Kuzey Kore","North Macedonia":"Kuzey Makedonya","Norway":"Norveç","Oman":"Umman","Pakistan":"Pakistan","Palau":"Palau","Palestine":"Filistin","Panama":"Panama","Papua New Guinea":"Papua Yeni Gine","Paraguay":"Paraguay","Peru":"Peru","Philippines":"Filipinler","Poland":"Polonya","Portugal":"Portekiz","Qatar":"Katar","Romania":"Romanya","Russia":"Rusya","Rwanda":"Ruanda","Saint Kitts and Nevis":"Saint Kitts ve Nevis","Saint Lucia":"Saint Lucia","Samoa":"Samoa","San Marino":"San Marino","Sao Tome and Principe":"Sao Tome ve Principe","Saudi Arabia":"Suudi Arabistan","Senegal":"Senegal","Serbia":"Sırbistan","Seychelles":"Seyşeller","Sierra Leone":"Sierra Leone","Singapore":"Singapur","Slovakia":"Slovakya","Slovenia":"Slovenya","Solomon Islands":"Solomon Adaları","Somalia":"Somali","South Africa":"Güney Afrika","South Korea":"Güney Kore","South Sudan":"Güney Sudan","Spain":"İspanya","Sri Lanka":"Sri Lanka","Saint Vincent and the Grenadines":"Saint Vincent ve Grenadinler","Sudan":"Sudan","Suriname":"Surinam","Sweden":"İsveç","Switzerland":"İsviçre","Syria":"Suriye","Taiwan":"Tayvan","Tajikistan":"Tacikistan","Tanzania":"Tanzanya","Thailand":"Tayland","Timor-Leste":"Doğu Timor","Togo":"Togo","Tonga":"Tonga","Trinidad and Tobago":"Trinidad ve Tobago","Tunisia":"Tunus","Turkmenistan":"Türkmenistan","Tuvalu":"Tuvalu","Uganda":"Uganda","Ukraine":"Ukrayna","United Arab Emirates":"Birleşik Arap Emirlikleri","United Kingdom":"Birleşik Krallık","United States of America":"ABD","Uruguay":"Uruguay","Uzbekistan":"Özbekistan","Vanuatu":"Vanuatu","Vatican City":"Vatikan","Venezuela":"Venezuela","Vietnam":"Vietnam","Yemen":"Yemen","Zambia":"Zambiya","Zimbabwe":"Zimbabve","Afghanistan":"Afganistan"};

const ISO: Record<string, number> = {"Afghanistan":4,"Albania":8,"Algeria":12,"Angola":24,"Antigua and Barbuda":28,"Argentina":32,"Armenia":51,"Australia":36,"Austria":40,"Azerbaijan":31,"Bahamas":44,"Bahrain":48,"Bangladesh":50,"Barbados":52,"Belarus":112,"Belgium":56,"Belize":84,"Benin":204,"Bhutan":64,"Bolivia":68,"Bosnia and Herzegovina":70,"Botswana":72,"Brazil":76,"Brunei":96,"Bulgaria":100,"Burkina Faso":854,"Burundi":108,"Cambodia":116,"Cameroon":120,"Canada":124,"Cape Verde":132,"Central African Republic":140,"Chad":148,"Chile":152,"China":156,"Colombia":170,"Comoros":174,"Republic of the Congo":178,"Democratic Republic of the Congo":180,"Costa Rica":188,"Ivory Coast":384,"Croatia":191,"Cuba":192,"Cyprus":196,"Czech Republic":203,"Denmark":208,"Djibouti":262,"Dominica":212,"Dominican Republic":214,"Ecuador":218,"Egypt":818,"El Salvador":222,"Equatorial Guinea":226,"Eritrea":232,"Estonia":233,"Eswatini":748,"Ethiopia":231,"Fiji":242,"Finland":246,"France":250,"Gabon":266,"Gambia":270,"Georgia":268,"Germany":276,"Ghana":288,"Greece":300,"Grenada":308,"Guatemala":320,"Guinea":324,"Guinea-Bissau":624,"Guyana":328,"Haiti":332,"Honduras":340,"Hong Kong":344,"Hungary":348,"Iceland":352,"India":356,"Indonesia":360,"Iran":364,"Iraq":368,"Ireland":372,"Israel":376,"Italy":380,"Jamaica":388,"Japan":392,"Jordan":400,"Kazakhstan":398,"Kenya":404,"Kiribati":296,"Kosovo":926,"Kuwait":414,"Kyrgyzstan":417,"Laos":418,"Latvia":428,"Lebanon":422,"Lesotho":426,"Liberia":430,"Libya":434,"Liechtenstein":438,"Lithuania":440,"Luxembourg":442,"Madagascar":450,"Malawi":454,"Malaysia":458,"Maldives":462,"Mali":466,"Malta":470,"Marshall Islands":584,"Mauritania":478,"Mauritius":480,"Mexico":484,"Micronesia":583,"Moldova":498,"Monaco":492,"Mongolia":496,"Montenegro":499,"Morocco":504,"Mozambique":508,"Myanmar":104,"Namibia":516,"Nauru":520,"Nepal":524,"Netherlands":528,"New Zealand":554,"Nicaragua":558,"Niger":562,"Nigeria":566,"North Korea":408,"North Macedonia":807,"Norway":578,"Oman":512,"Pakistan":586,"Palau":585,"Palestine":275,"Panama":591,"Papua New Guinea":598,"Paraguay":600,"Peru":604,"Philippines":608,"Poland":616,"Portugal":620,"Qatar":634,"Romania":642,"Russia":643,"Rwanda":646,"Saint Kitts and Nevis":659,"Saint Lucia":662,"Samoa":882,"San Marino":674,"Sao Tome and Principe":678,"Saudi Arabia":682,"Senegal":686,"Serbia":688,"Seychelles":690,"Sierra Leone":694,"Singapore":702,"Slovakia":703,"Slovenia":705,"Solomon Islands":90,"Somalia":706,"South Africa":710,"South Korea":410,"South Sudan":728,"Spain":724,"Sri Lanka":144,"Saint Vincent and the Grenadines":670,"Sudan":729,"Suriname":740,"Sweden":752,"Switzerland":756,"Syria":760,"Taiwan":158,"Tajikistan":762,"Tanzania":834,"Thailand":764,"Timor-Leste":626,"Togo":768,"Tonga":776,"Trinidad and Tobago":780,"Tunisia":788,"Turkey":792,"Turkmenistan":795,"Tuvalu":798,"Uganda":800,"Ukraine":804,"United Arab Emirates":784,"United Kingdom":826,"United States of America":840,"Uruguay":858,"Uzbekistan":860,"Vanuatu":548,"Vatican City":336,"Venezuela":862,"Vietnam":704,"Yemen":887,"Zambia":894,"Zimbabwe":716};

// Brand-aligned palette — muted, editorial tones complementing parchment/midnight/passport-green
const COLORS: Record<string, string> = {
  "visa-free": "#059669",      // Passport Green (brand primary)
  "visa-arrival": "#B98A4A",   // Burnished gold
  "evisa": "#1E3A8A",          // Deep indigo
  "visa-required": "#9B2C2C",  // Oxblood
  "turkey": "#0F172A",         // Midnight Slate
};
const LABELS: Record<VisaStatus, string> = {
  "visa-free": "Vizesiz",
  "visa-arrival": "Varışta Vize",
  "evisa": "E-Vize / ETA",
  "visa-required": "Vize Gerekli",
};

type Tooltip = { x: number; y: number; flag?: string; name: string; label: string; color: string; days?: string } | null;

export function VisaMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [filter, setFilter] = useState<VisaStatus | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip>(null);

  const { isoToVisa, isoToName, counts } = useMemo(() => {
    const isoToVisa: Record<number, VisaStatus | "turkey"> = {};
    const isoToName: Record<number, string> = {};
    Object.entries(ISO).forEach(([n, id]) => {
      isoToName[id] = n;
      if (VISA[n]) isoToVisa[id] = VISA[n];
    });
    isoToVisa[792] = "turkey";
    const counts = { "visa-free": 0, "visa-arrival": 0, "evisa": 0, "visa-required": 0 };
    Object.values(VISA).forEach((v) => { counts[v]++; });
    return { isoToVisa, isoToName, counts };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    const W = 960, H = 500;
    svg.attr("viewBox", `0 0 ${W} ${H}`);
    // ocean / sea background — parchment tinted
    svg.append("rect").attr("width", W).attr("height", H).attr("fill", "#EAE3D7");

    const proj = d3.geoNaturalEarth1().scale(170).translate([W / 2, H / 2 + 10]);
    const path = d3.geoPath(proj);

    d3.json<Topology>("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((world) => {
      if (cancelled || !world) return;
      const collection = world.objects.countries as GeometryCollection;
      const features = (feature(world, collection) as unknown as GeoJSON.FeatureCollection).features;

      const getFill = (iso: number) => {
        if (iso === 792) return COLORS.turkey;
        const v = isoToVisa[iso];
        if (!v || v === "turkey") return "#D9D2C7";
        if (filter && v !== filter) return "#E3DCCF";
        return COLORS[v];
      };

      svg.append("g")
        .selectAll("path")
        .data(features)
        .join("path")
        .attr("d", path as never)
        .attr("fill", (d) => getFill(+(d.id as string)))
        .attr("stroke", "#F4EFEA")
        .attr("stroke-width", 0.5)
        .style("cursor", "pointer")
        .style("transition", "fill 0.4s ease")
        .on("mousemove", function (event, d) {
          const iso = +(d.id as string);
          if (iso === 792) {
            setTooltip({
              x: event.clientX, y: event.clientY,
              flag: "🇹🇷", name: "Türkiye",
              label: "Pasaport sahibi ülke", color: COLORS.turkey,
            });
            return;
          }
          const name = isoToName[iso];
          if (!name || !VISA[name]) { setTooltip(null); return; }
          const v = VISA[name];
          setTooltip({
            x: event.clientX, y: event.clientY,
            name: TR[name] || name,
            label: LABELS[v], color: COLORS[v],
            days: DAYS[name] ? `Kalış süresi: ${DAYS[name]}` : undefined,
          });
        })
        .on("mouseleave", () => setTooltip(null));

      svg.append("path")
        .datum(mesh(world, collection, (a, b) => a !== b))
        .attr("fill", "none")
        .attr("stroke", "#F4EFEA")
        .attr("stroke-width", 0.4)
        .attr("d", path as never);
    });

    return () => { cancelled = true; };
  }, [filter, isoToVisa, isoToName]);

  const stats: { key: VisaStatus; label: string; count: number }[] = [
    { key: "visa-free", label: "Vizesiz", count: counts["visa-free"] },
    { key: "visa-arrival", label: "Varışta Vize", count: counts["visa-arrival"] },
    { key: "evisa", label: "E-Vize / ETA", count: counts["evisa"] },
    { key: "visa-required", label: "Vize Gerekli", count: counts["visa-required"] },
  ];

  return (
    <div className="relative">
      {/* Stat strip */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-foreground/15 bg-foreground/15 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.key} className="bg-background px-6 py-6 text-center">
            <div
              className="font-serif text-3xl md:text-4xl"
              style={{ color: COLORS[s.key] }}
            >
              {s.count}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Legend / filters */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
            filter === null
              ? "border-foreground bg-foreground text-background"
              : "border-foreground/20 bg-background text-foreground/70 hover:border-foreground/50"
          }`}
        >
          Tümü
        </button>
        {stats.map((s) => {
          const active = filter === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setFilter(active ? null : s.key)}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all"
              style={
                active
                  ? { background: COLORS[s.key], borderColor: COLORS[s.key], color: "#fff" }
                  : { background: "var(--background)", borderColor: "rgba(15,23,42,0.18)", color: "rgba(15,23,42,0.78)" }
              }
            >
              <span className="h-2 w-2 rounded-full" style={{ background: COLORS[s.key] }} />
              {s.label} <span className="opacity-60">({s.count})</span>
            </button>
          );
        })}
      </div>

      {/* Map */}
      <div className="mt-6 overflow-hidden rounded-sm border border-foreground/15 bg-card shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
        <svg ref={svgRef} className="block h-auto w-full" />
      </div>

      <p className="mt-4 text-right text-[11px] text-foreground/40">
        Kaynak: Passport Index Dataset · 2025
      </p>

      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 min-w-[160px] rounded-sm border border-foreground/15 bg-background px-4 py-3 text-sm shadow-xl"
          style={{ left: tooltip.x + 16, top: tooltip.y - 10 }}
        >
          {tooltip.flag && <div className="mb-1 text-xl leading-none">{tooltip.flag}</div>}
          <div className="font-serif text-base text-foreground">{tooltip.name}</div>
          <div className="mt-1 text-xs font-medium" style={{ color: tooltip.color }}>
            {tooltip.label}
          </div>
          {tooltip.days && <div className="mt-0.5 text-[11px] text-foreground/55">{tooltip.days}</div>}
        </div>
      )}
    </div>
  );
}