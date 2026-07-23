import { Navigation, Phone, Printer } from 'lucide-react';
import { LOCATIONS } from './data';
import { Reveal } from './primitives';

export default function Locations() {
  return (
    <section id="locations" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Locations</p>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Six offices, <span className="text-orange">one local team</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wherever your closing happens across Southwest Florida, there's a Florida Hometown
            office nearby — ready to help in person, by mail-away, or fully online.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.city} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-float">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={l.image}
                    alt={`${l.city} title office`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-2xl font-bold text-white drop-shadow">
                    {l.city}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {l.address}
                    <br />
                    {l.cityState}
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    <a
                      href={`tel:${l.phone}`}
                      className="inline-flex items-center gap-2 font-medium text-navy transition hover:text-orange"
                    >
                      <Phone className="h-4 w-4 text-orange" />
                      {l.phone}
                    </a>
                    {l.fax && (
                      <p className="inline-flex items-center gap-2 text-muted-foreground">
                        <Printer className="h-4 w-4 text-navy/40" />
                        Fax {l.fax}
                      </p>
                    )}
                  </div>

                  <a
                    href={l.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted/50 py-2.5 font-display text-sm font-semibold text-navy transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
