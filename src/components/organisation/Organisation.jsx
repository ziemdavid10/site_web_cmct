import { motion } from "framer-motion";
import { LuBuilding2, LuNewspaper, LuClapperboard, LuCpu, LuGraduationCap, LuHeartHandshake, LuInfo, LuLayers, LuBox, LuPlus } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { BRANDS } from "../../data/site.js";
import { SectionHeading, BrandMark } from "../ui/ui.jsx";
import { fadeUp, scaleIn, stagger, inView, EASE } from "../ui/motion.js";
import "./Organisation.scss";

const DIRECTION_ICONS = { media: LuNewspaper, comm: LuClapperboard, tech: LuCpu, training: LuGraduationCap };

const Organisation = () => {
  const { t } = useI18n();
  const o = t.organisation;

  return (
    <div className="organisation container">
      <SectionHeading label={o.label} title={o.title} intro={o.intro} />

      {/* Organigramme */}
      <div className="org-chart">
        <motion.div className="org-hq" variants={scaleIn} {...inView(0.5)}>
          <span className="hq-icon"><LuBuilding2 aria-hidden="true" /></span>
          <div>
            <strong>{o.hq.name}</strong>
            <span>{o.hq.text}</span>
          </div>
        </motion.div>

        <motion.div
          className="org-stem"
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.div
          className="org-branch"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
        />

        <motion.ul className="org-directions" variants={stagger(0.12, 0.8)} {...inView(0.15)}>
          {o.directions.map((d, i) => {
            const Icon = DIRECTION_ICONS[d.id];
            return (
              <motion.li key={d.id} className={`dir dir-${d.id}`} variants={fadeUp} whileHover={{ y: -8 }}>
                <span className="dir-num">0{i + 3}</span>
                <span className="dir-icon"><Icon aria-hidden="true" /></span>
                <h3>{d.name}</h3>
                <ul className="dir-brands">
                  {d.brands.map((b) => (
                    <li key={b}>
                      <BrandMark brand={BRANDS[b]} size="sm" />
                      <span>{BRANDS[b].name}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="org-transversal"
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <LuHeartHandshake aria-hidden="true" />
          <div>
            <strong>{o.transversal.name}</strong>
            <span>{o.transversal.text}</span>
          </div>
        </motion.div>
      </div>

      {/* Fonctions transversales + collaboration */}
      <div className="org-details">
        <div className="functions">
          <motion.h3 variants={fadeUp} {...inView()}>{o.functions.title}</motion.h3>
          <motion.div variants={stagger(0.15)} {...inView(0.2)}>
            {o.functions.items.map((f) => (
              <motion.article key={f.title} variants={fadeUp}>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="collaboration"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h3>{o.collaboration.title}</h3>
          <p>{o.collaboration.text}</p>

          <div className="collab-visual">
            <div className="collab-col">
              <span className="collab-head"><LuBox aria-hidden="true" /> {o.collaboration.single}</span>
              <motion.ul variants={stagger(0.08)} {...inView(0.4)}>
                {o.collaboration.singleExamples.map((x) => (
                  <motion.li key={x} variants={scaleIn}>{x}</motion.li>
                ))}
              </motion.ul>
            </div>
            <span className="collab-or" aria-hidden="true">/</span>
            <div className="collab-col integrated">
              <span className="collab-head"><LuLayers aria-hidden="true" /> {o.collaboration.integrated}</span>
              <motion.ul variants={stagger(0.08, 0.3)} {...inView(0.4)}>
                {o.collaboration.integratedExamples.map((x, i) => (
                  <motion.li key={x} variants={scaleIn}>
                    {i > 0 && <LuPlus className="plus" aria-hidden="true" />}
                    {x}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p className="org-note" variants={fadeUp} {...inView()}>
        <LuInfo aria-hidden="true" />
        <span>{o.note}</span>
      </motion.p>
    </div>
  );
};

export default Organisation;
