import { motion } from "framer-motion";
import ExpertiseSection from "./components/ExpertiseSection";
import SectionHeading from "./components/SectionHeading";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
  { label: "Exports", href: "#exports" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "IEC", label: "Licensed Export Business" },
  { value: "APEDA", label: "Registered Exporter" },
  { value: "2030", label: "FSSAI Validity" },
  { value: "5+", label: "Core Product Categories" },
];

const products = [
  {
    title: "Psyllium Husk",
    description:
      "Clean, premium husk processed for international quality expectations and dependable consistency.",
    image: "https://satnampsyllium.com/wp-content/uploads/2024/09/03-5.webp",
  },
  {
    title: "Psyllium Powder",
    description:
      "Export-grade psyllium powder prepared for food, wellness, and industrial buyer requirements.",
    image:
      "https://satnampsyllium.com/wp-content/uploads/2024/12/imgpsh_fullsize_anim-3-1.webp",
  },
  {
    title: "Psyllium Seeds",
    description:
      "Carefully sourced and processed psyllium seeds backed by reliable manufacturing support.",
    image: "https://satnampsyllium.com/wp-content/uploads/2024/09/04-5.webp",
  },
  {
    title: "Spice Packaging",
    description:
      "Retail-ready and bulk spice packaging formats designed for cleaner presentation and safer transit.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Retail Packaging Solutions",
    description:
      "Private label pouches, jars, and small-format packs tailored for modern shelves and export orders.",
    image: "https://satnampsyllium.com/wp-content/uploads/2024/12/01-1.webp",
  },
];

const features = [
  "Export Quality Products",
  "APEDA Registered Exporter",
  "FSSAI Certified",
  "Modern Manufacturing",
  "Hygienic Processing",
  "Custom Packaging Solutions",
  "Timely Global Delivery",
  "International Standards",
];

const certifications = [
  {
    title: "IEC Certificate",
    detail: "IEC Export License for international trade operations.",
  },
  {
    title: "APEDA Registration",
    detail:
      "Registered manufacturer exporter for psyllium exports and agri-food trade.",
  },
  {
    title: "FSSAI Central License",
    detail:
      "Central food license valid until 2030, supporting certified food-grade operations.",
  },
];

const companyHighlights = [
  "Trusted manufacturer and exporter from Gujarat, India",
  "Focused on psyllium husk, powder, seeds, and tailored packaging",
  "Serving wholesalers, importers, retailers, and global buyers",
  "Built around export quality, hygiene, and dependable fulfillment",
];

const companyShowcase = [
  {
    image: "https://satnampsyllium.com/wp-content/uploads/2024/12/01-1.webp",
    title: "Retail & Bulk Packaging",
  },
  {
    image:
      "https://satnampsyllium.com/wp-content/uploads/2024/12/imgpsh_fullsize_anim-3-1.webp",
    title: "Processed Psyllium Powder",
  },
  {
    image: "https://satnampsyllium.com/wp-content/uploads/2024/09/04-5.webp",
    title: "Premium Psyllium Seeds",
  },
];

const exportStats = [
  { value: "01", label: "Manufacturing source in Gujarat, India" },
  { value: "03", label: "Core certifications supporting export confidence" },
  { value: "05", label: "Premium product and packaging categories" },
];

const footerLinks = {
  quick: ["About", "Products", "Packaging Gallery", "Exports", "Contact"],
  products: [
    "Psyllium Husk",
    "Psyllium Powder",
    "Psyllium Seeds",
    "Spice Packaging",
  ],
  certifications: ["IEC Licensed", "APEDA Registered", "FSSAI Certified"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  }),
};

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

function IconBadge({ children }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-beige text-lg text-forest shadow-sm">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3 text-forest">
            <img
              src="/shreya-logo.png"
              alt="Shreya Psyllium Industries logo"
              className="h-14 w-14 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <p className="font-display text-2xl leading-none">
                Shreya Psyllium
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-stone">
                Industries
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-stone transition hover:text-forest"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-olive"
          >
            Contact Us
          </a>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(161,177,139,0.35),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(239,229,210,0.75),transparent_24%),linear-gradient(135deg,#f7f4ec_0%,#ffffff_40%,#eef4ea_100%)]" />
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <motion.p
                  custom={0.1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mb-4 inline-flex rounded-full border border-olive/15 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-olive shadow-sm"
                >
                  Manufacturer • Exporter • Packaging Solutions
                </motion.p>
                <motion.h1
                  custom={0.2}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="max-w-3xl font-display text-5xl leading-[0.96] text-forest sm:text-6xl lg:text-7xl"
                >
                  Premium Psyllium Manufacturer & Exporter
                </motion.h1>
                <motion.p
                  custom={0.3}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 max-w-2xl text-lg leading-8 text-stone sm:text-xl"
                >
                  Trusted Global Supplier of Psyllium Husk, Psyllium Powder &
                  Packaging Solutions
                </motion.p>
                <motion.div
                  custom={0.4}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#contact"
                    className="rounded-full bg-forest px-7 py-4 text-center text-sm font-semibold text-white shadow-card transition hover:-translate-y-1 hover:bg-olive"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#products"
                    className="rounded-full border border-forest/15 bg-white px-7 py-4 text-center text-sm font-semibold text-forest transition hover:-translate-y-1 hover:border-olive hover:text-olive"
                  >
                    Explore Products
                  </a>
                </motion.div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      custom={0.45 + index * 0.08}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-card backdrop-blur"
                    >
                      <div className="text-2xl font-extrabold text-forest">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-stone">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-full bg-beige blur-2xl lg:block" />
                <div className="absolute -right-6 bottom-12 hidden h-32 w-32 rounded-full bg-sage/40 blur-3xl lg:block" />
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(35,65,47,0.22)]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-forest/55 via-forest/10 to-transparent" />
                  <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80"
                    alt="Premium psyllium farm and export quality production"
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                    <div className="max-w-sm rounded-[1.75rem] border border-white/20 bg-white/15 p-6 text-white backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-beige">
                        Certified Export Business
                      </p>
                      <p className="mt-3 text-2xl font-semibold leading-tight">
                        Manufacturing premium psyllium products with modern
                        packaging capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <Container className="space-y-24 pb-24">
          <section
            id="about"
            className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2.25rem] shadow-soft"
            >
              <img
                src="/about-company-1.png"
                alt="Modern manufacturing facility exterior"
                className="h-full min-h-[560px] w-full object-cover"
              />

              <img
                src="/about-company-2.png"
                alt="Modern manufacturing facility exterior"
                className="h-full min-h-[560px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 via-forest/15 to-transparent p-8 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-beige">
                  Our Story
                </p>
                <p className="mt-3 max-w-lg text-lg leading-8 text-white/90">
                  Built to serve export markets with reliable product quality,
                  clean handling, and presentation-ready packaging support.
                </p>
              </div>
            </motion.div>
            <div>
              <SectionHeading
                eyebrow="About Company"
                title="Shreya Psyllium Industries delivers export-grade psyllium with dependable packaging support."
                description="Shreya Psyllium Industries is a trusted manufacturer and exporter of premium quality Psyllium Husk, Psyllium Powder, and Psyllium Seeds from India. We specialize in delivering export-grade psyllium products with advanced packaging solutions for domestic and international markets."
              />
              <p className="mt-6 text-base leading-8 text-stone sm:text-lg">
                With strong quality standards, modern processing methods, and
                customized packaging expertise, we serve wholesalers, importers,
                retailers, and global buyers with reliable products and
                professional service.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    value: "Export",
                    label:
                      "Focused manufacturing and supply support for domestic and international buyers.",
                  },
                  {
                    value: "Custom",
                    label:
                      "Retail, private-label, and bulk packaging formats tailored to buyer needs.",
                  },
                  {
                    value: "Quality",
                    label:
                      "Built around hygienic processing, consistency, and certification-backed trust.",
                  },
                  {
                    value: "Service",
                    label:
                      "Professional support for wholesalers, importers, retailers, and global trade partners.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    className="rounded-[1.75rem] border border-olive/10 bg-white p-6 shadow-card"
                  >
                    <p className="text-2xl font-extrabold text-forest">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <ExpertiseSection />

          <section id="products">
            <SectionHeading
              eyebrow="Our Products"
              title="A premium product range designed for export buyers, wholesalers, and private-label packaging needs."
              description="Each product category is presented with a clean, modern card design inspired by high-trust export company websites."
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <motion.article
                  key={product.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[2rem] border border-olive/10 bg-white shadow-card"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-olive">
                      Export Quality
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-forest">
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone">
                      {product.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section
            id="why-us"
            className="rounded-[2.5rem] bg-forest px-6 py-16 text-white shadow-soft sm:px-8 lg:px-12"
          >
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Certification-backed quality, modern manufacturing, and custom packaging in one trusted partner."
              description="A refined feature grid that reinforces confidence for international buyers and domestic trade partners."
              tone="dark"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/12"
                >
                  <IconBadge>{index + 1}</IconBadge>
                  <p className="mt-5 text-lg font-semibold">{feature}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="certifications">
            <SectionHeading
              eyebrow="Recognitions"
              title="Export credentials and food compliance that strengthen buyer confidence."
              description="The site presents core registration details in a premium card layout, making certifications easy to verify at a glance."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {certifications.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-olive/10 bg-gradient-to-b from-white to-cream p-7 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <IconBadge>{["IEC", "AP", "FS"][index]}</IconBadge>
                    <span className="rounded-full bg-forest px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      Certified
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section
            id="gallery"
            className="rounded-[2.5rem] border border-olive/10 bg-white/80 px-6 py-16 shadow-soft backdrop-blur-sm sm:px-8 lg:px-12"
          >
            <SectionHeading
              eyebrow="Company Overview"
              title="Shreya Psyllium Industries combines export-ready products with dependable packaging and buyer-focused service."
              description="This section replaces the old gallery with company information and business-style visuals that better represent the brand."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {companyHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.55, delay: index * 0.06 }}
                      className="rounded-[1.5rem] border border-olive/10 bg-cream p-5 shadow-card"
                    >
                      <p className="text-sm font-semibold leading-7 text-forest">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.16 }}
                  className="mt-6 rounded-[2rem] border border-olive/10 bg-forest p-7 text-white shadow-card"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-beige">
                    Business Information
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold">
                    Manufacturer, Exporter, Wholesaler, and Packaging Solution
                    Provider
                  </h3>
                  <p className="mt-5 text-base leading-8 text-white/75">
                    Shreya Psyllium Industries supplies premium Psyllium Husk,
                    Psyllium Powder, Psyllium Seeds, spice packaging, and small
                    packaging solutions for domestic trade and international
                    markets.
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/75">
                    Based at R.S.NO.180/1, AT-BILIYA VILLAGE, TAL-SIDHPUR,
                    DIST-PATAN, Gujarat, India - 384151, the company is
                    positioned to support bulk requirements, export orders, and
                    custom-packed presentations.
                  </p>
                </motion.div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {companyShowcase.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className={`${index === 0 ? "sm:col-span-2" : ""} group overflow-hidden rounded-[2rem] border border-olive/10 bg-white shadow-card`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="exports"
            className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#203828_0%,#2e4c37_55%,#49603e_100%)] px-6 py-16 text-white shadow-soft sm:px-8 lg:px-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_48%)]" />
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20 lg:block" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeading
                  eyebrow="Global Exports"
                  title="Supplying premium psyllium products to international markets with trusted quality standards and customized packaging solutions."
                  description="This section translates the export-first tone from the reference site into a cleaner, more modern presentation with confidence-building statistics."
                  tone="dark"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {exportStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur-sm"
                  >
                    <div className="text-4xl font-extrabold text-beige">
                      {stat.value}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <SectionHeading
              eyebrow="Connect"
              title="Let’s talk about bulk supply, export orders, and custom packaging requirements."
              description="A premium inquiry section with direct business details, a WhatsApp action, and a clean lead form layout."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                {[
                  {
                    title: "Phone",
                    value: "+91 9724277088, +91 8160458881",
                  },
                  {
                    title: "Email",
                    value: "shreyapsylliumindustries@gmail.com",
                  },
                  {
                    title: "Address",
                    value:
                      "Biliya kahoda road BILIYA, Siddhpur, Gujarat 384151, India",
                  },
                  {
                    title: "Business",
                    value:
                      "Manufacturer, Exporter, Wholesaler, Packaging Solution Provider",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-olive/10 bg-white p-6 shadow-card"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-olive">
                      {card.title}
                    </p>
                    <p className="mt-3 text-lg leading-8 text-forest">
                      {card.value}
                    </p>
                  </motion.div>
                ))}
                <div className="rounded-[1.75rem] overflow-hidden border border-olive/10 shadow-card">
                  <iframe
                    title="Google Maps Placeholder"
                    src="https://maps.google.com/maps?q=Biliya%20kahoda%20road%20BILIYA%2C%20Siddhpur%2C%20Gujarat%20384151%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-72 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <motion.form
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="rounded-[2rem] border border-olive/10 bg-white p-6 shadow-soft sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    className="rounded-2xl border border-olive/10 bg-cream px-5 py-4 outline-none transition focus:border-olive"
                    placeholder="Your Name"
                  />
                  <input
                    className="rounded-2xl border border-olive/10 bg-cream px-5 py-4 outline-none transition focus:border-olive"
                    placeholder="Company Name"
                  />
                  <input
                    className="rounded-2xl border border-olive/10 bg-cream px-5 py-4 outline-none transition focus:border-olive"
                    placeholder="Email Address"
                  />
                  <input
                    className="rounded-2xl border border-olive/10 bg-cream px-5 py-4 outline-none transition focus:border-olive"
                    placeholder="Phone / WhatsApp"
                  />
                </div>
                <input
                  className="mt-5 w-full rounded-2xl border border-olive/10 bg-cream px-5 py-4 outline-none transition focus:border-olive"
                  placeholder="Product Requirement"
                />
                <textarea
                  rows="6"
                  className="mt-5 w-full rounded-2xl border border-olive/10 bg-cream px-5 py-4 outline-none transition focus:border-olive"
                  placeholder="Tell us about your quantity, packaging, and export destination."
                />
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-full bg-forest px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-olive"
                  >
                    Send Inquiry
                  </button>
                  <a
                    href="https://wa.me/919724277088"
                    className="rounded-full border border-forest/15 px-7 py-4 text-center text-sm font-semibold text-forest transition hover:-translate-y-1 hover:border-olive hover:text-olive"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </motion.form>
            </div>
          </section>
        </Container>
      </main>

      <footer className="bg-forest py-14 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/shreya-logo.png"
                  alt="Shreya Psyllium Industries logo"
                  className="h-14 w-14 rounded-2xl bg-white object-cover p-1"
                />
                <div>
                  <p className="font-display text-2xl leading-none">
                    Shreya Psyllium
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Industries
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Premium psyllium manufacturer and exporter from Gujarat, India,
                serving global buyers with certified quality and customized
                packaging solutions.
              </p>
            </div>
            {Object.entries(footerLinks).map(([group, items]) => (
              <div key={group}>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-beige">
                  {group}
                </p>
                <div className="mt-5 space-y-3 text-sm text-white/72">
                  {items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            © 2026 Shreya Psyllium Industries. All Rights Reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}
