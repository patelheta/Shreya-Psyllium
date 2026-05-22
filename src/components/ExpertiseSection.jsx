import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const expertise = [
  "Manufacturer",
  "Exporter",
  "Wholesaler",
  "Packaging Solution Provider",
];

const pillars = [
  {
    title: "Advanced Processing",
    description: "Modern handling and hygienic production practices for export-grade psyllium ingredients.",
  },
  {
    title: "Private Label Packaging",
    description: "Flexible packing formats for bulk containers, retail pouches, and custom spice packaging lines.",
  },
  {
    title: "Global Supply Support",
    description: "Built for distributors, importers, retailers, and food brands seeking reliable shipments from India.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 px-6 py-14 shadow-soft backdrop-blur-sm sm:px-8 lg:px-12">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(161,177,139,0.18),transparent_56%)]" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="Business Expertise"
            title="Built for export markets, retail packaging, and dependable long-term supply."
            description="Shreya Psyllium Industries combines product knowledge with packaging flexibility so buyers can source certified psyllium ingredients and ready-to-market packs from one trusted manufacturing partner."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-olive/20 bg-beige px-4 py-2 text-sm font-semibold text-forest"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="rounded-[1.75rem] border border-olive/10 bg-cream p-6 shadow-card"
            >
              <h3 className="text-xl font-semibold text-forest">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
