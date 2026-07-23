import { BadgeCheck, Landmark, Lock, ScrollText, ShieldCheck } from 'lucide-react';
import { GoogleG, Stars, Reveal } from '../primitives';
import { TRUST } from '../data';

const ICONS = [BadgeCheck, ScrollText, Landmark, ShieldCheck, Lock];

export default function TrustStrip() {
  const items = TRUST.badges.map((label, i) => ({ label, Icon: ICONS[i % ICONS.length] }));
  return (
    <section aria-label="Trust and credentials" className="relative z-10 border-y border-border bg-white">
      <Reveal className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 py-7 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-cream px-5 py-3 shadow-soft">
          <GoogleG className="h-8 w-8 shrink-0" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold text-navy">{TRUST.googleRating}</span>
              <Stars />
            </div>
            <p className="text-xs text-muted-foreground">{TRUST.reviewWord}</p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden lg:max-w-3xl [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-10">
            {[...items, ...items].map(({ label, Icon }, i) => (
              <div key={i} className="flex shrink-0 items-center gap-2.5 text-navy/70">
                <Icon className="h-5 w-5 text-champagne" />
                <span className="whitespace-nowrap font-sans text-sm font-medium tracking-tight">{label}</span>
                <span className="ml-4 h-1 w-1 rounded-full bg-champagne/50" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
