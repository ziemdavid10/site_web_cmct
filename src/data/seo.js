// Référencement (SEO) : source unique utilisée par le site (src/pages/Seo.jsx)
// et par le script de build (scripts/seo-build.mjs). Fichier sans dépendance au navigateur.

import { NAV_ITEMS } from "./site.js";

// Adresse officielle du site (celle vers laquelle mycmct.com redirige)
export const SITE_URL = "https://www.mycmct.com";
export const SITE_NAME = "Central Media and Communication Technology";
export const SITE_SHORT_NAME = "CMCT";

// Image affichée lors d'un partage (Facebook, LinkedIn, WhatsApp, X…) : 1200 × 630 px
export const OG_IMAGE = { path: "/og-image.jpg", width: 1200, height: 630 };

// Pages indexables : chemin + clé des textes (t.pages[key]) ; "home" pour l'accueil
export const SEO_ROUTES = NAV_ITEMS.map(({ path, key }) => ({
  path,
  key: path === "/" ? "home" : key,
  // Importance relative indiquée aux moteurs dans le sitemap
  priority: path === "/" ? "1.0" : ["/expertises", "/realisations", "/contact"].includes(path) ? "0.9" : "0.7",
  changefreq: path === "/actualites" ? "weekly" : "monthly",
}));

// Adresse complète d'une page, sans barre finale (sauf l'accueil)
export const canonicalUrl = (path) => SITE_URL + (path === "/" ? "/" : path.replace(/\/$/, ""));

// Titre et description d'une page dans la langue du dictionnaire `t`
export const seoFor = (t, key) => {
  if (key === "home") return { title: SITE_NAME, description: t.meta.description };
  const page = t.pages[key];
  return { title: `${page.title} | ${SITE_SHORT_NAME}`, description: page.seo ?? page.intro };
};
