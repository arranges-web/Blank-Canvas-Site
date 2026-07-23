import { Clock, Lock, Workflow, type LucideIcon } from 'lucide-react';
import { COMPANY, PILLARS, TRUST } from './data';
import { Counter, Reveal } from './primitives';

const ICON_MAP: Record<string, LucideIcon> = { Clock, Workflow, Lock };

export default function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      {/* ambient orange glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Excellent service &amp; <span className="text-orange">effortless</span> efficiency
          </h2>
          <p className="mt-4 text-lg text-white/70">{COMPANY.mission}</p>
        </Reveal>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = ICON_MAP[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-orange/40 hover:bg-white/[0.07]">
                  <div className="absolute right-6 top-6 font-display text-6xl font-extrabold text-white/[0.05] transition-colors group-hover:text-orange/20">
                    0{i + 1}
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange/15 text-orange transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{p.desc}</p>
                  <span className="mt-6 block h-0.5 w-10 rounded-full bg-orange transition-all duration-500 group-hover:w-20" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stat band */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-10 lg:grid-cols-4">
            {TRUST.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-extrabold text-orange sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
