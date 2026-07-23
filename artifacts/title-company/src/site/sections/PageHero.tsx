import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Kicker } from '../primitives';
import { ROUTES } from '../data';

export default function PageHero({
  kicker,
  title,
  italic,
  subtitle,
  image,
  crumb,
}: {
  kicker: string;
  title: string;
  italic?: string;
  subtitle: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative isolate flex min-h-[48vh] items-end overflow-hidden pb-10 pt-28 sm:min-h-[62vh] sm:pb-14 sm:pt-40">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy-900 via-navy/80 to-navy/50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-900/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-1.5 text-xs text-cream/60"
        >
          <Link href={ROUTES.home} className="hover:text-champagne">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-champagne">{crumb}</span>
        </motion.nav>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <Kicker light>{kicker}</Kicker>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="mt-4 max-w-3xl font-display text-[1.7rem] font-semibold leading-[1.12] text-cream sm:text-5xl lg:text-6xl"
        >
          {title} {italic && <span className="script text-champagne">{italic}</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 max-w-xl text-[0.95rem] sm:text-lg leading-relaxed text-cream/75"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
