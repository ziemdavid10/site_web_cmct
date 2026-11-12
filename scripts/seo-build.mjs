// Étape SEO exécutée après `vite build` (voir package.json).
//
// Le site est une application React : sans cette étape, toutes les adresses renverraient le même
// fichier HTML, avec le titre et la description de l'accueil. Les robots qui n'exécutent pas
// JavaScript (aperçus Facebook, LinkedIn, WhatsApp…) verraient donc la même chose partout.
//
// Ce script crée dans dist/ :
//   - une copie de index.html par page (dist/<page>/index.html) avec ses propres balises ;
//   - sitemap.xml : la liste des pages à indexer ;
//   - robots.txt : les consignes pour les robots, avec l'adresse du sitemap.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fr from "../src/i18n/fr.js";
import { OG_IMAGE, SEO_ROUTES, SITE_URL, canonicalUrl, seoFor } from "../src/data/seo.js";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const today = new Date().toISOString().slice(0, 10);

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Remplace la valeur d'une balise ; échoue si la balise est absente (index.html modifié par erreur)
const replaceTag = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`seo-build : balise introuvable dans index.html (${label})`);
  return html.replace(pattern, replacement);
};

const withMeta = (html, { title, description, url }) => {
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  let out = html;
  out = replaceTag(out, /<title>[^<]*<\/title>/, `<title>${t}</title>`, "title");
  out = replaceTag(out, /(<meta name="description" content=")[^"]*(")/, `$1${d}$2`, "description");
  out = replaceTag(out, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, "canonical");
  out = replaceTag(out, /(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`, "og:title");
  out = replaceTag(out, /(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`, "og:description");
  out = replaceTag(out, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, "og:url");
  out = replaceTag(out, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`, "twitter:title");
  out = replaceTag(out, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`, "twitter:description");
  return out;
};

const template = await readFile(path.join(dist, "index.html"), "utf8");

// 1. Une page HTML par adresse (les textes français servent de version par défaut)
for (const { path: route, key } of SEO_ROUTES) {
  const html = withMeta(template, { ...seoFor(fr, key), url: canonicalUrl(route) });
  const dir = route === "/" ? dist : path.join(dist, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
}

// 2. Page « introuvable » : même contenu, mais exclue des moteurs de recherche
const notFound = replaceTag(
  withMeta(template, { title: `${fr.pages.notFound.title} | CMCT`, description: fr.pages.notFound.intro, url: canonicalUrl("/") }),
  /(<meta name="robots" content=")[^"]*(")/,
  "$1noindex, follow$2",
  "robots"
);
await writeFile(path.join(dist, "404.html"), notFound);

// 3. Plan du site
const urls = SEO_ROUTES.map(
  ({ path: route, priority, changefreq }) => `  <url>
    <loc>${canonicalUrl(route)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
).join("\n");
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

// 4. Consignes pour les robots
await writeFile(path.join(dist, "robots.txt"), `# Tous les robots peuvent parcourir le site\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`seo-build : ${SEO_ROUTES.length} pages, 404.html, sitemap.xml et robots.txt générés (image de partage : ${OG_IMAGE.path}).`);
