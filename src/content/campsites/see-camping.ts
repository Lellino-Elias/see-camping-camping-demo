import type { CampsiteConfig } from "../types";

/**
 * Seecamping Zell am Wallersee — honest, source-grounded config.
 * Quelle: see-camping.at (raw/digest). Bildlage knapp: nur 4 nachweislich
 * platzeigene Fotos ≥ 800 px vorhanden → bewusst schlanker Aufbau
 * (Hero + 3 Pillars). Camping-Grid & Galerie blenden sich ehrlich aus.
 */
const IMG = "/campsites/see-camping";

const seeCamping: CampsiteConfig = {
  name: "Seecamping Zell am Wallersee",
  shortName: "Seecamping",
  slug: "see-camping",
  ort: "Zell am Wallersee",
  region: "Salzburg",
  theme: "alpin",
  heroVariant: "left",
  brandKind: "Camping & Chalets",
  see: "Wallersee",
  regionLong: "Salzburger Seenland · Salzburg · Österreich",

  claim: "Dein Stück Wallersee, seit den Siebzigern",
  claimEmphasis: "Stück Wallersee",
  intro:
    "Am Westufer des Wallersees liegt seit den 1970ern ein gewachsener Campingplatz: eigener Naturbadestrand, voll aufgeschlossene Stellplätze unter alten Bäumen und der Bahnhof, mit dem du in 17 Minuten in Salzburg bist.",

  statement: {
    text: "Zwischen Altbaumbestand und Schilfgürtel beginnt der Wallersee gleich hinter deinem Stellplatz.",
    emphasis: "gleich hinter deinem Stellplatz",
  },

  pillars: [
    {
      title: "Eigener Naturbadestrand",
      text: "Direkter Seezugang am Westufer: über 20.000 m² Badefläche mit Liegewiese unter altem Baumbestand, gepflegt vom Betriebspersonal.",
      image: { src: `${IMG}/gallery-ccf8fe7a18.webp`, alt: "Liegewiese und Naturbadestrand des Seecamping am Wallersee" },
    },
    {
      title: "Baden & Wassersport",
      text: "Der Wallersee ist Bade- und Segelrevier zugleich — Schwimmen, Surfen und Segeln direkt am Platz, für Bootsbesitzer ein eigener Anlegesteg.",
      image: { src: `${IMG}/gallery-620ca27f5f.webp`, alt: "Schwimmen im Wallersee beim Seecamping" },
    },
    {
      title: "Salzburg in 17 Minuten",
      text: "Vom Bahnhof Wallersee direkt neben dem Platz bist du mit der ÖBB-Westbahn in einer guten Viertelstunde mitten in der Mozartstadt.",
      image: { src: `${IMG}/gallery-7d0c48ff2d.webp`, alt: "Blick auf die Stadt Salzburg mit der Festung Hohensalzburg" },
    },
  ],

  usps: ["Direkt am Wallersee", "Eigener Naturbadestrand", "Bahnhof am Platz", "Hunde willkommen", "Restaurant & Strandbuffet"],

  trust: {
    heading: "Mitten im Naturschutzgebiet, mit Komfort von heute",
    headingEmphasis: "Naturschutzgebiet",
    intro:
      "Der Platz liegt im Europaschutzgebiet „Wallersee – Wenger Moor“: alter Baumbestand, Schilfgürtel und ein eigener Strand auf rund 60.000 m². 2013 wurden die Sanitäranlagen komplett saniert.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-9fd3218535.webp`, alt: "Luftaufnahme: Seecamping Zell am Wallersee am Westufer des Wallersees" },
  },

  camping: {
    heading: "Camping am Westufer",
    intro:
      "Voll aufgeschlossene Stellplätze von 80 bis 120 m² unter alten Bäumen — Strom, Wasser und Kanal mit eigenem Zähler, asphaltierte und beleuchtete Zufahrt.",
    features: [],
  },

  anreise: {
    heading: "Anreise — auch ganz ohne Auto",
    modes: [
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Wallersee (ÖBB-Westbahn) liegt unmittelbar neben dem Platz — vom Salzburger Hauptbahnhof bist du in rund 17 Minuten da.",
      },
      {
        title: "Mit dem Auto",
        text: "Über die A1 Westautobahn bis zur Abfahrt Wallersee/Seekirchen, dann wenige Minuten ans Westufer nach Zell am Wallersee.",
      },
      {
        title: "Zu Fuß & per Rad",
        text: "Von Seekirchen führt ein Uferweg in wenigen Minuten zum Platz; rund um den See verläuft ein 20 km langer Wanderweg.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro: "Ein paar Aufnahmen vom Westufer des Wallersees.",
    tag: "April bis Oktober",
    images: [],
  },

  booking: {
    heading: "Dein Chalet am Wallersee",
    headingEmphasis: "am Wallersee",
    intro:
      "Wähle Zeitraum und Personen — die Chalets am Strand fragst du unverbindlich an, die Betriebsleitung meldet sich persönlich.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise pro Nacht je Chalet (bis zu 4 Personen) · Stand laut Website, bitte bei der Buchung bestätigen",
    highlight: {
      title: "Bahnhof am Platz",
      text: "Vom Bahnsteig Wallersee bist du in 17 Minuten am Salzburger Hauptbahnhof — Urlaub auch ganz ohne Auto.",
    },
    categories: [
      { id: "chalet-anis", label: "Chalet Anis", perNight: 95 },
      { id: "riviera-94", label: "Riviera 94", perNight: 175 },
      { id: "terrasse-loggia", label: "Terrasse Loggia", perNight: 175 },
    ],
  },

  kontakt: {
    coords: { lat: 47.918764, lng: 13.164471 },
    tel: "Kontakt per E-Mail",
    telHref: "mailto:info@see-camping.at",
    mail: "info@see-camping.at",
    adresse: "Bayerham 40 · 5201 Zell am Wallersee · Salzburg",
  },

  languages: ["DE"],

  nav: [
    { label: "Wallersee", href: "#top" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Chalets & Preise", href: "#booking" },
  ],
};

export default seeCamping;
