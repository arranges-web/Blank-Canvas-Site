import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { COMPANY, LOCATIONS, NAV, ROUTES, SERVICES } from '../data';
import { BrandButton } from '../primitives';

export default function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const isActive = (href: string) => (href === ROUTES.home ? location === '/' : location.startsWith(href));

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-champagne" />

      {/* Utility bar */}
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-40 hidden overflow-hidden border-b border-white/10 bg-navy-900 text-cream/80 transition-all duration-500 lg:block',
          scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100',
        )}
      >
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-8 text-[0.72rem]">
          <span className="kicker !text-[0.62rem] !tracking-[0.28em] text-champagne-soft">{COMPANY.tagline}</span>
          <div className="flex items-center gap-5">
            {LOCATIONS.slice(0, 4).map((l) => (
              <a key={l.city} href={`tel:${l.phone}`} className="group inline-flex items-center gap-1.5 transition hover:text-champagne">
                <Phone className="h-3 w-3 text-champagne" />
                <span className="font-semibold">{l.city}</span>
                <span className="text-cream/50 group-hover:text-champagne">{l.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <header
        className={cn(
          'fixed inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'top-0 glass border-b border-white/10' : 'top-0 lg:top-9 bg-transparent',
        )}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5 lg:px-8">
          <Link href={ROUTES.home} className="flex shrink-0 items-center" aria-label="Florida Hometown Title & Escrow — home">
            <img src="/assets/logo.png" alt="Florida Hometown Title & Escrow" className="h-9 w-auto sm:h-11" width={220} height={64} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => {
              const hasMenu = item.label === 'What We Do' || item.label === 'Locations';
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(hasMenu ? item.label : null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-3.5 py-2 font-sans text-[0.9rem] font-medium tracking-tight transition',
                      isActive(item.href) ? 'text-champagne' : 'text-cream/85 hover:text-white',
                    )}
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', openMenu === item.label && 'rotate-180')} />
                    )}
                  </Link>
                  {isActive(item.href) && (
                    <motion.span layoutId="nav-underline" className="absolute -bottom-0.5 left-3.5 right-3.5 h-px bg-champagne" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${LOCATIONS[1].phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cream/85 transition hover:text-champagne">
              <Phone className="h-4 w-4 text-champagne" />
              {LOCATIONS[1].phone}
            </a>
            <BrandButton to={ROUTES.contact} variant="primary" size="sm">
              Request a Quote
            </BrandButton>
          </div>

          <button onClick={() => setMobileOpen(true)} className="rounded-full p-2 text-cream lg:hidden" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Mega menus */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-x-0 top-full hidden lg:block"
            >
              <div className="mx-auto max-w-[1280px] px-8 pt-2">
                <div className="glass-cream overflow-hidden rounded-2xl border border-border shadow-float ring-champagne">
                  {openMenu === 'What We Do' ? (
                    <div className="grid grid-cols-3 gap-1 p-3">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          href={`${ROUTES.services}#${s.id}`}
                          onClick={() => setOpenMenu(null)}
                          className="group rounded-xl p-4 transition hover:bg-navy/5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-semibold text-champagne">{s.num}</span>
                            <span className="font-sans font-semibold text-navy group-hover:text-orange">{s.title}</span>
                          </div>
                          <p className="mt-1 text-[0.8rem] leading-snug text-muted-foreground">{s.blurb.slice(0, 62)}…</p>
                        </Link>
                      ))}
                      <Link
                        href={`${ROUTES.services}#estimator`}
                        onClick={() => setOpenMenu(null)}
                        className="group flex flex-col justify-between rounded-xl bg-navy p-4 text-cream"
                      >
                        <span className="kicker text-champagne-soft">Free Tool</span>
                        <span className="mt-6 inline-flex items-center gap-1 font-display text-lg">
                          Closing cost estimator <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-1 p-3">
                      {LOCATIONS.map((l) => (
                        <Link
                          key={l.city}
                          href={ROUTES.locations}
                          onClick={() => setOpenMenu(null)}
                          className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-navy/5"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/5 text-champagne">
                            <Phone className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block font-sans font-semibold text-navy group-hover:text-orange">{l.city}</span>
                            <span className="block text-[0.78rem] text-muted-foreground">{l.phone}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-navy-900 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-champagne/10 blur-[100px]" />
            <div className="flex items-center justify-between px-6 py-4">
              <img src="/assets/logo.png" alt="Florida Hometown Title" className="h-9 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="rounded-full p-2 text-cream/80 hover:bg-white/10" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-1 px-8">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-baseline justify-between border-b border-white/10 py-3 font-display text-2xl transition',
                      isActive(item.href) ? 'text-champagne' : 'text-cream hover:text-champagne',
                    )}
                  >
                    {item.label}
                    <span className="font-sans text-xs text-cream/30">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="space-y-3 px-8 pb-10">
              <BrandButton to={ROUTES.contact} variant="primary" onClick={() => setMobileOpen(false)} className="w-full">
                Request a Quote
              </BrandButton>
              <a
                href={`tel:${LOCATIONS[1].phone}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 py-3.5 font-sans font-semibold text-cream"
              >
                <Phone className="h-4 w-4 text-champagne" /> Call {LOCATIONS[1].phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
