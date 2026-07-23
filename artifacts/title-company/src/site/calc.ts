/**
 * Florida closing-cost estimator.
 *
 * Uses Florida's promulgated title-insurance premium rates and standard
 * statutory figures (documentary stamps, intangible tax, simultaneous-issue
 * lender's policy). Figures are ESTIMATES for guidance only — actual costs
 * vary by county, endorsements, and transaction specifics.
 */

/** Florida promulgated owner's title insurance premium (per $1,000 tiers). */
export function ownersTitlePremium(price: number): number {
  if (price <= 0) return 0;
  const tiers = [
    { upTo: 100_000, rate: 5.75 },
    { upTo: 1_000_000, rate: 5.0 },
    { upTo: 5_000_000, rate: 2.5 },
    { upTo: 10_000_000, rate: 2.25 },
    { upTo: Infinity, rate: 2.0 },
  ];
  let premium = 0;
  let prev = 0;
  for (const t of tiers) {
    if (price > prev) {
      const slice = Math.min(price, t.upTo) - prev;
      premium += (slice / 1000) * t.rate;
      prev = t.upTo;
    }
  }
  return Math.max(100, Math.round(premium));
}

export type ClosingInput = {
  price: number;
  financing: boolean;
  loanAmount: number;
};

export type LineItem = { label: string; amount: number; note?: string; who: 'buyer' | 'seller' };

export type ClosingEstimate = {
  items: LineItem[];
  ownersPremium: number;
  buyerTotal: number;
  sellerTotal: number;
  total: number;
};

/** Constants — statewide standard rates. */
const DOC_STAMP_DEED = 0.007; // $0.70 / $100 of price
const DOC_STAMP_NOTE = 0.0035; // $0.35 / $100 of loan
const INTANGIBLE_TAX = 0.002; // $2.00 / $1,000 of loan
const SETTLEMENT_FEE = 595; // Florida Hometown settlement/closing fee (est.)
const TITLE_SEARCH = 175; // search & exam (est.)
const SIMULTANEOUS_LENDER = 25; // FL simultaneous-issue lender's policy

export function estimateClosing({ price, financing, loanAmount }: ClosingInput): ClosingEstimate {
  const owners = ownersTitlePremium(price);
  const items: LineItem[] = [
    { label: "Owner's Title Insurance", amount: owners, note: 'FL promulgated rate', who: 'seller' },
    { label: 'Settlement / Closing Fee', amount: SETTLEMENT_FEE, note: 'estimate', who: 'buyer' },
    { label: 'Title Search & Examination', amount: TITLE_SEARCH, note: 'estimate', who: 'buyer' },
    { label: 'Documentary Stamps on Deed', amount: Math.round(price * DOC_STAMP_DEED), note: '$0.70 / $100', who: 'seller' },
    { label: 'Recording Fees', amount: financing ? 90 : 30, note: 'estimate', who: 'buyer' },
  ];

  if (financing && loanAmount > 0) {
    items.push(
      { label: "Lender's Title Policy", amount: SIMULTANEOUS_LENDER, note: 'simultaneous issue', who: 'buyer' },
      { label: 'Doc Stamps on Note', amount: Math.round(loanAmount * DOC_STAMP_NOTE), note: '$0.35 / $100', who: 'buyer' },
      { label: 'Intangible Tax on Mortgage', amount: Math.round(loanAmount * INTANGIBLE_TAX), note: '$2.00 / $1,000', who: 'buyer' },
    );
  }

  const buyerTotal = items.filter((i) => i.who === 'buyer').reduce((s, i) => s + i.amount, 0);
  const sellerTotal = items.filter((i) => i.who === 'seller').reduce((s, i) => s + i.amount, 0);

  return { items, ownersPremium: owners, buyerTotal, sellerTotal, total: buyerTotal + sellerTotal };
}

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
