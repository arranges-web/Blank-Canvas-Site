import { HardHat, Handshake, Home, Landmark, ArrowRight, type LucideIcon } from 'lucide-react';
import { AUDIENCES, COMPANY } from './data';
import { BrandButton, Reveal } from './primitives';

const ICON_MAP: Record<string, LucideIcon> = { Handshake, Landmark, Home, HardHat };

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image collage */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-float">
                <img
                  src="/assets/about-bg.jpg"
                  alt="Florida Hometown Title & Escrow closing team"
                  className="h-[26rem] w-full object-cover"
                />
              </div>
              {/* floating stat card */}
              <div className="absolute -bottom-8 -right-4 w-56 rounded-2xl border border-border bg-white p-5 shadow-float sm:right-8">
                <p className="font-display text-4xl font-extrabold text-navy">6</p>
                <p className="text-sm text-muted-foreground">
                  offices serving buyers, sellers &amp; lenders across Southwest Florida
                </p>
              </div>
              {/* tagline chip */}
              <div className="absolute -left-4 top-8 rounded-full bg-orange px-5 py-2 font-display text-sm font-semibold text-white shadow-glow-orange">
                {COMPANY.tagline}
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1}>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
              Your hometown title team
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{COMPANY.intro}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{COMPANY.mission}</p>

            <div className="mt-8">
              <BrandButton href="#contact" variant="navy">
                Meet Our Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </BrandButton>
            </div>
          </Reveal>
        </div>

        {/* Who we serve */}
        <div className="mt-24">
          <Reveal className="text-center">
            <p className="eyebrow">Who We Serve</p>
            <h3 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Tailored closings for every party
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a, i) => {
              const Icon = ICON_MAP[a.icon];
              return (
                <Reveal key={a.label} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-orange/40 hover:shadow-float">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white transition-colors duration-500 group-hover:bg-orange">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h4 className="mt-5 font-display text-lg font-bold leading-tight text-navy">
                      {a.label}
                    </h4>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange/5 transition-transform duration-500 group-hover:scale-150" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
