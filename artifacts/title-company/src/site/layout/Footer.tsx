import { Link } from 'wouter';
import { ArrowUpRight, Facebook, Phone } from 'lucide-react';
import { COMPANY, LOCATIONS, NAV, ROUTES, SERVICES } from '../data';
import { BrandButton, Kicker } from '../primitives';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-cream/70">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-champagne/5 blur-[110px]" />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-6 py-14 lg:flex-row lg:items-center lg:px-8">
          <div>
            <Kicker light>Let's begin</Kicker>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium text-cream sm:text-4xl">
              Ready for a closing that feels <span className="script text-champagne">effortless</span>?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <BrandButton to={ROUTES.contact} variant="primary">Request a Quote</BrandButton>
            <BrandButton to={ROUTES.realtors} variant="ghost">Partner With Us</BrandButton>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <img src="/assets/logo.png" alt="Florida Hometown Title & Escrow" className="h-11 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">{COMPANY.intro}</p>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/70 transition hover:border-champagne hover:bg-champagne hover:text-navy"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <nav>
            <h4 className="kicker text-champagne-soft">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition hover:text-champagne">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h4 className="kicker text-champagne-soft">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`${ROUTES.services}#${s.id}`} className="transition hover:text-champagne">{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="kicker text-champagne-soft">Offices</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.city}>
                  <a href={`tel:${l.phone}`} className="group inline-flex items-center gap-1.5 transition hover:text-champagne">
                    <Phone className="h-3 w-3 text-champagne" />
                    {l.city}
                  </a>
                </li>
              ))}
            </ul>
            <Link href={ROUTES.locations} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-champagne">
              All locations <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="hairline" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Licensed Florida Title Agency · {COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
