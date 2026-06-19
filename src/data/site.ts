export const siteConfig = {
  name: "Anchor Service",
  url: import.meta.env.PUBLIC_SITE_URL || "https://anchorservice.it",
  phoneLabel: "Telefono da confermare",
  phoneHref: "",
  whatsappHref: "",
  email: "info@anchorservice.it",
  location: "Bari",
  description:
    "Rigging, standing rigging e manutenzione tecnica per barche a vela a Bari.",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  href: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "manutenzione-barche-a-vela",
    title: "Manutenzione barche a vela",
    summary: "Interventi tecnici ordinari per mantenere la barca efficiente.",
    detail:
      "Supporto per controlli stagionali, verifiche a bordo e piccole manutenzioni legate all'uso reale dell'imbarcazione.",
    href: "/servizi/manutenzione-barche-a-vela",
    image: "/images/Marine_technician_servicing_yach…_202606181104.jpeg",
  },
  {
    slug: "rigging",
    title: "Rigging e standing rigging",
    summary: "Controllo di sartie, strallo, terminali, arridatoi e lande.",
    detail:
      "Il rigging e' il servizio centrale: verifiche tecniche, regolazioni e interventi programmati per mantenere l'attrezzatura in ordine.",
    href: "/servizi/rigging",
    image: "/images/Marine_rigger_working_on_yacht_202606181119.jpeg",
  },
  {
    slug: "cime-drizze-coperta",
    title: "Cime, drizze e coperta",
    summary: "Assistenza su manovre correnti e attrezzatura di coperta.",
    detail:
      "Valutazione di usura, scorrevolezza e corretto dimensionamento di cime, drizze e componenti di coperta.",
    href: "/servizi/cime-drizze-coperta",
    image: "/images/Create_a_photorealistic_branded_service_202606181136.jpeg",
  },
  {
    slug: "assistenza-vele",
    title: "Assistenza vele",
    summary: "Supporto tecnico per gestione, controllo e movimentazione vele.",
    detail:
      "Assistenza pratica per armamento, verifiche e problemi operativi legati all'utilizzo delle vele.",
    href: "/servizi/assistenza-vele",
    image: "/images/apri_le_vele_2K_202606161716.jpeg",
  },
  {
    slug: "yacht-delivery-trasferimenti",
    title: "Yacht delivery e trasferimenti",
    summary: "Supporto per trasferimenti e consegne di imbarcazioni.",
    detail:
      "Pianificazione tecnica e supporto operativo per spostamenti, consegne e trasferimenti quando richiesto.",
    href: "/servizi/yacht-delivery-trasferimenti",
    image: "/images/hero-rigging.jpg",
  },
  {
    slug: "consulenza-tecnica",
    title: "Consulenza tecnica",
    summary: "Valutazioni concrete per proprietari, cantieri e marine.",
    detail:
      "Un confronto tecnico per capire priorita, rischi, controlli necessari e interventi da programmare.",
    href: "/servizi/consulenza-tecnica",
    image: "/images/hero_anchor_service.jpeg",
  },
];
