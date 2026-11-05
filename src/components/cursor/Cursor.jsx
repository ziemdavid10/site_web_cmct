import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Cursor.scss";

// Vrai uniquement avec une souris (pas sur téléphone / tablette tactile)
const canUseCustomCursor = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Cursor = () => {
  const [enabled, setEnabled] = useState(canUseCustomCursor);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Valeurs animées : aucun re-rendu React à chaque mouvement de souris
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const outlineX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 });
  const outlineY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setEnabled(canUseCustomCursor());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-custom-cursor", enabled);
    if (!enabled) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      setHovering(!!e.target.closest?.("a, button, [role='button'], input, textarea, select, label"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`cursor-outline ${hovering ? "active" : ""}`}
        style={{ x: outlineX, y: outlineY, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-dot"
        style={{ x, y, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
};

export default Cursor;
