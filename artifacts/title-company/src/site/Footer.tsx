import { Facebook, Phone } from 'lucide-react';
import { COMPANY, LOCATIONS, NAV_LINKS, SERVICES } from './data';

export default function Footer() {
  return (
    <footer className="bg-navy-800 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <img src="/assets/logo.png" alt="Florida Hometown Title & Escrow" className="h-11 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{COMPANY.intro}</p>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-orange hover:bg-orange hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Explore */}
          <nav>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.num}>
                  <a href="#services" className="transition hover:text-orange">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Offices */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Offices</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.city}>
                  <a
                    href={`tel:${l.phone}`}
                    className="group inline-flex items-center gap-1.5 transition hover:text-orange"
                  >
                    <Phone className="h-3 w-3 text-orange" />
                    {l.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Licensed Florida Title Agency · {COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
