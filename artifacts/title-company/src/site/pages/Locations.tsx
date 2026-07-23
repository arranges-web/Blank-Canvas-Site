import { Navigation, Phone, Printer } from 'lucide-react';
import PageHero from '../sections/PageHero';
import { BrandButton, Kicker, Reveal } from '../primitives';
import { LOCATIONS, ROUTES } from '../data';

export default function Locations() {
  return (
    <>
      <PageHero
        kicker="Our Locations"
        title="Six offices across"
        italic="Southwest Florida."
        subtitle="Wherever your closing happens — Cape Coral to Wellington — there's a Florida Hometown office nearby, ready to help in person, by mail-away, or fully online."
        image="/assets/loc-naples.jpg"
        crumb="Locations"
      />

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.city} delay={(i % 3) * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-float">
                  <div className="relative h-44 overflow-hidden">
                    <img src={l.image} alt={`${l.city} title office`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-display text-2xl font-medium text-cream">{l.city}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {l.address}<br />{l.cityState}
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <a href={`tel:${l.phone}`} className="inline-flex items-center gap-2 font-medium text-navy transition hover:text-orange">
                        <Phone className="h-4 w-4 text-champagne" />{l.phone}
                      </a>
                      {l.fax && (
                        <p className="inline-flex items-center gap-2 text-muted-foreground">
                          <Printer className="h-4 w-4 text-navy/40" />Fax {l.fax}
                        </p>
                      )}
                    </div>
                    <a href={l.maps} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-cream py-2.5 font-sans text-sm font-semibold text-navy transition-all duration-300 group-hover:border-champagne group-hover:bg-orange group-hover:text-white">
                      <Navigation className="h-4 w-4" />Get Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-navy px-8 py-12 text-center text-cream">
              <Kicker light>Not sure which office?</Kicker>
              <h2 className="max-w-xl font-display text-3xl font-medium sm:text-4xl">
                Tell us about your closing and we'll route you to the right team
              </h2>
              <div className="mt-2">
                <BrandButton to={ROUTES.contact} variant="primary">Request a Quote</BrandButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
