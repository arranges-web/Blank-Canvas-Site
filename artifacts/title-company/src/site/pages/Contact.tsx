import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import PageHero from '../sections/PageHero';
import QuoteWizard from '../sections/QuoteWizard';
import { GoogleG, Kicker, Stars } from '../primitives';

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Request a Quote"
        title="Let's begin your"
        italic="closing."
        subtitle="Answer a few quick questions and the office nearest you will follow up with your exact figures. Reliable, responsive, and secure — from first call to final policy."
        image="/assets/svc-settlement.jpg"
        crumb="Contact"
      />

      <section className="relative overflow-hidden bg-navy-900 py-24 text-cream sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/10 blur-[130px]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          {/* Reassurance */}
          <div>
            <Kicker light>The Guided Quote</Kicker>
            <h2 className="mt-5 font-display text-[1.7rem] font-semibold sm:text-4xl lg:text-5xl">Ready when <span className="script text-champagne">you are</span></h2>
            <p className="mt-5 max-w-md text-[0.95rem] sm:text-lg leading-relaxed text-cream/70">
              No long forms. Just four quick steps — and you'll see a working closing estimate before you ever hit submit.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { Icon: Phone, label: 'Call your nearest office', value: 'Six SWFL locations, one local team' },
                { Icon: Clock, label: 'Fast, responsive service', value: 'On-time closings, every time' },
                { Icon: ShieldCheck, label: 'Secure & insured', value: 'Bank-grade wire-fraud protection' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-champagne/15 text-champagne"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="font-sans font-semibold">{label}</p>
                    <p className="text-sm text-cream/60">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
              <GoogleG className="h-7 w-7" />
              <div>
                <div className="flex items-center gap-2"><span className="font-display font-semibold">5.0</span><Stars /></div>
                <p className="text-xs text-cream/50">Rated by clients on Google</p>
              </div>
            </div>
          </div>

          {/* Guided quote wizard */}
          <QuoteWizard />
        </div>

        <div className="relative mx-auto mt-14 max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-cream/60">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-champagne" /> Cape Coral · Fort Myers · Naples · LaBelle · Lehigh Acres · Wellington</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-champagne" /> Reliable. Responsive. Secure.</span>
          </div>
        </div>
      </section>
    </>
  );
}
