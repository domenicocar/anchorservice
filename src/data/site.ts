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
  shortDescription: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: string;
  category?: string;
  featured?: boolean;
  commercial?: boolean;
  homepageIcon: "wrench" | "wind" | "ship" | "mapPin" | "clipboard" | "anchor";
  items: string[];
  method: Array<{ title: string; description: string }>;
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "rigging-standing-rigging",
    title: "Rigging e standing rigging",
    shortDescription:
      "Controllo, manutenzione e sostituzione di sartie, stralli, terminali, arridatoi, lande e attrezzatura di coperta.",
    description:
      "Interventi dedicati al controllo e alla manutenzione del sartiame, delle manovre correnti e dei componenti che lavorano sull'albero e in coperta.",
    href: "/servizi/rigging-standing-rigging",
    image: "/images/rigging/rigging.jpeg",
    imageAlt: "Tecnico al lavoro accanto all'albero di una barca a vela",
    imageWidth: 1197,
    imageHeight: 1197,
    imagePosition: "center center",
    category: "Servizio principale",
    featured: true,
    commercial: false,
    homepageIcon: "anchor",
    items: [
      "Controllo del sartiame",
      "Sostituzione di sartie e stralli",
      "Terminali, arridatoi e lande",
      "Cime, drizze e manovre correnti",
      "Attrezzatura di coperta",
      "Controlli periodici",
      "Interventi su albero e rig",
    ],
    method: [
      {
        title: "Controllo",
        description: "Verifica visiva e funzionale dei componenti del rig.",
      },
      {
        title: "Priorità",
        description:
          "Individuazione degli interventi necessari e di quelli programmabili.",
      },
      {
        title: "Intervento",
        description: "Manutenzione o sostituzione dei componenti concordati.",
      },
    ],
    seo: {
      title: "Rigging e standing rigging a Bari | Anchor Service",
      description:
        "Controllo e manutenzione di sartie, stralli, terminali, arridatoi, lande, albero e attrezzatura di coperta per barche a vela.",
    },
  },
  {
    slug: "manutenzione-yacht",
    title: "Manutenzione yacht a vela e a motore",
    shortDescription:
      "Interventi ordinari e straordinari, assistenza tecnica, meccanica e impiantistica di bordo.",
    description:
      "Supporto tecnico per programmare e coordinare le attività necessarie a bordo di yacht a vela e a motore, dalla manutenzione ordinaria agli interventi più articolati.",
    href: "/servizi/manutenzione-yacht",
    image: "/images/manutenzione/manutenzione.jpeg",
    imageAlt: "Coperta in legno durante un intervento di manutenzione",
    imageWidth: 2048,
    imageHeight: 1536,
    imagePosition: "center center",
    featured: false,
    commercial: false,
    homepageIcon: "wrench",
    items: [
      "Manutenzione ordinaria",
      "Manutenzione straordinaria",
      "Yacht a vela",
      "Yacht a motore",
      "Assistenza meccanica",
      "Assistenza impiantistica",
      "Coordinamento lavori in cantiere",
      "Controllo delle attrezzature di bordo",
    ],
    method: [
      {
        title: "Esigenza",
        description:
          "Raccolta delle informazioni sulla barca e sui lavori richiesti.",
      },
      {
        title: "Programmazione",
        description:
          "Definizione delle priorità e coordinamento delle attività.",
      },
      {
        title: "Controllo",
        description:
          "Verifica tecnica del lavoro svolto e indicazioni operative.",
      },
    ],
    seo: {
      title: "Manutenzione yacht a vela e a motore | Anchor Service",
      description:
        "Manutenzione ordinaria e straordinaria, assistenza tecnica, meccanica e impiantistica per yacht a vela e a motore.",
    },
  },
  {
    slug: "veleria-assistenza-vele",
    title: "Veleria e assistenza vele",
    shortDescription:
      "Controllo, regolazione, riparazione e movimentazione delle vele.",
    description:
      "Assistenza per verificare lo stato delle vele, gestirne montaggio e movimentazione e coordinare gli interventi necessari con velerie specializzate.",
    href: "/servizi/veleria-assistenza-vele",
    image: "/images/veleria/veleria.jpeg",
    imageAlt: "Vele issate su una barca a vela",
    imageWidth: 1200,
    imageHeight: 1600,
    imagePosition: "center center",
    featured: false,
    commercial: false,
    homepageIcon: "wind",
    items: [
      "Controllo dello stato delle vele",
      "Regolazione",
      "Riparazione",
      "Movimentazione",
      "Montaggio e smontaggio",
      "Riduzione e gestione del piano velico",
      "Coordinamento con velerie specializzate",
    ],
    method: [
      {
        title: "Verifica",
        description:
          "Controllo dello stato e delle esigenze operative delle vele.",
      },
      {
        title: "Gestione",
        description:
          "Organizzazione di movimentazione, montaggio o smontaggio.",
      },
      {
        title: "Assistenza",
        description:
          "Coordinamento della regolazione o della riparazione necessaria.",
      },
    ],
    seo: {
      title: "Veleria e assistenza vele | Anchor Service Bari",
      description:
        "Controllo, regolazione, riparazione, montaggio e movimentazione delle vele con supporto tecnico e coordinamento operativo.",
    },
  },
  {
    slug: "trasferimenti-trasporto-imbarcazioni",
    title: "Trasferimenti e trasporto imbarcazioni",
    shortDescription:
      "Trasferimenti nel Mediterraneo, traversate oceaniche e trasporto su nave tramite compagnie specializzate.",
    description:
      "Pianificazione e supporto operativo per consegne, trasferimenti con equipaggio e organizzazione del trasporto nautico su nave.",
    href: "/servizi/trasferimenti-trasporto-imbarcazioni",
    image: "/images/trasferimenti/trasferimenti.jpeg",
    imageAlt: "Yacht a vela in mare",
    imageWidth: 1536,
    imageHeight: 2048,
    imagePosition: "center 65%",
    featured: false,
    commercial: false,
    homepageIcon: "ship",
    items: [
      "Trasferimenti nel Mediterraneo",
      "Trasferimenti internazionali",
      "Traversate atlantiche",
      "Consegna dell'imbarcazione",
      "Trasferimenti con equipaggio",
      "Organizzazione del trasporto su nave",
      "Coordinamento con compagnie di trasporto nautico",
      "Preparazione dell'imbarcazione al trasporto",
    ],
    method: [
      {
        title: "Pianificazione",
        description:
          "Valutazione della tratta, della barca e della modalità di trasferimento.",
      },
      {
        title: "Preparazione",
        description:
          "Organizzazione degli aspetti tecnici e operativi prima della partenza.",
      },
      {
        title: "Coordinamento",
        description:
          "Gestione della consegna o del rapporto con la compagnia di trasporto.",
      },
    ],
    seo: {
      title: "Trasferimenti e trasporto imbarcazioni | Anchor Service",
      description:
        "Trasferimenti nel Mediterraneo e internazionali, traversate atlantiche e organizzazione del trasporto di imbarcazioni su nave.",
    },
  },
  {
    slug: "ormeggio-assistenza-transito",
    title: "Ormeggio e assistenza in transito",
    shortDescription:
      "Supporto per ormeggi temporanei, soste tecniche e assistenza operativa lungo le coste pugliesi.",
    description:
      "Supporto locale per organizzare soste, assistenza in marina e interventi operativi necessari alle imbarcazioni in transito lungo le coste pugliesi.",
    href: "/servizi/ormeggio-assistenza-transito",
    image: "/images/ormeggio/ormeggio.jpeg",
    imageAlt: "Catamarani ormeggiati lungo una banchina",
    imageWidth: 1638,
    imageHeight: 2048,
    imagePosition: "center center",
    featured: false,
    commercial: false,
    homepageIcon: "mapPin",
    items: [
      "Ricerca e organizzazione dell'ormeggio",
      "Assistenza in marina",
      "Supporto durante le soste",
      "Assistenza per imbarcazioni in transito",
      "Coordinamento tecnico sul territorio",
      "Supporto operativo lungo le coste pugliesi",
    ],
    method: [
      {
        title: "Richiesta",
        description:
          "Raccolta delle necessità di sosta e assistenza dell'imbarcazione.",
      },
      {
        title: "Organizzazione",
        description:
          "Coordinamento dell'ormeggio e dei supporti tecnici disponibili.",
      },
      {
        title: "Assistenza",
        description:
          "Supporto operativo durante la permanenza o la ripartenza.",
      },
    ],
    seo: {
      title: "Ormeggio e assistenza in transito in Puglia | Anchor Service",
      description:
        "Supporto per ormeggi temporanei, soste tecniche e assistenza alle imbarcazioni in transito lungo le coste pugliesi.",
    },
  },
  {
    slug: "gestione-perizie-intermediazione",
    title: "Gestione, perizie e intermediazione",
    shortDescription:
      "Gestione imbarcazioni, perizie nautiche e coordinamento di cantieri, marine, tecnici e fornitori.",
    description:
      "Supporto nella gestione tecnica dell'imbarcazione, nella pianificazione degli interventi e nel coordinamento delle figure coinvolte nei lavori.",
    href: "/servizi/gestione-perizie-intermediazione",
    image: "/images/perizia/perizia.jpeg",
    imageAlt: "Tecnico durante un intervento sullo scafo in legno di una barca",
    imageWidth: 1536,
    imageHeight: 2048,
    imagePosition: "center center",
    featured: false,
    commercial: false,
    homepageIcon: "clipboard",
    items: [
      "Gestione ordinaria dell'imbarcazione",
      "Pianificazione delle manutenzioni",
      "Perizie nautiche",
      "Supervisione tecnica",
      "Coordinamento di cantieri e marine",
      "Intermediazione con tecnici, meccanici e impiantisti",
      "Controllo dei lavori",
      "Supporto nelle decisioni operative",
    ],
    method: [
      {
        title: "Analisi",
        description:
          "Valutazione delle necessità tecniche e gestionali dell'imbarcazione.",
      },
      {
        title: "Coordinamento",
        description:
          "Organizzazione delle figure coinvolte e delle attività programmate.",
      },
      {
        title: "Supervisione",
        description:
          "Controllo dell'avanzamento e supporto nelle decisioni operative.",
      },
    ],
    seo: {
      title: "Gestione, perizie e intermediazione nautica | Anchor Service",
      description:
        "Gestione tecnica di imbarcazioni, perizie nautiche e coordinamento di cantieri, marine, tecnici e fornitori.",
    },
  },
  {
    slug: "compravendita-noleggio",
    title: "Compravendita e noleggio",
    shortDescription:
      "Vendita, ricerca e acquisto di imbarcazioni per conto del cliente, oltre a noleggio e servizi per vacanze in barca.",
    description:
      "Assistenza nelle fasi di ricerca, valutazione e compravendita dell'imbarcazione, oltre al supporto nella scelta di noleggi e vacanze in barca.",
    href: "/servizi/compravendita-noleggio",
    image: "/images/Luxury_sailing_yacht_gliding_on_202606181209.jpeg",
    imageAlt: "Yacht a vela in navigazione",
    imageWidth: 2752,
    imageHeight: 1536,
    imagePosition: "center center",
    category: "Servizi commerciali",
    featured: false,
    commercial: true,
    homepageIcon: "anchor",
    items: [
      "Vendita di imbarcazioni",
      "Ricerca di imbarcazioni per il cliente",
      "Supporto all'acquisto",
      "Valutazione iniziale dell'imbarcazione",
      "Intermediazione tra venditore e acquirente",
      "Noleggio imbarcazioni",
      "Vacanze e crociere in barca",
      "Assistenza durante scelta e prenotazione",
    ],
    method: [
      {
        title: "Esigenza",
        description:
          "Definizione del tipo di imbarcazione o esperienza ricercata.",
      },
      {
        title: "Ricerca",
        description:
          "Selezione delle possibilità coerenti con la richiesta del cliente.",
      },
      {
        title: "Assistenza",
        description: "Supporto durante valutazione, scelta e fasi operative.",
      },
    ],
    seo: {
      title: "Compravendita e noleggio imbarcazioni | Anchor Service",
      description:
        "Supporto per vendita, ricerca e acquisto di imbarcazioni, noleggio e organizzazione di vacanze e crociere in barca.",
    },
  },
];

export const featuredService = services.find((service) => service.featured)!;
export const commercialService = services.find(
  (service) => service.commercial,
)!;
export const technicalServices = services.filter(
  (service) => !service.featured && !service.commercial,
);
