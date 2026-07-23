import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Banknote, Calculator, Info, Landmark, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { estimateClosing, money } from '../calc';
import { AnimatedMoney, BrandButton, Kicker, Reveal } from '../primitives';
import { ROUTES } from '../data';

const PRESETS = [350_000, 500_000, 750_000, 1_000_000];

export default function CostEstimator() {
  const [price, setPrice] = useState(500_000);
  const [financing, setFinancing] = useState(true);
  const [downPct, setDownPct] = useState(20);
  const [view, setView] = useState<'buyer' | 'seller'>('buyer');

  const loanAmount = financing ? Math.round(price * (1 - downPct / 100)) : 0;
  const est = useMemo(() => estimateClosing({ price, financing, loanAmount }), [price, financing, loanAmount]);
  const viewTotal = view === 'buyer' ? est.buyerTotal : est.sellerTotal;
  const shown = est.items.filter((i) => i.who === view);

  return (
    <section id="estimator" className="relative overflow-hidden bg-navy py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-champagne/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Kicker light>Interactive Tool</Kicker>
          <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">
            Estimate your <span className="script text-champagne">closing costs</span>
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Move the sliders to preview Florida title insurance and closing costs in real time — no email required.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Controls */}
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-cream/80">
                <Landmark className="h-4 w-4 text-champagne" /> Purchase price
              </label>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-4xl font-semibold text-champagne">{money(price)}</span>
              </div>
              <input
                type="range" min={75_000} max={2_000_000} step={5_000}
                value={price} onChange={(e) => setPrice(Number(e.target.value))}
                className="mt-4 w-full accent-orange"
                aria-label="Purchase price"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button key={p} onClick={() => setPrice(p)} className={cn('rounded-full border px-3 py-1 text-xs font-semibold transition', price === p ? 'border-champagne bg-champagne text-navy' : 'border-white/20 text-cream/70 hover:border-champagne')}>
                    {money(p)}
                  </button>
                ))}
              </div>

              {/* Financing toggle */}
              <div className="mt-7">
                <span className="text-sm font-semibold text-cream/80">How are you paying?</span>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[{ k: false, label: 'Paying cash', Icon: Wallet }, { k: true, label: 'Financing', Icon: Banknote }].map(({ k, label, Icon }) => (
                    <button
                      key={label}
                      onClick={() => setFinancing(k)}
                      className={cn('flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold transition', financing === k ? 'border-champagne bg-champagne/15 text-cream' : 'border-white/15 text-cream/60 hover:border-white/40')}
                    >
                      <Icon className="h-4 w-4 text-champagne" /> {label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {financing && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="mt-6">
                      <div className="flex items-center justify-between text-sm font-semibold text-cream/80">
                        <span>Down payment</span>
                        <span className="text-champagne">{downPct}% · {money(price * downPct / 100)}</span>
                      </div>
                      <input type="range" min={3} max={100} step={1} value={downPct} onChange={(e) => setDownPct(Number(e.target.value))} className="mt-3 w-full accent-orange" aria-label="Down payment percent" />
                      <p className="mt-2 text-xs text-cream/50">Loan amount: {money(loanAmount)}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Perspective */}
              <div className="mt-7">
                <span className="text-sm font-semibold text-cream/80">Show costs for the…</span>
                <div className="mt-3 inline-flex rounded-full border border-white/15 p-1">
                  {(['buyer', 'seller'] as const).map((v) => (
                    <button key={v} onClick={() => setView(v)} className={cn('rounded-full px-5 py-1.5 text-sm font-semibold capitalize transition', view === v ? 'bg-orange text-white' : 'text-cream/70')}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Result */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-champagne/30 bg-cream p-7 text-navy shadow-float sm:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Calculator className="h-4 w-4 text-orange" /> Estimated {view} costs
              </div>
              <div className="mt-2 font-display text-5xl font-semibold text-navy">
                <AnimatedMoney value={viewTotal} />
              </div>

              <div className="mt-6 flex-1 space-y-2.5 border-t border-border pt-5">
                {shown.map((i) => (
                  <div key={i.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-navy/80">
                      {i.label}
                      {i.note && <span className="ml-1.5 text-xs text-muted-foreground">· {i.note}</span>}
                    </span>
                    <span className="font-semibold tabular-nums text-navy">{money(i.amount)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-xl bg-navy/5 p-3 text-xs text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <span>
                  Estimate only. In most Florida counties the seller customarily pays the owner's title policy; in
                  Miami-Dade, Broward, Sarasota &amp; Collier the buyer typically does. We'll confirm your exact figures on your quote.
                </span>
              </div>

              <BrandButton to={ROUTES.contact} variant="primary" className="mt-5 w-full">
                Get my exact quote
              </BrandButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
