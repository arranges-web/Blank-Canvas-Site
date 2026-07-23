import './index.css';

const NAV_LINKS = ['Services', 'About', 'Process', 'Contact'];

const SERVICES = [
  {
    title: 'Title Search & Examination',
    desc: 'Thorough search of public records to verify ownership history and uncover any liens, encumbrances, or defects affecting the title.',
  },
  {
    title: 'Title Insurance',
    desc: "Owner's and lender's policies that protect against future claims arising from past title defects, even those unknown at closing.",
  },
  {
    title: 'Closing & Escrow Services',
    desc: 'Neutral third-party coordination of all funds, documents, and signatures to ensure a smooth, on-time closing for every transaction.',
  },
  {
    title: 'Deed Preparation',
    desc: 'Accurate preparation and recording of warranty deeds, quitclaim deeds, and all other conveyance documents required by your transaction.',
  },
  {
    title: '1031 Exchange Facilitation',
    desc: 'Expert guidance through tax-deferred exchange transactions, ensuring strict compliance with IRS timelines and requirements.',
  },
  {
    title: 'REO & Foreclosure Services',
    desc: 'Specialized support for lenders, servicers, and investors handling bank-owned properties and distressed asset transactions.',
  },
];

const STEPS = [
  { num: '01', title: 'Open Order', desc: 'Submit your purchase agreement or refinance request to open a title order.' },
  { num: '02', title: 'Title Search', desc: 'We examine public records going back decades to establish a clear chain of title.' },
  { num: '03', title: 'Clear to Close', desc: 'Any title issues are resolved and a commitment is issued to all parties.' },
  { num: '04', title: 'Closing Day', desc: 'We coordinate signing, fund disbursement, and recording of all documents.' },
];

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'hsl(215,60%,22%)',
        borderBottom: '3px solid hsl(42,70%,50%)',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.04em' }}>
          Pinnacle Title Co.
        </span>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                style={{ color: 'hsl(42,70%,80%)', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e => (e.currentTarget.style.color = 'hsl(42,70%,80%)')}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          style={{
            background: 'hsl(42,70%,50%)', color: 'hsl(215,40%,15%)',
            padding: '0.5rem 1.25rem', borderRadius: '4px',
            textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
          }}
        >
          Get a Quote
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, hsl(215,60%,18%) 0%, hsl(215,50%,28%) 100%)',
        color: '#fff',
        padding: '6rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{ color: 'hsl(42,70%,65%)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Trusted Since 1998
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.25rem', maxWidth: '700px', margin: '0 auto 1.25rem' }}>
          Clear Titles. Confident Closings.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'hsl(210,30%,80%)', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          Pinnacle Title provides full-service title insurance and closing solutions for residential and commercial real estate across the region.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: 'hsl(42,70%,50%)', color: 'hsl(215,40%,15%)',
            padding: '0.85rem 2rem', borderRadius: '4px',
            textDecoration: 'none', fontWeight: 700, fontSize: '1rem',
          }}>
            Start Your Order
          </a>
          <a href="#services" style={{
            border: '2px solid hsl(42,70%,50%)', color: 'hsl(42,70%,65%)',
            padding: '0.85rem 2rem', borderRadius: '4px',
            textDecoration: 'none', fontWeight: 600, fontSize: '1rem',
          }}>
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}>
          {[['25+', 'Years in Business'], ['12,000+', 'Closings Completed'], ['98%', 'Client Satisfaction']].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(42,70%,60%)' }}>{val}</div>
              <div style={{ fontSize: '0.85rem', color: 'hsl(210,30%,70%)', letterSpacing: '0.05em' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '5rem 2rem', background: 'hsl(210,20%,98%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'hsl(42,70%,40%)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.5rem' }}>What We Offer</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(215,60%,22%)' }}>Comprehensive Title Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{
                background: '#fff', border: '1px solid hsl(210,20%,88%)',
                borderTop: '3px solid hsl(42,70%,50%)',
                borderRadius: '6px', padding: '1.75rem',
              }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'hsl(215,60%,22%)', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'hsl(215,20%,45%)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '5rem 2rem', background: 'hsl(215,60%,22%)', color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'hsl(42,70%,65%)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>About Us</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your Local Title Experts</h2>
          <p style={{ fontSize: '1rem', color: 'hsl(210,30%,80%)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Founded in 1998, Pinnacle Title Company has grown into one of the region's most trusted title and settlement service providers. We serve buyers, sellers, lenders, and real estate professionals with the same commitment to accuracy, transparency, and on-time closings that built our reputation.
          </p>
          <p style={{ fontSize: '1rem', color: 'hsl(210,30%,80%)', lineHeight: 1.8 }}>
            Our licensed title officers, escrow agents, and closing attorneys bring decades of combined experience to every transaction — residential single-family, commercial, new construction, refinance, and beyond.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[['Licensed & Insured', 'Full E&O coverage and state licensing'], ['Local Knowledge', 'Deep expertise in regional recording requirements'], ['Underwriter Partners', 'Backed by top national underwriters']].map(([title, sub]) => (
              <div key={title} style={{ maxWidth: '200px' }}>
                <div style={{ width: '40px', height: '3px', background: 'hsl(42,70%,50%)', margin: '0 auto 0.75rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</div>
                <div style={{ fontSize: '0.82rem', color: 'hsl(210,30%,70%)' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'hsl(42,70%,40%)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.5rem' }}>How It Works</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(215,60%,22%)' }}>Our Closing Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '2rem' }}>
            {STEPS.map((step, i) => (
              <div key={step.num} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'hsl(215,60%,22%)', color: 'hsl(42,70%,60%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', fontWeight: 700, margin: '0 auto 1rem',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(215,60%,22%)', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'hsl(215,20%,45%)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '5rem 2rem', background: 'hsl(210,20%,96%)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'hsl(42,70%,40%)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Get In Touch</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(215,60%,22%)', marginBottom: '1rem' }}>Ready to Open an Order?</h2>
          <p style={{ color: 'hsl(215,20%,45%)', marginBottom: '2.5rem' }}>
            Contact our team today and we'll get your transaction moving quickly.
          </p>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}
            onSubmit={e => { e.preventDefault(); alert('Thank you! We will be in touch shortly.'); }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(215,40%,30%)', display: 'block', marginBottom: '0.4rem' }}>First Name</label>
                <input required placeholder="Jane" style={inputStyle} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(215,40%,30%)', display: 'block', marginBottom: '0.4rem' }}>Last Name</label>
                <input required placeholder="Smith" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(215,40%,30%)', display: 'block', marginBottom: '0.4rem' }}>Email Address</label>
              <input required type="email" placeholder="jane@example.com" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(215,40%,30%)', display: 'block', marginBottom: '0.4rem' }}>Phone Number</label>
              <input placeholder="(555) 000-0000" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(215,40%,30%)', display: 'block', marginBottom: '0.4rem' }}>Service Needed</label>
              <select style={inputStyle}>
                <option value="">Select a service…</option>
                <option>Residential Purchase</option>
                <option>Refinance</option>
                <option>Commercial Transaction</option>
                <option>1031 Exchange</option>
                <option>REO / Foreclosure</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(215,40%,30%)', display: 'block', marginBottom: '0.4rem' }}>Message</label>
              <textarea rows={4} placeholder="Tell us about your transaction…" style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
            <button
              type="submit"
              style={{
                background: 'hsl(215,60%,22%)', color: '#fff',
                border: 'none', borderRadius: '4px',
                padding: '0.9rem', fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer', marginTop: '0.5rem',
              }}
            >
              Send Message
            </button>
          </form>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['Phone', '(555) 800-1234'], ['Email', 'orders@pinnacletitle.com'], ['Hours', 'Mon–Fri 8am–6pm']].map(([label, val]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: 'hsl(42,70%,40%)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{label}</div>
                <div style={{ fontSize: '0.95rem', color: 'hsl(215,40%,20%)', fontWeight: 600 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: 'hsl(215,60%,15%)', color: 'hsl(210,30%,65%)',
        textAlign: 'center', padding: '1.75rem 2rem', fontSize: '0.82rem',
      }}>
        <p>© {new Date().getFullYear()} Pinnacle Title Company. All rights reserved.</p>
        <p style={{ marginTop: '0.25rem', color: 'hsl(210,30%,50%)' }}>
          Licensed Title Insurance Agent · ALTA Member
        </p>
      </footer>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.65rem 0.85rem',
  border: '1px solid hsl(210,20%,82%)',
  borderRadius: '4px',
  fontSize: '0.9rem',
  background: '#fff',
  color: 'hsl(215,40%,15%)',
  outline: 'none',
};
