import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Car, Clock, FileSearch, Landmark, Lock, MapPin,
  Scale, ShieldCheck, Workflow, type LucideIcon,
} from 'lucide-react';
import TrustStrip from '../sections/TrustStrip';
import CostEstimator from '../sections/CostEstimator';
import { BrandButton, Counter, GoogleG, Kicker, Reveal, Stars } from '../primitives';
import { COMPANY, LOCATIONS, PILLARS, PROCESS, ROUTES, SERVICES, TRUST } from '../data';

const SVC_ICON: Record<string, LucideIcon> = { FileSearch, ShieldCheck, Landmark, Scale, Car };
const PILLAR_ICON: Record<string, LucideIcon> = { Clock, Workflow, Lock };

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section ref={heroRef} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <img src="/assets/hero.jpg" alt="" className="h-full w-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-900/95 via-navy/82 to-navy/45" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/50" />

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8"
        >
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Kicker light>Southwest Florida · Title &amp; Escrow</Kicker>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-5 max-w-2xl font-display text-[1.85rem] font-semibold leading-[1.1] text-cream sm:text-[3.4rem] lg:text-[4.4rem]"
            >
              The art of a flawless <span className="script text-champagne">closing.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-6 max-w-xl text-[0.95rem] sm:text-lg leading-relaxed text-cream/80"
            >
              {COMPANY.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <BrandButton to={ROUTES.contact} variant="primary">
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </BrandButton>
              <BrandButton to={ROUTES.services} variant="ghost">Explore Our Services</BrandButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/70"
            >
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-champagne" /> Licensed Florida title agency</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-champagne" /> Six offices, one standard</span>
            </motion.div>
          </div>

          {/* Google review card */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0"
          >
            <div className="animate-float-slow rounded-3xl border border-white/15 bg-cream/95 p-6 shadow-float backdrop-blur ring-champagne">
              <div className="flex items-center gap-3">
                <GoogleG className="h-9 w-9" />
                <div>
                  <p className="font-display text-base font-semibold text-navy">Reviewed on Google</p>
                  <p className="text-xs text-muted-foreground">Trusted by SWFL buyers &amp; sellers</p>
                </div>
              </div>
              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-4xl font-semibold text-navy sm:text-5xl">{TRUST.googleRating}</span>
                <div className="pb-1.5">
                  <Stars />
                  <p className="mt-1 text-xs text-muted-foreground">Excellent client rating</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 border-t border-border pt-5">
                {['Smooth, on-time closing — kept us informed at every step.', 'Responsive team that made escrow completely stress-free.'].map((q) => (
                  <div key={q} className="flex gap-2.5">
                    <Stars className="mt-0.5 shrink-0 origin-left scale-75" />
                    <p className="text-[0.82rem] leading-snug text-navy/80">“{q}”</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
              className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl bg-navy px-4 py-3 shadow-float sm:flex"
            >
              <ShieldCheck className="h-6 w-6 text-champagne" />
              <div className="leading-tight">
                <p className="font-sans text-xs font-semibold text-cream">Wire-Fraud Protected</p>
                <p className="text-[0.68rem] text-cream/60">Bank-grade escrow security</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <TrustStrip />

      {/* ---------------- PROMISE ---------------- */}
      <section className="bg-cream py-14 sm:py-20 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:gap-14 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-float">
                <img src="/assets/about-bg.jpg" alt="A Florida Hometown closing" className="h-[28rem] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-x-3 -bottom-6 flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-float sm:inset-x-auto sm:right-8 sm:w-60 sm:p-5">
                <span className="font-display text-4xl font-semibold text-navy sm:text-5xl"><Counter to={20} suffix="+" /></span>
                <p className="text-sm text-muted-foreground">years guiding Southwest Florida home</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Kicker>Our Promise</Kicker>
            <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">
              A closing should feel <span className="script text-orange">calm</span>, not chaotic.
            </h2>
            <p className="mt-6 text-[0.95rem] sm:text-lg leading-relaxed text-muted-foreground">{COMPANY.mission}</p>
            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
              {PILLARS.map((p) => {
                const Icon = PILLAR_ICON[p.icon];
                return (
                  <div key={p.title} className="rounded-2xl border border-border bg-white p-3 text-center shadow-soft sm:p-4">
                    <Icon className="mx-auto h-5 w-5 text-champagne sm:h-6 sm:w-6" />
                    <p className="mt-1.5 font-display text-[0.78rem] font-medium leading-tight text-navy sm:mt-2 sm:text-lg">{p.title}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES PREVIEW ---------------- */}
      <section className="bg-white py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <div className="max-w-xl">
              <Kicker>What We Do</Kicker>
              <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">
                Full-service title &amp; escrow, under one roof
              </h2>
            </div>
            <BrandButton to={ROUTES.services} variant="outline" size="sm">All services <ArrowUpRight className="h-4 w-4" /></BrandButton>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SVC_ICON[s.icon];
              return (
                <Reveal key={s.id} delay={(i % 3) * 0.08}>
                  <a
                    href={`${ROUTES.services}#${s.id}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-cream p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-champagne/50 hover:shadow-float"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-champagne transition-colors duration-500 group-hover:bg-orange group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-2xl text-champagne/50">{s.num}</span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium text-navy">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange opacity-0 transition group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PILLARS + STATS (dark) ---------------- */}
      <section className="relative overflow-hidden bg-navy py-14 text-cream sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-champagne/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange/10 blur-[120px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker light>Why Florida Hometown</Kicker>
            <h2 className="mt-5 font-display text-[1.55rem] font-semibold sm:text-4xl lg:text-5xl">
              Excellence, <span className="script text-champagne">quietly delivered</span>
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICON[p.icon];
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-champagne/40 hover:bg-white/[0.07]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-champagne/15 text-champagne transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-cream/70">{p.desc}</p>
                    <span className="mt-6 block h-px w-10 bg-champagne transition-all duration-500 group-hover:w-20" />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-10 lg:grid-cols-4">
              {TRUST.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-semibold text-champagne sm:text-4xl lg:text-5xl"><Counter to={s.value} suffix={s.suffix} /></div>
                  <p className="mt-2 text-sm text-cream/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="bg-cream py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker>The Journey</Kicker>
            <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">Four steps to the keys</h2>
          </Reveal>
          <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-soft">
                  <span className="font-display text-5xl font-semibold text-champagne/40">{step.num}</span>
                  <h3 className="mt-3 font-display text-xl font-medium text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING-COST ESTIMATOR ---------------- */}
      <CostEstimator />

      {/* ---------------- LOCATIONS PREVIEW ---------------- */}
      <section className="bg-white py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <div className="max-w-xl">
              <Kicker>Our Locations</Kicker>
              <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">Six offices, one local team</h2>
            </div>
            <BrandButton to={ROUTES.locations} variant="outline" size="sm">All locations <ArrowUpRight className="h-4 w-4" /></BrandButton>
          </Reveal>
          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.city} delay={(i % 3) * 0.08}>
                <a href={l.maps} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-3xl border border-border bg-cream shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-float">
                  <div className="relative h-40 overflow-hidden">
                    <img src={l.image} alt={`${l.city} office`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <h3 className="absolute bottom-3 left-5 font-display text-2xl text-cream">{l.city}</h3>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <p className="text-sm text-muted-foreground">{l.phone}</p>
                    <ArrowUpRight className="h-5 w-5 text-champagne opacity-0 transition group-hover:opacity-100" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
