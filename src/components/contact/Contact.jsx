import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  LuBuilding2, LuScale, LuFileBadge, LuMapPin, LuMailbox, LuSmartphone, LuPhone, LuGlobe, LuMail,
  LuSend, LuLoader2, LuCheckCircle2, LuAlertCircle, LuChevronDown,
} from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { SOCIAL, CONTACT_EMAIL, COMPANY, RCCM, ADDRESS, PO_BOX, PHONES, LANDLINE, WEBSITE } from "../../data/site.js";
import { useI18n } from "../../i18n/context.js";
import { SplitWords } from "../ui/ui.jsx";
import { fadeUp, slideLeft, slideRight, stagger, inView } from "../ui/motion.js";
import "./Contact.scss";

// Clés EmailJS à placer dans un fichier .env.local (voir .env.example).
// Sans clés, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.
const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const emailjsReady = Boolean(EMAILJS.service && EMAILJS.template && EMAILJS.publicKey);

const EMPTY = { name: "", email: "", organisation: "", subject: "", message: "" };

const validate = (v, msg) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = msg.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = msg.email;
  if (v.message.trim().length < 10) e.message = msg.message;
  return e;
};

const Contact = () => {
  const { t } = useI18n();
  const c = t.contact;
  const formRef = useRef(null);
  const [values, setValues] = useState({ ...EMPTY, subject: "0" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Les erreurs sont recalculées à chaque rendu : elles suivent donc la langue choisie
  const errors = validate(values, c.errors);
  const subjectLabel = c.subjects[Number(values.subject)] ?? c.subjects[0];

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };
  const onBlur = (e) => setTouched((tt) => ({ ...tt, [e.target.name]: true }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const keys = Object.keys(errors);
    if (keys.length) {
      formRef.current?.querySelector(`[name="${keys[0]}"]`)?.focus();
      return;
    }

    if (!emailjsReady) {
      const subject = encodeURIComponent(`${c.mailSubject} – ${subjectLabel} – ${values.name}`);
      const body = encodeURIComponent(
        `${values.message}\n\n—\n${values.name}${values.organisation ? `\n${values.organisation}` : ""}\n${values.email}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          name: values.name,
          email: values.email,
          organisation: values.organisation,
          subject: subjectLabel,
          message: values.message,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setStatus("success");
      setValues({ ...EMPTY, subject: "0" });
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const showError = (name) => touched[name] && errors[name];

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    placeholder: " ",
    "aria-invalid": showError(name) ? true : undefined,
    "aria-describedby": showError(name) ? `contact-${name}-error` : undefined,
  });

  const fieldError = (name) => (
    <AnimatePresence>
      {showError(name) && (
        <motion.span
          className="field-error"
          id={`contact-${name}-error`}
          initial={{ opacity: 0, y: -6, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -6, height: 0 }}
        >
          {errors[name]}
        </motion.span>
      )}
    </AnimatePresence>
  );

  const info = [
    { icon: LuBuilding2, label: c.info.name, value: COMPANY },
    { icon: LuScale, label: c.info.legal, value: c.info.legalValue, note: c.info.legalNote },
    { icon: LuFileBadge, label: c.info.rccm, value: RCCM },
    { icon: LuMapPin, label: c.info.address, value: ADDRESS },
    { icon: LuMailbox, label: c.info.po, value: PO_BOX },
    { icon: LuSmartphone, label: c.info.phone, links: PHONES },
    { icon: LuPhone, label: c.info.landline, links: [LANDLINE] },
    { icon: LuMail, label: c.info.email, links: [{ display: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }] },
    { icon: LuGlobe, label: c.info.website, links: [{ ...WEBSITE, external: true }] },
  ];

  return (
    <div className="contact container">
      <div className="contact-grid">
        {/* Colonne gauche : texte + informations institutionnelles */}
        <div className="contact-left">
          <motion.p className="kicker" variants={slideLeft} {...inView()}>
            <span aria-hidden="true">/</span> {c.kicker}
          </motion.p>
          <h2 className="contact-title">
            <SplitWords text={c.title} />
            <SplitWords text={c.titleAccent} className="accent" delay={0.2} />
          </h2>
          <motion.p className="contact-intro" variants={fadeUp} {...inView()}>{c.intro}</motion.p>

          <motion.div className="info-card" variants={slideLeft} {...inView(0.15)}>
            <h3>{c.infoTitle}</h3>
            <motion.dl variants={stagger(0.05, 0.2)} {...inView(0.1)}>
              {info.map(({ icon: Icon, label, value, note, links }) => (
                <motion.div className="info-row" key={label} variants={fadeUp}>
                  <span className="i-icon"><Icon aria-hidden="true" /></span>
                  <dt>{label}</dt>
                  <dd>
                    {value && <span>{value}</span>}
                    {note && <small>({note})</small>}
                    {links &&
                      links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && " / "}
                          <a href={l.href} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}>{l.display}</a>
                        </span>
                      ))}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            <div className="social">
              <span>{c.socialTitle}</span>
              <motion.a whileHover={{ y: -3 }} href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label={t.topbar.linkedin}>
                <FaLinkedinIn />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label={t.topbar.facebook}>
                <FaFacebookF />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Colonne droite : formulaire */}
        <motion.div className="form-card" variants={slideRight} {...inView(0.1)}>
          <h3>{c.formTitle}</h3>
          <form ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className={`input-field ${showError("name") ? "has-error" : ""}`}>
                <input type="text" autoComplete="name" {...fieldProps("name")} />
                <label htmlFor="contact-name">{c.fields.name}</label>
                {fieldError("name")}
              </div>
              <div className={`input-field ${showError("email") ? "has-error" : ""}`}>
                <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
                <label htmlFor="contact-email">{c.fields.email}</label>
                {fieldError("email")}
              </div>
            </div>

            <div className="form-row">
              <div className="input-field">
                <input type="text" autoComplete="organization" {...fieldProps("organisation")} />
                <label htmlFor="contact-organisation">{c.fields.organisation}</label>
              </div>
              <div className="input-field select-field">
                <select id="contact-subject" name="subject" value={values.subject} onChange={onChange}>
                  {c.subjects.map((s, i) => (
                    <option key={s} value={String(i)}>{s}</option>
                  ))}
                </select>
                <label htmlFor="contact-subject" className="static-label">{c.fields.subject}</label>
                <LuChevronDown className="select-icon" aria-hidden="true" />
              </div>
            </div>

            <div className={`input-field ${showError("message") ? "has-error" : ""}`}>
              <textarea rows="5" {...fieldProps("message")} />
              <label htmlFor="contact-message">{c.fields.message}</label>
              {fieldError("message")}
            </div>

            <motion.button
              whileHover={status === "sending" ? undefined : { y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="btn primary submit"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <LuLoader2 className="spin" aria-hidden="true" />
                  {c.sending}
                </>
              ) : (
                <>
                  {c.send}
                  <LuSend className="btn-icon" aria-hidden="true" />
                </>
              )}
            </motion.button>

            <div aria-live="polite">
              <AnimatePresence>
                {status === "success" && (
                  <motion.p className="form-status success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <LuCheckCircle2 aria-hidden="true" />
                    {emailjsReady ? c.success : c.mailtoSuccess}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p className="form-status error" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <LuAlertCircle aria-hidden="true" />
                    <span>
                      {c.error} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
