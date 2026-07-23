import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONCIERGE, CONCIERGE_INTENTS, ROUTES } from '../data';

type Msg = { from: 'bot' | 'user'; text: string; chips?: string[] };

/** Chips that navigate instead of asking a follow-up question. */
const NAV_CHIPS: Record<string, { route: string; note: string }> = {
  'request a quote': { route: ROUTES.contact, note: "Opening our quote request — tell us a little about your transaction and we'll take it from there." },
  'get a quote': { route: ROUTES.contact, note: 'Taking you to our quote request now.' },
  'see locations': { route: ROUTES.locations, note: 'Here are all six of our Southwest Florida offices.' },
  'see all locations': { route: ROUTES.locations, note: 'Here are all six of our Southwest Florida offices.' },
  'find an office': { route: ROUTES.locations, note: 'Here are all six of our offices — tap one for directions.' },
  'call an office': { route: ROUTES.locations, note: 'Pick the office nearest you and its direct line is right there.' },
  'for realtors': { route: ROUTES.realtors, note: 'Here is everything we do for our Realtor partners.' },
  "i'm a realtor": { route: ROUTES.realtors, note: 'Wonderful — here is how we make you the hero at the table.' },
  'contact us': { route: ROUTES.contact, note: 'Our contact page is the fastest way to reach a real person.' },
  'book a closing': { route: ROUTES.contact, note: "Let's get it started — just share a few details here." },
  'open an order': { route: ROUTES.contact, note: "Let's get it started — just share a few details here." },
};

function matchIntent(text: string) {
  const q = text.toLowerCase();
  let best: { score: number; intent: (typeof CONCIERGE_INTENTS)[number] | null } = { score: 0, intent: null };
  for (const intent of CONCIERGE_INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) if (q.includes(kw)) score += kw.length;
    if (score > best.score) best = { score, intent };
  }
  return best.intent;
}

export default function Concierge() {
  const [, navigate] = useLocation();
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const seeded = useRef(false);

  // Proactive teaser bubble a few seconds after landing (once).
  useEffect(() => {
    if (sessionStorage.getItem('ava-dismissed')) return;
    const t = setTimeout(() => setTeaser(true), 4200);
    return () => clearTimeout(t);
  }, []);

  // Seed greeting on first open.
  useEffect(() => {
    if (open && !seeded.current) {
      seeded.current = true;
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setMsgs([{ from: 'bot', text: CONCIERGE.greeting, chips: CONCIERGE.quickStart }]);
      }, 900);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing]);

  function openChat() {
    setTeaser(false);
    setOpen(true);
  }
  function dismissTeaser() {
    setTeaser(false);
    sessionStorage.setItem('ava-dismissed', '1');
  }

  function botReply(userText: string) {
    setTyping(true);
    window.setTimeout(() => {
      const intent = matchIntent(userText);
      setTyping(false);
      if (intent) {
        setMsgs((m) => [...m, { from: 'bot', text: intent.answer, chips: intent.chips }]);
      } else {
        setMsgs((m) => [...m, { from: 'bot', text: CONCIERGE.fallback, chips: ['Contact us', 'See locations', 'Request a quote'] }]);
      }
    }, 750 + Math.min(userText.length * 12, 700));
  }

  function send(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setInput('');

    const navChip = NAV_CHIPS[clean.toLowerCase()];
    setMsgs((m) => [...m, { from: 'user', text: clean }]);

    if (navChip) {
      setTyping(true);
      window.setTimeout(() => {
        setTyping(false);
        setMsgs((m) => [...m, { from: 'bot', text: navChip.note }]);
        window.setTimeout(() => navigate(navChip.route), 650);
      }, 700);
      return;
    }
    botReply(clean);
  }

  return (
    <>
      {/* Launcher + teaser */}
      <div className="fixed bottom-5 right-5 z-[85] flex flex-col items-end gap-3">
        <AnimatePresence>
          {teaser && !open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              className="relative max-w-[15rem] rounded-2xl rounded-br-sm border border-border bg-white p-4 shadow-float"
            >
              <button onClick={dismissTeaser} className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-navy text-cream" aria-label="Dismiss">
                <X className="h-3.5 w-3.5" />
              </button>
              <p className="text-[0.82rem] leading-snug text-navy">
                Hi, I'm <span className="font-semibold">Ava</span> — need a quick hand with a quote or closing?
              </p>
              <button onClick={openChat} className="mt-2 text-sm font-semibold text-orange hover:underline">
                Let's chat →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={openChat}
              className="relative grid h-14 w-14 place-items-center rounded-full bg-navy text-cream shadow-float ring-champagne"
              aria-label="Chat with Ava, our title concierge"
            >
              <span className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 0 0 hsl(var(--champagne))', animation: 'pulse-ring 2.4s ease-out infinite' }} />
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-orange text-[10px] font-bold text-white">
                <Sparkles className="h-3 w-3" />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="fixed bottom-5 right-5 z-[86] flex h-[560px] max-h-[80vh] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-cream shadow-float"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 bg-navy px-5 py-4 text-cream">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-champagne/15 blur-2xl" />
              <div className="relative grid h-11 w-11 place-items-center rounded-full bg-champagne font-display text-lg font-semibold text-navy">
                A
              </div>
              <div className="relative flex-1">
                <p className="font-display text-lg leading-none">{CONCIERGE.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-cream/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> {CONCIERGE.role} · online
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="relative rounded-full p-1.5 text-cream/80 transition hover:bg-white/10" aria-label="Close chat">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div key={i}>
                  <div className={cn('flex', m.from === 'user' ? 'justify-end' : 'justify-start')}>
                    <div
                      className={cn(
                        'max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                        m.from === 'user'
                          ? 'rounded-br-sm bg-navy text-cream'
                          : 'rounded-bl-sm bg-white text-navy shadow-soft',
                      )}
                    >
                      {m.text}
                    </div>
                  </div>
                  {m.chips && m.from === 'bot' && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.chips.map((c) => (
                        <button
                          key={c}
                          onClick={() => send(c)}
                          className="rounded-full border border-champagne/50 bg-champagne/10 px-3 py-1.5 text-xs font-semibold text-navy transition hover:bg-champagne hover:text-navy"
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-soft">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 rounded-full bg-navy/40"
                        style={{ animation: `dot-typing 1.2s ${d * 0.15}s infinite ease-in-out` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-white px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Ava anything…"
                className="flex-1 rounded-full bg-muted px-4 py-2.5 text-sm text-navy outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-champagne/50"
              />
              <button
                type="submit"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange text-white transition hover:brightness-105 disabled:opacity-40"
                disabled={!input.trim()}
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
