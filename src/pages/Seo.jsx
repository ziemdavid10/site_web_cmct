import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n/context.js";
import { canonicalUrl, seoFor } from "../data/seo.js";

const setMeta = (selector, attr, value) => document.head.querySelector(selector)?.setAttribute(attr, value);

// Met à jour les balises de la page courante : titre, description, adresse canonique,
// balises de partage (Open Graph / Twitter) et consigne d'indexation.
// `noindex` sert à la page « introuvable », qui ne doit pas apparaître dans les moteurs.
export const useSeo = (key, { noindex = false } = {}) => {
  const { t, lang } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = key === "notFound"
      ? { title: `${t.pages.notFound.title} | CMCT`, description: t.pages.notFound.intro }
      : seoFor(t, key);
    const url = canonicalUrl(pathname);

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:locale"]', "content", lang === "fr" ? "fr_FR" : "en_US");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [key, noindex, pathname, t, lang]);
};
