// Données non traduisibles partagées par tout le site (coordonnées, logos, liens).
// Les textes affichés sont dans src/i18n/fr.js et src/i18n/en.js.

export const COMPANY = "Central Media Communication & Technologies";

export const CONTACT_EMAIL = "contact@cmct.cm";
export const WEBSITE = { display: "www.cmct.com", href: "https://www.cmct.com" };

export const PHONES = [
  { display: "+237 698 933 346", href: "tel:+237698933346" },
  { display: "+237 677 137 263", href: "tel:+237677137263" },
];
export const LANDLINE = { display: "+237 222 306 079", href: "tel:+237222306079" };

export const ADDRESS = "Rue Felicia, Immeuble Dangote, Cami-Toyota, Coron, Yaoundé, Cameroun";
export const PO_BOX = "P.O. Box 17019, Yaoundé, Cameroun";
export const RCCM = "RC/YAO/2022/B/1633";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/cmct-central-media-communication-technologies/",
  facebook: "https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr",
};

// Logos des marques et programmes (null = pas encore de logo, un monogramme est affiché)
export const BRANDS = {
  etudiant: { name: "Journal L'Étudiant", logo: "/partners/etudiant.webp" },
  nationalpost: { name: "The National Post", logo: "/partners/national-post.webp" },
  nouvelleere: { name: "Nouvelle Ère", logo: "/partners/nouvelle-ere.webp" },
  camigra: { name: "CaMiGra Productions", logo: "/partners/camigra.webp" },
  makemba: { name: "Makemba Agency", logo: "/partners/makemba.webp" },
  academy: { name: "CaMiGra Academy", logo: "/partners/camigra.webp" },
  esstic: { name: "ESSTIC Plus", logo: "/partners/esstic-plus.webp" },
  iric: { name: "IRIC Plus", logo: "/partners/iric-plus.webp" },
  prepas: { name: "Prépas Plus", logo: null },
};

// Pages du site : chemin + clé du libellé traduit (t.nav[key])
export const NAV_ITEMS = [
  { path: "/", key: "homePage" },
  { path: "/a-propos", key: "about" },
  { path: "/organisation", key: "organisation" },
  { path: "/expertises", key: "expertises" },
  { path: "/realisations", key: "projects" },
  { path: "/galerie", key: "gallery" },
  { path: "/actualites", key: "news" },
  { path: "/contact", key: "contact" },
];

// Photothèque (fichiers dans /public/gallery, version "-sm" pour les vignettes).
// Les titres et légendes traduits sont dans t.gallery.items[id].
const photo = (id, w, h, category) => ({
  id, category, w, h,
  src: `/gallery/${id}.webp`,
  thumb: `/gallery/${id}-sm.webp`,
});
export const PHOTOS = {
  // Médias & presse
  une: photo("nouvelle-ere-une", 1313, 1800, "media"),
  etudiant151: photo("etudiant-151", 1350, 1800, "media"),
  etudiant389: photo("etudiant-389", 960, 1280, "media"),
  parole: photo("prise-de-parole", 1200, 1800, "media"),
  // Production audiovisuelle
  interview: photo("camigra-interview", 1800, 1200, "production"),
  tournage: photo("tournage-camera", 1200, 1800, "production"),
  photographe: photo("photographe", 1800, 1200, "production"),
  dronePilote: photo("drone-pilote", 1800, 1200, "production"),
  droneEquipe: photo("drone-equipe", 1800, 1200, "production"),
  dronePaysage: photo("drone-paysage", 1800, 1200, "production"),
  // Terrain
  mission: photo("mission-terrain", 1800, 1200, "field"),
  terrain: photo("camigra-terrain", 1800, 1200, "field"),
  camigraUe: photo("camigra-ue-terrain", 1800, 1200, "field"),
  visiteUe: photo("visite-ue-hcr", 1800, 1200, "field"),
  echange: photo("echange-communaute", 1800, 1200, "field"),
  enfants: photo("enfants-eau", 1800, 1200, "field"),
  // Institution & partenariats
  siege: photo("siege-cmct", 1450, 1800, "institution"),
  formation: photo("formation-e-entrepreneuses", 1800, 1200, "institution"),
  pricnac: photo("pricnac-rencontre", 1800, 1200, "institution"),
  delegation: photo("delegation-partenaires", 1800, 1231, "institution"),
  entrepot: photo("visite-entrepot", 1024, 683, "institution"),
  cece: photo("mission-cece", 1024, 633, "institution"),
};

// Ordre d'affichage de la galerie (les verticales occupent 2 rangées ; l'ordre limite les trous de la mosaïque)
const P = PHOTOS;
export const GALLERY = [
  // page 1 (9 photos) : 3 rangées pleines, puis 3 verticales sur 2 rangées
  P.interview, P.une, P.parole, P.tournage, P.mission, P.terrain,
  P.etudiant151, P.siege, P.etudiant389,
  // pages suivantes : photos horizontales, 3 par rangée
  P.dronePaysage, P.formation, P.camigraUe, P.visiteUe, P.photographe, P.dronePilote,
  P.pricnac, P.echange, P.droneEquipe, P.delegation, P.enfants, P.cece, P.entrepot,
];

// Partenaires et institutions (logos dans /public/partners)
export const PARTNERS = [
  { id: "ue", name: "Union européenne", logo: "/partners/ue.webp" },
  { id: "auf", name: "Agence universitaire de la Francophonie (AUF)", logo: "/partners/auf.webp" },
  { id: "acf", name: "Action contre la Faim", logo: "/partners/acf.webp" },
  { id: "care", name: "CARE", logo: "/partners/care.webp" },
  { id: "aau", name: "Association des universités africaines (AUA)", logo: "/partners/aau.webp" },
  { id: "cames", name: "Conseil africain et malgache pour l'enseignement supérieur (CAMES)", logo: "/partners/cames.webp" },
  { id: "pricnac", name: "PRICNAC – Promotion de la recherche, de l'innovation et de la culture numérique en Afrique centrale", logo: "/partners/pricnac.webp" },
  { id: "oeacp", name: "Organisation des États d'Afrique, des Caraïbes et du Pacifique (OEACP)", logo: "/partners/oeacp.webp" },
  { id: "oeacp-ri", name: "OEACP R&I", logo: "/partners/oeacp-ri.webp" },
  { id: "obreal", name: "OBREAL Global", logo: "/partners/obreal.webp" },
  { id: "reifac", name: "REIFAC – Réseau d'experts en ingénierie de formation en Afrique centrale et dans les Grands Lacs", logo: "/partners/reifac.webp" },
  { id: "cece", name: "Chambre économique Cameroun-Éthiopie (CECE)", logo: "/partners/cece.webp" },
  { id: "cavie", name: "Centre africain de veille et d'intelligence économique (CAVIE)", logo: "/partners/cavie.webp" },
  { id: "cacao", name: "Comité Cacao Durable du Cameroun", logo: "/partners/cacao-durable.webp" },
];

// Dernières unes des titres de l'écosystème (Actualités)
export const ISSUES = [
  { photo: PHOTOS.etudiant389, brand: "etudiant", number: "389", date: "2026-03-30" },
  { photo: PHOTOS.une, brand: "nouvelleere", number: "001", date: "2025-10-20" },
  { photo: PHOTOS.etudiant151, brand: "etudiant", number: "151", date: "2024-12-09" },
];
