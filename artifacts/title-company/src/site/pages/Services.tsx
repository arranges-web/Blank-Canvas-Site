import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight, Car, Check, FileSearch, Landmark, Scale, ShieldCheck, type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import PageHero from '../sections/PageHero';
import TrustStrip from '../sections/TrustStrip';
import CostEstimator from '../sections/CostEstimator';
import { BrandButton, Kicker, Reveal } from '../primitives';
import { PROCESS, ROUTES, SERVICES } from '../data';

const ICON: Record<string, LucideIcon> = { FileSearch, ShieldCheck, Landmark, Scale, Car };

export default function Services() {
  const [active, setActive] = useState(0);

  // Deep-link support: /services#settlement selects that service.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const idx = SERVICES.findIndex((s) => s.id === id);
    if (idx >= 0) setActive(idx);
  }, []);

  const svc = SERVICES[active];
  const Icon = ICON[svc.icon];

  return (
    <>
      <PageHero
        kicker="What We Do"
        title="Everything your closing needs,"
        italic="beautifully handled."
        subtitle="From the opening of a file through the delivery of your final policy — one dedicated Florida team, five ways we protect your transaction."
        image="/assets/svc-title-search.jpg"
        crumb="What We Do"
      />
      <TrustStrip />

      <section id="services" className="bg-cream py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            {/* Selector */}
            <div className="flex flex-col gap-3">
              {SERVICES.map((s, i) => {
                const I = ICON[s.icon];
                const on = i === active;
                return (
                  <button
                    key={s.id}
                    id={s.id}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn(
                      'group flex w-full scroll-mt-28 items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300',
                      on ? 'border-champagne/50 bg-white shadow-float' : 'border-border bg-white/50 hover:border-champagne/30 hover:bg-white',
                    )}
                  >
                    <span className={cn('grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm font-semibold transition-colors', on ? 'bg-orange text-white' : 'bg-muted text-navy group-hover:bg-navy group-hover:text-cream')}>
                      {s.num}
                    </span>
                    <span className="flex flex-1 items-center gap-2 font-display text-xl font-medium text-navy">
                      <I className={cn('h-4 w-4', on ? 'text-champagne' : 'text-navy/40')} />
                      {s.title}
                    </span>
                    <ArrowUpRight className={cn('h-5 w-5 shrink-0 transition-all', on ? 'text-champagne opacity-100' : 'text-navy/30 opacity-0 group-hover:opacity-100')} />
                  </button>
                );
              })}
            </div>

            {/* Detail */}
            <Reveal delay={0.1}>
              <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/10 bg-navy text-cream shadow-float">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <AnimatePresence mode="wait">
                    <motion.div key={svc.id} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                      {svc.image ? (
                        <img src={svc.image} alt={svc.title} className="h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <div className="dot-grid flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
                          <Icon className="h-24 w-24 text-champagne/60" strokeWidth={1.1} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                  <span className="absolute left-5 top-5 rounded-full bg-champagne px-3 py-1 font-display text-xs font-semibold text-navy">
                    {svc.num} / 05
                  </span>
                </div>
                <div className="p-7 sm:p-9">
                  <AnimatePresence mode="wait">
                    <motion.div key={svc.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                      <h3 className="font-display text-3xl font-medium">{svc.title}</h3>
                      <p className="mt-3 leading-relaxed text-cream/75">{svc.blurb}</p>
                      <ul className="mt-6 grid gap-2.5">
                        {svc.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm text-cream/85">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-champagne/20">
                              <Check className="h-3 w-3 text-champagne" />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                  <BrandButton to={ROUTES.contact} variant="primary" size="sm" className="mt-8">
                    Start this service <ArrowUpRight className="h-4 w-4" />
                  </BrandButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker>How It Works</Kicker>
            <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">A calm, coordinated closing</h2>
          </Reveal>
          <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-cream p-7 shadow-soft">
                  <span className="font-display text-5xl font-semibold text-champagne/40">{s.num}</span>
                  <h3 className="mt-3 font-display text-xl font-medium text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CostEstimator />
    </>
  );
}
