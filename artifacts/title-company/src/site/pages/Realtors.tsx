import {
  ArrowRight, CalendarCheck, Globe, Handshake, MapPin, MessageSquare, ShieldCheck, type LucideIcon,
} from 'lucide-react';
import PageHero from '../sections/PageHero';
import { BrandButton, Counter, Kicker, Reveal, Stars } from '../primitives';
import { REALTOR_BENEFITS, ROUTES, TRUST } from '../data';

const ICON: Record<string, LucideIcon> = { CalendarCheck, MessageSquare, ShieldCheck, Globe, MapPin, Handshake };

export default function Realtors() {
  return (
    <>
      <PageHero
        kicker="For Real Estate Agents & Brokers"
        title="We make you the hero"
        italic="at the table."
        subtitle="Your commissions, your reputation, and your next referral all ride on the closing. We protect every one of them — so you can list the next home with total confidence."
        image="/assets/about-bg.jpg"
        crumb="For Realtors"
      />

      {/* Intro + stat rail */}
      <section className="bg-cream py-14 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:gap-14 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Kicker>A Partner, Not a Vendor</Kicker>
            <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">
              Closings that protect your <span className="script text-orange">dates</span> and your name
            </h2>
            <p className="mt-6 text-[0.95rem] sm:text-lg leading-relaxed text-muted-foreground">
              A missed closing date is a lost commission and a bruised reputation. Our disciplined process, proactive
              communication, and thorough curative work keep your transactions on schedule and your clients raving —
              which is exactly how great agents build their next deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandButton to={ROUTES.contact} variant="primary">Open an Order <ArrowRight className="h-4 w-4" /></BrandButton>
              <BrandButton to={ROUTES.locations} variant="outline">Find Your Office</BrandButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {TRUST.stats.map((s) => (
                <div key={s.label} className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                  <div className="font-display text-4xl font-semibold text-navy"><Counter to={s.value} suffix={s.suffix} /></div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker>Why Agents Choose Us</Kicker>
            <h2 className="mt-5 font-display text-[1.55rem] font-semibold text-navy sm:text-4xl lg:text-5xl">
              Everything you need to close with ease
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REALTOR_BENEFITS.map((b, i) => {
              const Icon = ICON[b.icon];
              return (
                <Reveal key={b.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-3xl border border-border bg-cream p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-champagne/50 hover:shadow-float">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-champagne transition-colors duration-500 group-hover:bg-orange group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-medium text-navy">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial band */}
      <section className="relative overflow-hidden bg-navy py-24 text-cream sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-champagne/10 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Stars className="mx-auto justify-center" />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
            “They treat my clients like their own. In this market, a title partner who protects the closing date is
            worth <span className="script text-champagne">everything</span>.”
          </blockquote>
          <p className="mt-6 text-sm text-cream/60">— A Southwest Florida real estate professional</p>
          <div className="mt-10">
            <BrandButton to={ROUTES.contact} variant="primary">Partner With Us <ArrowRight className="h-4 w-4" /></BrandButton>
          </div>
        </div>
      </section>
    </>
  );
}
