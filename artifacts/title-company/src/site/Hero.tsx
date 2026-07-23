import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY, TRUST } from './data';
import { BrandButton, GoogleG, Stars } from './primitives';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photo + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
        <img src="/assets/hero.jpg" alt="" className="h-full w-full object-cover" />
      </motion.div>
      {/* Overlays for legibility + brand tint */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-800/95 via-navy/80 to-navy/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy-800/90 via-transparent to-navy-800/40" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pt-32 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
      >
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-orange"
                style={{ animation: 'pulse-ring 2.2s ease-out infinite' }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            <span className="eyebrow !text-orange">{COMPANY.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-[2.6rem] font-extrabold leading-[1.05] text-white sm:text-6xl"
          >
            Your title, <span className="text-orange">handled with care</span> — from open to close.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            {COMPANY.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <BrandButton href="#quote" variant="primary">
              Request a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </BrandButton>
            <BrandButton href="#services" variant="ghost">
              Explore Our Services
            </BrandButton>
          </motion.div>

          {/* Inline trust chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-orange" />
              Licensed Florida title agency
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange" />
              6 offices across Southwest Florida
            </span>
          </motion.div>
        </div>

        {/* Right: floating Google review card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto"
        >
          <div className="animate-float-slow rounded-3xl border border-white/15 bg-white/95 p-6 shadow-float backdrop-blur">
            <div className="flex items-center gap-3">
              <GoogleG className="h-9 w-9" />
              <div>
                <p className="font-display text-sm font-semibold text-navy">Reviewed on Google</p>
                <p className="text-xs text-muted-foreground">Trusted by SWFL buyers & sellers</p>
              </div>
            </div>
            <div className="mt-5 flex items-end gap-3">
              <span className="font-display text-5xl font-extrabold text-navy">
                {TRUST.googleRating}
              </span>
              <div className="pb-1.5">
                <Stars />
                <p className="mt-1 text-xs text-muted-foreground">Excellent client rating</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 border-t border-border pt-5">
              {[
                'Smooth, on-time closing — kept us informed at every step.',
                'Responsive team that made escrow completely stress-free.',
              ].map((q) => (
                <div key={q} className="flex gap-2.5">
                  <Stars className="mt-0.5 shrink-0 scale-75 origin-left" />
                  <p className="text-[0.82rem] leading-snug text-navy/80">“{q}”</p>
                </div>
              ))}
            </div>
          </div>

          {/* Little floating secure badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl bg-navy px-4 py-3 shadow-float sm:flex"
          >
            <ShieldCheck className="h-6 w-6 text-orange" />
            <div className="leading-tight">
              <p className="font-display text-xs font-semibold text-white">Wire-Fraud Protected</p>
              <p className="text-[0.68rem] text-white/60">Bank-grade escrow security</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-orange"
        aria-label="Scroll to services"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block"
        >
          <ChevronDown className="h-7 w-7" />
        </motion.span>
      </motion.a>
    </section>
  );
}
