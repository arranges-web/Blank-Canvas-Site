import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LOCATIONS } from './data';
import { BrandButton, GoogleG, Reveal, Stars } from './primitives';

const field =
  'w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-orange focus:bg-white/[0.1] focus:ring-2 focus:ring-orange/40';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-800 py-24 text-white sm:py-32">
      <span id="quote" className="absolute -top-28" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: reassurance */}
          <Reveal>
            <p className="eyebrow">Request a Quote</p>
            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Ready when <span className="text-orange">you are</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Tell us about your transaction and the nearest office will reach out with a fast, no-obligation
              quote. Reliable, responsive, and secure — from first call to final policy.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { Icon: Phone, label: 'Call your nearest office', value: '6 SWFL locations, one local team' },
                { Icon: Clock, label: 'Fast, responsive service', value: 'On-time closings, every time' },
                { Icon: ShieldCheck, label: 'Secure & insured', value: 'Bank-grade wire-fraud protection' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold">{label}</p>
                    <p className="text-sm text-white/60">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google review mini-card */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
              <GoogleG className="h-7 w-7" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold">5.0</span>
                  <Stars />
                </div>
                <p className="text-xs text-white/50">Rated by clients on Google</p>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-float sm:p-9">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-orange/15 text-orange"
                    >
                      <CheckCircle2 className="h-11 w-11" />
                    </motion.span>
                    <h3 className="mt-6 font-display text-2xl font-bold">Request received</h3>
                    <p className="mt-2 max-w-xs text-white/70">
                      Thank you! Your nearest Florida Hometown office will be in touch shortly.
                    </p>
                    <BrandButton variant="ghost" className="mt-8" onClick={() => setSent(false)}>
                      Send another request
                    </BrandButton>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Labeled label="Full name" required>
                        <input required placeholder="Jane Smith" className={field} />
                      </Labeled>
                      <Labeled label="Phone">
                        <input placeholder="(239) 000-0000" className={field} />
                      </Labeled>
                    </div>
                    <Labeled label="Email address" required>
                      <input required type="email" placeholder="jane@email.com" className={field} />
                    </Labeled>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Labeled label="Nearest office" required>
                        <select required className={cn(field, 'appearance-none')} defaultValue="">
                          <option value="" disabled className="text-navy">
                            Select a location…
                          </option>
                          {LOCATIONS.map((l) => (
                            <option key={l.city} className="text-navy">
                              {l.city}
                            </option>
                          ))}
                        </select>
                      </Labeled>
                      <Labeled label="I am a…">
                        <select className={cn(field, 'appearance-none')} defaultValue="">
                          <option value="" disabled className="text-navy">
                            Select…
                          </option>
                          {['Buyer / Seller', 'Real Estate Agent', 'Mortgage Lender', 'Builder', 'Other'].map(
                            (o) => (
                              <option key={o} className="text-navy">
                                {o}
                              </option>
                            ),
                          )}
                        </select>
                      </Labeled>
                    </div>
                    <Labeled label="How can we help?">
                      <textarea
                        rows={4}
                        placeholder="Tell us about your transaction…"
                        className={cn(field, 'resize-none')}
                      />
                    </Labeled>

                    <BrandButton type="submit" variant="primary" className="mt-2 w-full">
                      Request My Quote
                      <Send className="h-4 w-4" />
                    </BrandButton>
                    <p className="text-center text-xs text-white/40">
                      Secure &amp; confidential. We'll never share your information.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* quick contact strip */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange" /> Cape Coral · Fort Myers · Naples · LaBelle · Lehigh Acres · Wellington
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange" /> Reliable. Responsive. Secure.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Labeled({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-white/60">
        {label} {required && <span className="text-orange">*</span>}
      </span>
      {children}
    </label>
  );
}
