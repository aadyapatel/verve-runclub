'use client'
import Cursor from '@/components/Cursor'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Values from '@/components/Values'
import Community from '@/components/Community'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Cursor />
      <Hero />
      <Marquee />

      {/* Story section — clean editorial */}
      <section style={{ background: 'var(--charcoal)', padding: '8rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="mag-rule" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">The Story</div>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.88, marginBottom: '2rem' }}>
                BUILT WITH<br /><span style={{ color: 'var(--red)' }}>PURPOSE.</span><br />OPEN TO ALL.
              </h2>
              <Link href="/about" className="btn-primary">Read the Full Story</Link>
            </div>
            <div>
              <blockquote style={{ borderLeft: '3px solid var(--red)', paddingLeft: '1.5rem', fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', lineHeight: 1.2, color: 'rgba(255,255,255,0.65)', marginBottom: '1.75rem' }}>
                "Running events are expensive. So instead of waiting for access — we built our own space."
              </blockquote>
              <p style={{ color: 'rgba(255,255,255,0.38)', lineHeight: 1.85, fontSize: '0.93rem', marginBottom: '2rem' }}>
                Verve started with a simple belief: running should be free, and it should be for everyone. We provide water, Tata Gluco, and bananas. Funded by sponsorships — and when those fall short, by the team itself.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                {[{ n: '100+', l: 'Runners' }, { n: '14+', l: 'Events' }, { n: '₹0', l: 'Entry Fee' }].map(s => (
                  <div key={s.l} style={{ borderLeft: '2px solid var(--red)', paddingLeft: '0.8rem' }}>
                    <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: '#fff', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Values />

      {/* Runs section — clean text cards */}
      <section style={{ background: 'var(--black)', padding: '8rem 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="mag-rule" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div className="eyebrow">The Runs</div>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.88 }}>
                EVERY SUNDAY.<br /><span style={{ color: 'var(--red)' }}>NO EXCUSES.</span>
              </h2>
            </div>
            <Link href="/runs" className="btn-ghost">See All Runs →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {[
              { tag: 'Signature', title: 'Coffee Run 3K', sub: '× Java Clinic · Campus 3 · 8:30AM', desc: 'The run that started it all. Coffee after — always.' },
              { tag: 'Signature Event', title: 'Ignition Run 2025', sub: 'Campus 6 · 6AM · Snacks & Stickers', desc: 'Lace up. Show up. Ignite the run.' },
              { tag: 'Championship', title: 'Last Man Standing', sub: 'Athletic Stadium · 7K / 10K / 21K', desc: 'Three distances, one track, one question.' },
            ].map((r, i) => (
              <div
                key={r.title}
                style={{ background: 'var(--black)', padding: '2.5rem', position: 'relative', borderTop: i === 0 ? '2px solid var(--red)' : '2px solid transparent', transition: 'border-color 0.2s, background 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderTopColor = 'var(--red)'; e.currentTarget.style.background = 'var(--charcoal)' }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = i === 0 ? 'var(--red)' : 'transparent'; e.currentTarget.style.background = 'var(--black)' }}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'var(--font-bebas)', fontSize: '4rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.75rem' }}>{r.tag}</div>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: '#fff', lineHeight: 0.9, marginBottom: '0.6rem' }}>{r.title}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>{r.sub}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Community />

      {/* Verve for all centrepiece */}
      <section style={{ background: 'var(--black)', padding: '10rem 3rem', position: 'relative', overflow: 'hidden', borderTop: '3px solid var(--red)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', userSelect: 'none' }}>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(6rem, 18vw, 16rem)', color: 'rgba(255,255,255,0.025)', lineHeight: 0.9, textAlign: 'center' }}>
            VERVE<br />FOR ALL
          </div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.68rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '2rem' }}>
            The Community. The Mission. The Run.
          </div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 12vw, 11rem)', lineHeight: 0.85, color: '#fff', marginBottom: '0.5rem' }}>VERVE FOR ALL.</div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 12vw, 11rem)', lineHeight: 0.85, color: 'var(--red)', marginBottom: '3rem' }}>ALL FOR VERVE.</div>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1rem', lineHeight: 1.85, maxWidth: '520px', margin: '0 auto 3.5rem', fontStyle: 'italic' }}>
            No fees. No gatekeeping. Just people who show up, lace up, and move together — every Sunday at KIIT.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/join" style={{ background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.9rem', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '1.1rem 3rem', textDecoration: 'none', display: 'inline-block', fontWeight: 700, clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
              Join Free
            </Link>
            <Link href="/about" className="btn-ghost" style={{ padding: '1.1rem 0' }}>Our Story →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '3rem' }}>
            {[{ n: '100+', l: 'Active Runners' }, { n: '14+', l: 'Events Hosted' }, { n: '3', l: 'Collabs' }, { n: '₹0', l: 'Entry Fee' }].map((s, i) => (
              <div key={s.l} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', padding: '0 2rem' }}>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.5rem', color: i === 3 ? 'var(--red)' : '#fff', lineHeight: 1, marginBottom: '0.3rem' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page index */}
      <section style={{ background: 'var(--charcoal)', padding: '6rem 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="mag-rule" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {[
              { href: '/about', num: '01', label: 'About Verve', desc: 'The origin, mission, and what standardised free running means.' },
              { href: '/runs', num: '02', label: 'All Runs', desc: 'Every past run. Updated after each event.' },
              { href: '/collabs', num: '03', label: 'Collaborations', desc: 'Java Clinic, YFC Gym, KIIT NSS — the brands that share our vision.' },
              { href: '/gallery', num: '04', label: 'Gallery', desc: 'Every run captured. Real moments from real events.' },
              { href: '/join', num: '05', label: 'Join Us', desc: 'WhatsApp community + Instagram. One tap and you\'re in.' },
            ].map(p => (
              <Link key={p.href} href={p.href} style={{ background: 'var(--charcoal)', padding: '1.75rem 2.5rem', display: 'grid', gridTemplateColumns: '60px 1fr auto', alignItems: 'center', gap: '2rem', textDecoration: 'none', borderLeft: '2px solid transparent', transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--red)'; e.currentTarget.style.background = 'var(--mid)' }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = 'var(--charcoal)' }}
              >
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}>{p.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.2rem' }}>{p.label}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>{p.desc}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
