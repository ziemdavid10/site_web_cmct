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

// id = identifiant de la section dans App.jsx ; la clé sert à trouver le libellé traduit (t.nav[key])
export const NAV_ITEMS = [
  { id: "About", key: "about" },
  { id: "Organisation", key: "organisation" },
  { id: "Services", key: "expertises" },
  { id: "References", key: "projects" },
  { id: "Galerie", key: "gallery" },
  { id: "Actualites", key: "news" },
  { id: "Contact", key: "contact" },
];

// Photothèque (fichiers dans /public/gallery, version "-sm" pour les vignettes).
// Les titres et légendes traduits sont dans t.gallery.items[id].
const photo = (id, w, h, category) => ({
  id, category, w, h,
  src: `/gallery/${id}.webp`,
  thumb: `/gallery/${id}-sm.webp`,
});
export const PHOTOS = {
  une: photo("nouvelle-ere-une", 1313, 1800, "media"),
  tournage: photo("tournage-camera", 1200, 1800, "production"),
  mission: photo("mission-terrain", 1800, 1200, "field"),
  interview: photo("camigra-interview", 1800, 1200, "production"),
  terrain: photo("camigra-terrain", 1800, 1200, "field"),
  parole: photo("prise-de-parole", 1200, 1800, "media"),
};
// Ordre d'affichage : pensé pour que la mosaïque (photos verticales sur 2 rangées) n'ait pas de trou
export const GALLERY = [PHOTOS.interview, PHOTOS.une, PHOTOS.parole, PHOTOS.tournage, PHOTOS.mission, PHOTOS.terrain];
