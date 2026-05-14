'use client'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div style={{ background: 'var(--black)', padding: '12rem 3rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(200,24,28,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', fontFamily: 'var(--font-bebas)', fontSize: 'clamp(8rem, 22vw, 18rem)', color: 'rgba(255,255,255,0.025)', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>VERVE</div>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div className="mag-rule" />
          <div className="eyebrow">What We Stand For</div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.88, marginBottom: '2.5rem' }}>
            THIS IS<br /><span style={{ color: 'var(--red)' }}>VERVE</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, maxWidth: '600px', fontStyle: 'italic' }}>
            Not a brand. Not a business. A movement — built by students, for students, from scratch. Verve has one single purpose: to promote the art of running.
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--charcoal)', padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <img src="/images/verve-logo.jpeg" alt="Verve Run Club Logo" style={{ width: '200px', height: '200px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', border: '1px solid rgba(255,255,255,0.08)', display: 'block' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.15em', color: '#fff', marginBottom: '0.25rem' }}>VERVE</div>
              <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>KIIT University · Bhubaneswar</div>
            </div>
          </div>
          <div>
            <div className="mag-rule" />
            <div className="eyebrow">The Origin</div>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9, marginBottom: '2rem' }}>
              BUILT WITH<br /><span style={{ color: 'var(--red)' }}>INTENTION</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['Verve started with almost nothing — just the will to start, a pair of shoes, and a small group of people who wanted to explore running together.',
                'The problem was simple but real: running events in India are expensive and rarely student-friendly. Entry fees, commercial sponsors, and polished branding — none of it was built for us.',
                'So instead of waiting for access, we built our own space. A free running platform. A free community. We provide water, Tata Gluco, and bananas whenever possible — funded by sponsorships when we can get them, and from our own pockets when we can\'t.',
                'We do it willingly. For one reason: to change your perspective on running.'
              ].map((para, i) => (
                <p key={i} style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.85 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--black)', padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div className="mag-rule" />
          <div className="eyebrow">The Mission</div>
          <blockquote style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.15, color: '#fff', borderLeft: '4px solid var(--red)', paddingLeft: '2.5rem', marginBottom: '3rem' }}>
            "Verve is about embracing the pain, the discipline, the struggle, and the glory that running offers. It's about growth — physical, mental, and emotional."
          </blockquote>
          <div style={{ background: 'var(--red)', padding: '2.5rem 3rem', display: 'inline-block', marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '0.05em', color: '#fff', lineHeight: 1 }}>STANDARDISED FREE RUNNING</div>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.75rem', fontSize: '0.92rem', lineHeight: 1.7 }}>Our vision. Running that is accessible, structured, and free — for every student at KIIT, regardless of pace, experience, or background.</p>
          </div>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, maxWidth: '680px' }}>
            We are not a commercial run club. We don't charge fees for a 3K followed by an overpriced coffee. Verve is something real — built on the belief that running is a right, not a privilege.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--charcoal)', padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="mag-rule" />
          <div className="eyebrow" style={{ marginBottom: '3rem' }}>What We Believe</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '01', title: 'Running heals', text: 'Running has a way of finding you when you need it most. It builds discipline, clears the mind, and gives structure when everything feels chaotic. That\'s where Verve began.' },
              { num: '02', title: 'Community over competition', text: 'We don\'t care about your pace. We care that you showed up. A strong community is not built by a few people at the front — it\'s built by everyone who cares enough to contribute.' },
              { num: '03', title: 'Free. Always.', text: 'No membership fees. No event fees. This is non-negotiable. Verve was built so that any student at KIIT — regardless of budget — can be a runner.' },
            ].map((v, i) => (
              <div key={v.num} style={{ padding: '2.5rem', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', borderTop: '2px solid transparent', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderTopColor = 'var(--red)'}
                onMouseLeave={e => e.currentTarget.style.borderTopColor = 'transparent'}
              >
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '3.5rem', color: 'rgba(255,255,255,0.05)', lineHeight: 1, marginBottom: '1.25rem' }}>{v.num}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.75rem' }}>{v.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--black)', padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="mag-rule" />
          <div className="eyebrow" style={{ marginBottom: '3rem' }}>The Community</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '4rem' }}>
            {[{ num: '100+', label: 'Active Runners' }, { num: 'Free', label: 'Forever & Always' }, { num: '#1', label: 'Run Club at KIIT' }, { num: '2025', label: 'Founded' }].map((s) => (
              <div key={s.label} style={{ background: 'var(--black)', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '3.5rem', color: '#fff', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, maxWidth: '680px', borderLeft: '2px solid var(--red)', paddingLeft: '2rem', fontStyle: 'italic' }}>
            "Verve was never meant to be rigid or closed. It's a growing space, and growth comes from collective input. If you believe something can be improved — we are always open to hearing you out."
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--red)', padding: '5rem 3rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.9, color: '#fff', marginBottom: '1.5rem' }}>VERVE FOR ALL.<br />ALL FOR VERVE.</h2>
        <Link href="/join" style={{ background: '#fff', color: 'var(--red)', fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1rem 3rem', textDecoration: 'none', display: 'inline-block', fontWeight: 700 }}>
          Join the Community
        </Link>
      </section>
    </>
  )
}
