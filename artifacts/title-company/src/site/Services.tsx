import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Car,
  Check,
  FileSearch,
  Landmark,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SERVICES } from './data';
import { Reveal } from './primitives';

const ICON_MAP: Record<string, LucideIcon> = {
  FileSearch,
  ShieldCheck,
  Landmark,
  Scale,
  Car,
};

// Real photos where available; branded gradient panels elsewhere.
const IMAGES: Record<string, string | null> = {
  '01': '/assets/svc-title-search.jpg',
  '02': null,
  '03': '/assets/svc-settlement.jpg',
  '04': null,
  '05': '/assets/svc-notary.jpg',
};

export default function Services() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];
  const img = IMAGES[svc.num];

  return (
    <section id="services" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Full-service title &amp; escrow, <span className="text-orange">under one roof</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From the opening of a file through the delivery of your final policy — everything your
            transaction needs, handled by one dedicated Florida team.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Selector list */}
          <div className="flex flex-col gap-3">
            {SERVICES.map((s, i) => {
              const Icon = ICON_MAP[s.icon];
              const isActive = i === active;
              return (
                <Reveal key={s.num} delay={i * 0.05}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn(
                      'group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300',
                      isActive
                        ? 'border-orange/30 bg-white shadow-float'
                        : 'border-border bg-white/40 hover:border-orange/20 hover:bg-white',
                    )}
                  >
                    <span
                      className={cn(
                        'grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm font-bold transition-colors',
                        isActive ? 'bg-orange text-white' : 'bg-muted text-navy group-hover:bg-navy group-hover:text-white',
                      )}
                    >
                      {s.num}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                        <Icon className={cn('h-4 w-4', isActive ? 'text-orange' : 'text-navy/40')} />
                        {s.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      className={cn(
                        'h-5 w-5 shrink-0 transition-all',
                        isActive ? 'text-orange opacity-100' : 'text-navy/30 opacity-0 group-hover:opacity-100',
                      )}
                    />
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Detail panel */}
          <Reveal delay={0.1}>
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-navy text-white shadow-float">
              <div className="relative h-56 overflow-hidden sm:h-64">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={svc.num}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {img ? (
                      <img src={img} alt={svc.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="dot-grid flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-800">
                        {(() => {
                          const Icon = ICON_MAP[svc.icon];
                          return <Icon className="h-24 w-24 text-orange/70" strokeWidth={1.2} />;
                        })()}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <span className="absolute left-5 top-5 rounded-full bg-orange px-3 py-1 font-display text-xs font-bold tracking-wide">
                  {svc.num} / {SERVICES.length.toString().padStart(2, '0')}
                </span>
              </div>

              <div className="p-7 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={svc.num}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{svc.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/75">{svc.blurb}</p>
                    <ul className="mt-6 grid gap-2.5">
                      {svc.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-white/85">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange/20">
                            <Check className="h-3 w-3 text-orange" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
                <a
                  href="#quote"
                  className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-orange transition hover:gap-3"
                >
                  Start this service <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
