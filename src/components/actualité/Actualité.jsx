import "./Actualité.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowRight, LuCalendar, LuPlus, LuInfo } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { SectionHeading } from "../ui/ui.jsx";
import { fadeUp, stagger, inView } from "../ui/motion.js";

const PAGE_SIZE = 6;

const sources = [
  { id: "etudiant", name: "L'Étudiant", logo: "/partners/etudiant.webp" },
  { id: "national", name: "National Post", logo: "/partners/national-post.webp" },
  { id: "nouvelle", name: "Nouvelle Ère", logo: "/partners/nouvelle-ere.webp" },
];
const sourceName = Object.fromEntries(sources.map((s) => [s.id, s.name]));

const CATEGORY_COLORS = {
  POLITIQUE: "#e63946", SOCIETE: "#457b9d", CULTURE: "#a86200", ECONOMIE: "#1a1a1a", TECH: "#0b66d6",
  EDUCATION: "#21867a", SANTE: "#c1121f", SPORT: "#c45c00", ENVIRONNEMENT: "#21867a", SCIENCE: "#8338ec",
};

const articles = [
  { id: 1, source: "etudiant", category: "POLITIQUE", title: "Ernest Ouandié: un héros immortel dans l'histoire du Cameroun", date: "2025-02-15" },
  { id: 2, source: "etudiant", category: "SOCIETE", title: "\"j'étais en mbeng, je suis rentré\" Ines NTSAMA", date: "2025-02-15" },
  { id: 3, source: "etudiant", category: "CULTURE", title: "Les pays où les camerounais peuvent aller sans demande de visa", date: "2025-02-15" },
  { id: 4, source: "national", category: "ECONOMIE", title: "Nouvelle réforme fiscale au Cameroun", date: "2025-02-16" },
  { id: 5, source: "nouvelle", category: "TECH", title: "L'IA au service des médias francophones", date: "2025-02-17" },
  { id: 6, source: "etudiant", category: "EDUCATION", title: "Bourses d'études 2025: le guide", date: "2025-02-18" },
  { id: 7, source: "national", category: "SANTE", title: "Lutte contre le paludisme: les avancées récentes", date: "2025-02-19" },
  { id: 8, source: "nouvelle", category: "SPORT", title: "Le football camerounais en pleine renaissance", date: "2025-02-20" },
  { id: 9, source: "etudiant", category: "ENVIRONNEMENT", title: "Initiatives écologiques des jeunes camerounais", date: "2025-02-21" },
  { id: 10, source: "national", category: "CULTURE", title: "Festival de Douala 2025 : un succès retentissant", date: "2025-02-22" },
  { id: 11, source: "nouvelle", category: "SCIENCE", title: "Découverte scientifique majeure en Afrique", date: "2025-02-23" },
  { id: 12, source: "etudiant", category: "POLITIQUE", title: "Nouvelles alliances politiques au Cameroun", date: "2025-02-24" },
  { id: 13, source: "national", category: "SOCIETE", title: "Les défis de la migration au Cameroun", date: "2025-02-25" },
  { id: 14, source: "nouvelle", category: "CULTURE", title: "La renaissance du cinéma camerounais", date: "2025-02-26" },
  { id: 15, source: "etudiant", category: "ECONOMIE", title: "Le boom des startups au Cameroun", date: "2025-02-27" },
  { id: 16, source: "national", category: "TECH", title: "L'impact de la tech sur l'éducation camerounaise", date: "2025-02-28" },
  { id: 17, source: "nouvelle", category: "SANTE", title: "Nouvelles avancées médicales au Cameroun", date: "2025-03-01" },
  { id: 18, source: "etudiant", category: "SPORT", title: "Les exploits des athlètes camerounais", date: "2025-03-02" },
  { id: 19, source: "national", category: "ENVIRONNEMENT", title: "Les initiatives vertes au Cameroun", date: "2025-03-03" },
  { id: 20, source: "nouvelle", category: "CULTURE", title: "La musique camerounaise conquiert le monde", date: "2025-03-04" },
].map((a) => ({ ...a, image: "/news1.webp" }));

const Actualites = () => {
  const { t, lang } = useI18n();
  const n = t.news;
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const matching = articles.filter((a) => filter === "all" || a.source === filter);
  const shown = matching.slice(0, visibleCount);
  const remaining = matching.length - shown.length;

  const dateFmt = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  const changeFilter = (id) => {
    setFilter(id);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="news container">
      <SectionHeading label={n.kicker} title={n.title} />

      <motion.div className="filter-nav" variants={stagger(0.06)} {...inView(0.5)}>
        <div className="filter-group" role="group" aria-label={n.filterLabel}>
          <motion.button
            variants={fadeUp}
            type="button"
            className={filter === "all" ? "active" : ""}
            aria-pressed={filter === "all"}
            onClick={() => changeFilter("all")}
          >
            {filter === "all" && <motion.span layoutId="news-filter" className="f-bg" />}
            <span className="f-label">{n.all}</span>
          </motion.button>
          {sources.map((src) => (
            <motion.button
              variants={fadeUp}
              type="button"
              key={src.id}
              className={filter === src.id ? "active" : ""}
              aria-pressed={filter === src.id}
              onClick={() => changeFilter(src.id)}
            >
              {filter === src.id && <motion.span layoutId="news-filter" className="f-bg" />}
              <img src={src.logo} alt="" />
              <span className="f-label">{src.name}</span>
            </motion.button>
          ))}
        </div>
        {n.langNote && (
          <p className="lang-note">
            <LuInfo aria-hidden="true" /> {n.langNote}
          </p>
        )}
      </motion.div>

      <p className="visually-hidden" aria-live="polite">{n.live(shown.length, matching.length)}</p>

      <motion.div layout className="news-grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((article, idx) => (
            <motion.article
              key={article.id}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, delay: (idx % PAGE_SIZE) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="news-card"
              lang="fr"
            >
              <div className="card-media">
                <img src={article.image} alt="" loading="lazy" />
                <span className="overlay-tag" style={{ backgroundColor: CATEGORY_COLORS[article.category] }} lang={lang}>
                  {n.categories[article.category]}
                </span>
              </div>
              <div className="card-body">
                <div className="meta" lang={lang}>
                  <span className="source-label">{sourceName[article.source]}</span>
                  <span className="separator" aria-hidden="true">•</span>
                  <time className="date" dateTime={article.date}>
                    <LuCalendar aria-hidden="true" />
                    {dateFmt.format(new Date(article.date))}
                  </time>
                </div>
                <h3>{article.title}</h3>
                <span className="card-line" aria-hidden="true" />
                <div className="card-footer" lang={lang}>
                  <span className="read-more">{n.readMore}</span>
                  <LuArrowRight aria-hidden="true" />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {remaining > 0 && (
        <div className="load-more-zone">
          <motion.button
            type="button"
            className="btn ghost-dark load-more"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LuPlus aria-hidden="true" />
            {n.loadMore}
            <span className="count">{remaining}</span>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Actualites;
