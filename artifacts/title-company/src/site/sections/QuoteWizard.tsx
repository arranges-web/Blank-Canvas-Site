import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Building2, CheckCircle2, Home, RefreshCw, Sparkles, Send, User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { estimateClosing, money } from '../calc';
import { BrandButton } from '../primitives';
import { LOCATIONS } from '../data';

const STEPS = ['Transaction', 'Property', 'About You', 'Your Details'];

const TXN = [
  { id: 'purchase', label: 'Home Purchase', Icon: Home, desc: 'Buying a residential property' },
  { id: 'refinance', label: 'Refinance', Icon: RefreshCw, desc: 'Refinancing an existing loan' },
  { id: 'commercial', label: 'Commercial', Icon: Building2, desc: 'Commercial real estate' },
  { id: 'other', label: 'Something Else', Icon: Sparkles, desc: 'Tell us about it' },
];

const ROLES = ['Buyer / Seller', 'Real Estate Agent', 'Mortgage Lender', 'Builder', 'Other'];

type Data = {
  txn: string; price: number; financing: boolean; downPct: number;
  office: string; role: string; name: string; email: string; phone: string; message: string;
};

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const [d, setD] = useState<Data>({
    txn: '', price: 500_000, financing: true, downPct: 20,
    office: '', role: '', name: '', email: '', phone: '', message: '',
  });

  const set = (patch: Partial<Data>) => setD((s) => ({ ...s, ...patch }));
  const go = (n: number) => { setDir(n > step ? 1 : -1); setStep(n); };

  const loan = d.financing ? Math.round(d.price * (1 - d.downPct / 100)) : 0;
  const est = useMemo(() => estimateClosing({ price: d.price, financing: d.financing, loanAmount: loan }), [d.price, d.financing, loan]);

  const canNext =
    (step === 0 && !!d.txn) ||
    (step === 1) ||
    (step === 2 && !!d.role) ||
    (step === 3 && d.name.trim() && /.+@.+\..+/.test(d.email));

  if (done) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 240, damping: 16 }} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-champagne/15 text-champagne">
          <CheckCircle2 className="h-11 w-11" />
        </motion.span>
        <h3 className="mt-6 font-display text-3xl font-medium text-cream">Your request is in, {d.name.split(' ')[0] || 'friend'}.</h3>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          {d.office ? `Our ${d.office} office` : 'Your nearest office'} will reach out shortly with your exact figures. Here's your working estimate:
        </p>
        <div className="mx-auto mt-6 max-w-xs rounded-2xl border border-champagne/30 bg-white/[0.05] p-5">
          <p className="text-xs uppercase tracking-wide text-cream/50">Estimated total closing costs</p>
          <p className="font-display text-4xl font-semibold text-champagne">{money(est.total)}</p>
        </div>
        <button onClick={() => { setDone(false); setStep(0); }} className="mt-8 text-sm font-semibold text-champagne hover:underline">
          Start a new quote
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-float sm:p-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div className={cn('grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-colors', i < step ? 'bg-champagne text-navy' : i === step ? 'bg-orange text-white' : 'bg-white/10 text-cream/50')}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={cn('mt-1.5 hidden text-[0.65rem] font-semibold sm:block', i === step ? 'text-champagne' : 'text-cream/40')}>{label}</span>
              </div>
              {i < STEPS.length - 1 && <div className={cn('mx-2 h-px flex-1 transition-colors', i < step ? 'bg-champagne' : 'bg-white/10')} />}
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="relative min-h-[19rem]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div>
                <h3 className="font-display text-2xl font-medium text-cream">What are you closing?</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {TXN.map(({ id, label, Icon, desc }) => (
                    <button key={id} onClick={() => { set({ txn: id }); go(1); }} className={cn('flex items-start gap-3 rounded-2xl border p-4 text-left transition', d.txn === id ? 'border-champagne bg-champagne/10' : 'border-white/15 hover:border-champagne/50 hover:bg-white/[0.03]')}>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-champagne"><Icon className="h-5 w-5" /></span>
                      <span>
                        <span className="block font-semibold text-cream">{label}</span>
                        <span className="block text-xs text-cream/55">{desc}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl font-medium text-cream">Tell us about the property</h3>
                <div className="mt-5 space-y-5">
                  <div>
                    <div className="flex items-center justify-between text-sm font-semibold text-cream/80">
                      <span>Estimated price</span>
                      <span className="font-display text-lg text-champagne">{money(d.price)}</span>
                    </div>
                    <input type="range" min={75_000} max={2_000_000} step={5_000} value={d.price} onChange={(e) => set({ price: Number(e.target.value) })} className="mt-2 w-full accent-orange" aria-label="Estimated price" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[{ k: false, label: 'Paying cash' }, { k: true, label: 'Financing' }].map(({ k, label }) => (
                      <button key={label} onClick={() => set({ financing: k })} className={cn('rounded-xl border py-2.5 text-sm font-semibold transition', d.financing === k ? 'border-champagne bg-champagne/15 text-cream' : 'border-white/15 text-cream/60 hover:border-white/40')}>{label}</button>
                    ))}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-cream/80">Nearest office</label>
                    <select value={d.office} onChange={(e) => set({ office: e.target.value })} className="mt-2 w-full appearance-none rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-cream outline-none focus:border-champagne">
                      <option value="" className="text-navy">Select a location…</option>
                      {LOCATIONS.map((l) => <option key={l.city} className="text-navy">{l.city}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-champagne/30 bg-champagne/10 px-4 py-3">
                    <span className="text-sm text-cream/80">Working estimate</span>
                    <span className="font-display text-xl font-semibold text-champagne">{money(est.total)}</span>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl font-medium text-cream">Which best describes you?</h3>
                <div className="mt-5 grid gap-2.5">
                  {ROLES.map((r) => (
                    <button key={r} onClick={() => { set({ role: r }); go(3); }} className={cn('flex items-center gap-3 rounded-xl border p-4 text-left text-sm font-semibold transition', d.role === r ? 'border-champagne bg-champagne/10 text-cream' : 'border-white/15 text-cream/75 hover:border-champagne/50')}>
                      <User className="h-4 w-4 text-champagne" /> {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="font-display text-2xl font-medium text-cream">Where should we send it?</h3>
                <div className="mt-5 space-y-4">
                  <input placeholder="Full name *" value={d.name} onChange={(e) => set({ name: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-champagne" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="email" placeholder="Email *" value={d.email} onChange={(e) => set({ email: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-champagne" />
                    <input placeholder="Phone" value={d.phone} onChange={(e) => set({ phone: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-champagne" />
                  </div>
                  <textarea rows={3} placeholder="Anything else we should know?" value={d.message} onChange={(e) => set({ message: e.target.value })} className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-champagne" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => go(Math.max(0, step - 1))} className={cn('inline-flex items-center gap-1.5 text-sm font-semibold text-cream/70 transition hover:text-champagne', step === 0 && 'pointer-events-none opacity-0')}>
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        {step < 3 ? (
          <BrandButton onClick={() => canNext && go(step + 1)} variant="primary" size="sm" className={cn(!canNext && 'pointer-events-none opacity-40')}>
            Continue <ArrowRight className="h-4 w-4" />
          </BrandButton>
        ) : (
          <BrandButton onClick={() => canNext && setDone(true)} variant="primary" size="sm" className={cn(!canNext && 'pointer-events-none opacity-40')}>
            Request My Quote <Send className="h-4 w-4" />
          </BrandButton>
        )}
      </div>
    </div>
  );
}
