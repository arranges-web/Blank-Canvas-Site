import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'span' | 'li' | 'section';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------------- Animated counter ---------------- */
export function Counter({
  to,
  suffix = '',
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const rounded = Math.round(v);
        setDisplay(rounded >= 1000 ? rounded.toLocaleString() : String(rounded));
      },
    });
    return controls.stop;
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- Google "G" logo (official 4-color) ---------------- */
export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7A21.99 21.99 0 0 0 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.2 13.2 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A22 22 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.94 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

/* ---------------- 5-star row ---------------- */
export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-0.5', className)} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-[#FBBC05]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------------- Brand button ---------------- */
export function BrandButton({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type,
}: {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost' | 'navy';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold font-display tracking-tight transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2';
  const styles = {
    primary:
      'bg-orange text-white shadow-glow-orange hover:-translate-y-0.5 hover:brightness-105',
    navy: 'bg-navy text-white shadow-soft hover:-translate-y-0.5 hover:bg-navy-700',
    ghost:
      'border border-white/40 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/70',
  }[variant];

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cn(base, styles, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} className={cn(base, styles, className)}>
      {content}
    </button>
  );
}
