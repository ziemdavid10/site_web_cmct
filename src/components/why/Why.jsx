import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LuLayers, LuMap, LuAward, LuEar, LuFileText, LuRocket, LuPackageCheck } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { SectionHeading } from "../ui/ui.jsx";
import { fadeUp, stagger, inView, EASE } from "../ui/motion.js";
import { PHOTOS } from "../../data/site.js";
import "./Why.scss";

const REASON_ICONS = [LuLayers, LuMap, LuAward];
const STEP_ICONS = [LuEar, LuFileText, LuRocket, LuPackageCheck];

const Why = () => {
  const { t } = useI18n();
  const w = t.why;

  const methodRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: methodRef, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  // Bandeau photo en parallaxe entre les raisons et la méthode
  const bannerRef = useRef(null);
  const { scrollYProgress: bannerProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const bannerY = useTransform(bannerProgress, [0, 1], ["-12%", "12%"]);
  const banner = PHOTOS.dronePaysage;
  const bannerText = t.gallery.items[banner.id];

  return (
    <div className="why container">
      <SectionHeading label={w.label} title={w.title} />

      <motion.ol className="reasons" variants={stagger(0.15)} {...inView(0.1)}>
        {w.reasons.map((r, i) => {
          const Icon = REASON_ICONS[i];
          return (
            <motion.li key={r.title} variants={fadeUp} className="reason">
              <span className="r-num">0{i + 1}</span>
              <div className="r-body">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
              <motion.span className="r-icon" whileHover={{ rotate: -12, scale: 1.1 }}>
                <Icon aria-hidden="true" />
              </motion.span>
            </motion.li>
          );
        })}
      </motion.ol>

      <motion.figure
        ref={bannerRef}
        className="why-banner"
        initial={{ opacity: 0, clipPath: "inset(10% 6% 10% 6% round 28px)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <motion.img
          src={banner.src}
          alt={bannerText.caption}
          width={banner.w}
          height={banner.h}
          loading="lazy"
          style={{ y: bannerY }}
        />
        <figcaption>
          <strong>{bannerText.title}</strong>
          <span>{bannerText.caption}</span>
        </figcaption>
      </motion.figure>

      <div className="method" ref={methodRef}>
        <motion.h3 variants={fadeUp} {...inView()}>{w.method.title}</motion.h3>
        <div className="method-track" aria-hidden="true">
          <motion.span style={{ scaleX: progress }} />
        </div>
        <ol>
          {w.method.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              >
                <motion.span
                  className="s-icon"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 + i * 0.12 }}
                >
                  <Icon aria-hidden="true" />
                </motion.span>
                <span className="s-num">0{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Why;
