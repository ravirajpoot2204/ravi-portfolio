import { useEffect, useRef, useState } from "react";
import {
  profile,
  navLinks,
  services,
  skills,
  projects,
  experience,
  education,
  extras,
} from "./data";

/* ============================ ICONS ============================ */
const Icon = {
  GitHub: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="M2.5 7.5 12 13.5l9.5-6" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  External: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Menu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
  Close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  Code: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  ),
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Video: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m22 8-6 4 6 4V8Z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  ),
  Sparkles: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  ),
};

const serviceIcons = {
  code: Icon.Code,
  bolt: Icon.Bolt,
  video: Icon.Video,
  sparkles: Icon.Sparkles,
};

/* ============================ SHARED STYLES ============================ */
const btnPrimary =
  "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2";

const btnGhost =
  "inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2";

const socials = [
  { label: "GitHub", href: profile.github, icon: Icon.GitHub, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: Icon.LinkedIn, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Icon.Mail, external: false },
];

/* ============================== REVEAL ============================== */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ============================== SECTION ============================== */
function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-violet-700">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                {eyebrow}
              </span>
            )}
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 leading-relaxed text-slate-700">{description}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ============================== NAVBAR ============================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200 bg-white/90 shadow-md backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-extrabold text-white shadow-md shadow-violet-500/40">
            RR
          </span>
          <span className="text-sm font-bold text-slate-900 sm:text-base">Ravi Rajpoot</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-violet-100 hover:text-violet-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="ml-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/30 transition hover:shadow-lg hover:shadow-violet-500/50"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border-2 border-slate-300 bg-white text-slate-800 shadow-sm transition hover:bg-violet-50 md:hidden"
        >
          {open ? <Icon.Close className="h-6 w-6" /> : <Icon.Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-violet-100 hover:text-violet-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

/* ================================ HERO ================================ */
function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-white px-3 py-1 text-xs font-bold text-violet-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
            </span>
            Open to full-stack, frontend &amp; backend roles
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Ravi{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Rajpoot
            </span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-5 text-xl font-bold text-slate-800 sm:text-2xl lg:text-3xl">
            Full Stack Developer
            <span className="mx-2 text-violet-400">·</span>
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              MERN
            </span>
            <span className="mx-2 text-violet-400">·</span>
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Real-time &amp; Media
            </span>
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-base font-medium text-slate-700">
              <Icon.Pin className="h-4 w-4 text-violet-600" />
              {profile.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-violet-500 sm:block" />
            <span className="text-base font-medium text-slate-700">
              2+ years hands-on experience
            </span>
          </div>
        </Reveal>

        <Reveal delay={210}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className={btnPrimary}>
              View Projects
              <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className={btnGhost}>Get in touch</a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex items-center gap-3">
            {socials.map(({ label, href, icon: I, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="grid h-11 w-11 place-items-center rounded-xl border-2 border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
              >
                <I className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={380}>
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t-2 border-slate-200 pt-8 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium leading-snug text-slate-600 sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================== ABOUT =============================== */
function About() {
  const facts = [
    { label: "Location", value: "Lucknow, Uttar Pradesh, India" },
    { label: "Focus", value: "Full Stack · Real-time & Media" },
    { label: "Education", value: "B.Tech CSE, 2024" },
    { label: "Looking for", value: "Full-stack · Frontend · Backend" },
  ];

  return (
    <Section id="about" eyebrow="About" title="A developer who ships real products">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 leading-relaxed text-slate-700">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 70}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900">
              Quick facts
            </h3>
            <ul className="mt-5 space-y-4">
              {facts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm">
                    <Icon.Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      {fact.label}
                    </span>
                    <span className="font-medium text-slate-800">{fact.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================== SERVICES ============================== */
function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I do"
      title="Services I offer"
      description="From full-stack web apps to live video pipelines and AI-powered tools — here's how I can help."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => {
          const ServiceIcon = serviceIcons[service.icon] || Icon.Code;
          return (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group h-full rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/20">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/40 transition group-hover:scale-110">
                    <ServiceIcon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-violet-200 bg-violet-100 px-2.5 py-1 text-[11px] font-semibold text-violet-800"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* =============================== SKILLS =============================== */
function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech I work with"
      description="The tools and technologies I use to design, build, deploy, and scale full-stack applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 60}>
            <div className="h-full rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/20">
              <h3 className="text-sm font-bold text-slate-900">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-violet-200 bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== PROJECTS ============================== */
function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/25 sm:p-8">
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-1 text-sm font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} source code`}
                  className="grid h-9 w-9 place-items-center rounded-lg border-2 border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
                >
                  <Icon.GitHub className="h-4 w-4" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} live demo`}
                  className="grid h-9 w-9 place-items-center rounded-lg border-2 border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
                >
                  <Icon.External className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-700">{project.description}</p>

          {project.impact?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800"
                >
                  <Icon.Check className="h-3.5 w-3.5 shrink-0 text-fuchsia-600" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.credentials && (
            <div className="mt-6 rounded-xl border-2 border-violet-200 bg-violet-50 p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-violet-800">
                Demo credentials
              </p>
              <ul className="mt-2 space-y-1 font-mono text-xs font-medium text-slate-800">
                {project.credentials.map((cred) => (
                  <li key={cred}>{cred}</li>
                ))}
              </ul>
            </div>
          )}

          {project.note && (
            <p className="mt-5 text-xs italic font-medium text-slate-600">{project.note}</p>
          )}

          {(project.live || project.github) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-violet-500/30 transition hover:shadow-lg hover:shadow-violet-500/50"
                >
                  Live demo
                  <Icon.External className="h-3.5 w-3.5" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border-2 border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
                >
                  Source code
                  <Icon.GitHub className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A selection of full-stack projects — from live video infrastructure to AI-powered automation."
    >
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

/* ============================= EXPERIENCE ============================= */
function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building">
      <div className="relative border-l-4 border-violet-300 pl-8">
        {experience.map((item, index) => (
          <Reveal key={item.role} delay={index * 80}>
            <div className="relative pb-4">
              <span className="absolute -left-[50px] top-1.5 grid h-6 w-6 place-items-center rounded-full border-4 border-slate-50 bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-md shadow-violet-500/50">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>

              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/20">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                    <p className="mt-0.5 text-sm font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                    >
                      <Icon.Check className="mt-1 h-3.5 w-3.5 shrink-0 text-fuchsia-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== EDUCATION ============================== */
function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & credentials">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
            {education.map((item) => (
              <div key={item.degree}>
                <span className="inline-flex rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">
                  {item.year}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.degree}</h3>
                <p className="mt-1 text-sm font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
                  {item.school}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{item.details}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900">
              Additional
            </h3>
            <ul className="mt-5 space-y-5">
              {extras.map((extra) => (
                <li key={extra.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-sm">
                    <Icon.Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold text-slate-800">{extra.title}</span>
                    <span className="font-medium text-slate-600">{extra.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* =============================== CONTACT =============================== */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-2 border-violet-200 bg-white px-6 py-14 text-center shadow-2xl shadow-violet-500/15 sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-300/60 to-fuchsia-300/60 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-violet-700">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                Contact
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s build something together
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-700">
                I&apos;m open to full-time roles in full-stack, frontend, or backend
                engineering — and always happy to talk about interesting projects.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className={btnPrimary}>
                  Email me
                  <Icon.Mail className="h-4 w-4" />
                </a>
                <a href={profile.phoneHref} className={btnGhost}>
                  Call / WhatsApp
                </a>
              </div>

              <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm">
                    <Icon.Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Email
                    </span>
                    <span className="block truncate text-sm font-semibold text-slate-800">
                      {profile.email}
                    </span>
                  </span>
                </a>

                <a
                  href={profile.phoneHref}
                  className="flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-sm">
                    <Icon.Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Phone
                    </span>
                    <span className="block truncate text-sm font-semibold text-slate-800">
                      {profile.phone}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                {socials.map(({ label, href, icon: I, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="grid h-11 w-11 place-items-center rounded-xl border-2 border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
                  >
                    <I className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================== FOOTER =============================== */
function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-sm font-medium text-slate-600 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Ravi Rajpoot. All rights reserved.</p>
        <p>
          Built with <span className="font-bold text-violet-700">React</span> &amp;{" "}
          <span className="font-bold text-fuchsia-600">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

/* ================================ APP ================================ */
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-300/50 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-fuchsia-300/50 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] -translate-x-1/3 rounded-full bg-cyan-300/40 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[24rem] w-[24rem] rounded-full bg-amber-200/50 blur-[120px]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}