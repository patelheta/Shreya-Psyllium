import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const eyebrowClass = tone === "dark" ? "text-beige" : "text-olive";
  const titleClass = tone === "dark" ? "text-white" : "text-forest";
  const descriptionClass = tone === "dark" ? "text-white/70" : "text-stone";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-3xl ${alignment}`}
    >
      <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.35em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
