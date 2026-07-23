import { HardHat, Handshake, Home as HomeIcon, Landmark, ArrowRight, type LucideIcon } from 'lucide-react';
import PageHero from '../sections/PageHero';
import { BrandButton, Counter, Kicker, Reveal } from '../primitives';
import { AUDIENCES, COMPANY, PILLARS, ROUTES, TRUST } from '../data';
import { Clock, Lock, Workflow } from 'lucide-react';

const AUD_ICON: Record<string, LucideIcon> = { Handshake, Landmark, Home: HomeIcon, HardHat };
const PILLAR_ICON: Record<string, LucideIcon> = { Clock, Workflow, Lock };

export default function About() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="Your hometown title team,"
        italic="at your service."
        subtitle={COMPANY.intro}
        image="/assets/hero.jpg"
        crumb="About"
      />

      {/* Story */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-float">
                <img src="/assets/about-bg.jpg" alt="Florida Hometown Title & Escrow" className="h-[30rem] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -left-4 top-8 rounded-full bg-champagne px-5 py-2 font-display text-sm font-medium text-navy shadow-float">
                {COMPANY.tagline}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Kicker>Our Story</Kicker>
            <h2 className="mt-5 font-display text-4xl font-medium text-navy sm:text-5xl">
              Built on trust, run like a <span className="script text-orange">boutique</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{COMPANY.mission}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With six offices across Southwest Florida, we pair the reach of a regional firm with the warmth and
              accountability of a hometown team — the people who answer the phone, know the county recorder, and treat
              your closing as if it were our own.
            </p>
            <div className="mt-8">
              <BrandButton to={ROUTES.contact} variant="navy">Meet Our Team <ArrowRight className="h-4 w-4" /></BrandButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker>What We Stand For</Kicker>
            <h2 className="mt-5 font-display text-4xl font-medium text-navy sm:text-5xl">Three words, held to the letter</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICON[p.icon];
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full rounded-3xl border border-border bg-cream p-8 shadow-soft">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-champagne">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium text-navy">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Stats */}
          <Reveal delay={0.15}>
            <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-border bg-navy px-8 py-10 text-cream lg:grid-cols-4">
              {TRUST.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-semibold text-champagne sm:text-5xl"><Counter to={s.value} suffix={s.suffix} /></div>
                  <p className="mt-2 text-sm text-cream/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker>Who We Serve</Kicker>
            <h2 className="mt-5 font-display text-4xl font-medium text-navy sm:text-5xl">Tailored closings for every party</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a, i) => {
              const Icon = AUD_ICON[a.icon];
              return (
                <Reveal key={a.label} delay={i * 0.08}>
                  <a href={a.href} className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-champagne/50 hover:shadow-float">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-cream transition-colors duration-500 group-hover:bg-orange">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h4 className="mt-5 font-display text-lg font-medium leading-tight text-navy">{a.label}</h4>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange opacity-0 transition group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-champagne/5 transition-transform duration-500 group-hover:scale-150" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
