import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, LOCATIONS } from './data';
import { BrandButton } from './primitives';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-orange"
      />

      {/* Utility bar — phone numbers (hidden once scrolled) */}
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-40 hidden overflow-hidden border-b border-white/10 bg-navy-800 text-white transition-all duration-500 lg:block',
          scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100',
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[0.72rem]">
          <span className="font-display font-medium tracking-wide text-white/70">
            Reliable. Responsive. Secure. — Serving Southwest Florida.
          </span>
          <div className="flex items-center gap-4">
            {LOCATIONS.slice(0, 4).map((l) => (
              <a
                key={l.city}
                href={`tel:${l.phone}`}
                className="group inline-flex items-center gap-1.5 text-white/70 transition hover:text-orange"
              >
                <Phone className="h-3 w-3 text-orange" />
                <span className="font-medium text-white/90 group-hover:text-orange">
                  {l.city}
                </span>
                <span className="text-white/50 group-hover:text-orange">{l.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          'fixed inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'top-0 glass border-b border-white/10 shadow-float'
            : 'top-0 lg:top-9 bg-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
          <a href="#home" className="flex shrink-0 items-center" aria-label="Florida Hometown Title & Escrow — home">
            <img
              src="/assets/logo.png"
              alt="Florida Hometown Title & Escrow"
              className="h-9 w-auto sm:h-11"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 font-display text-[0.9rem] font-medium tracking-tight text-white/85 transition hover:text-white',
                    active === l.href && 'text-white',
                  )}
                >
                  {l.label}
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <BrandButton href="#contact" variant="ghost" className="px-5 py-2.5 text-sm">
              Get In Touch
            </BrandButton>
            <BrandButton href="#quote" variant="primary" className="px-5 py-2.5 text-sm">
              Request a Quote
            </BrandButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-navy-800/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[80] flex w-[82%] max-w-sm flex-col bg-navy px-6 py-6 shadow-float lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <img src="/assets/logo.png" alt="Florida Hometown Title" className="h-9 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-white/80 hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-display text-lg font-medium text-white/90 transition hover:bg-white/10"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <BrandButton href="#quote" variant="primary" onClick={() => setOpen(false)} className="w-full">
                  Request a Quote
                </BrandButton>
                <BrandButton href="#contact" variant="navy" onClick={() => setOpen(false)} className="w-full border border-white/20">
                  Get In Touch
                </BrandButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
