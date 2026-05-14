'use client'

const photos = [
  { caption: 'Coffee Run 3K × Java Clinic', date: 'Mar 2025', type: 'Collab Run' },
  { caption: 'Last Man Standing', date: 'Oct 2025', type: 'Championship' },
  { caption: 'Run for Unity × KIIT NSS', date: 'Nov 2025', type: 'Community Run' },
  { caption: 'Sunday Run', date: 'Aug 2025', type: 'Sunday Run' },
  { caption: 'Ignition Run 2025', date: 'Aug 2025', type: 'Signature Event' },
  { caption: 'Miles & Munch', date: 'Aug 2025', type: 'Special Run' },
  { caption: 'Soleful Sunday', date: 'Aug 2025', type: 'Sunday Run' },
  { caption: 'Pace & Power × YFC Gym', date: 'Mar 2025', type: 'Collab Run' },
  { caption: 'Week 5 Run & Vibe', date: 'Aug 2025', type: 'Sunday Run' },
  { caption: 'Sunday Run', date: 'Feb 2026', type: 'Sunday Run' },
  { caption: 'Week 7 Sunday Run', date: 'Dec 2025', type: 'Sunday Run' },
  { caption: 'Sunday Run Week 12', date: 'Mar 2025', type: 'Sunday Run' },
]

const heights = [200, 160, 180, 200, 170, 190, 160, 200, 175, 185, 165, 180]

const accents = ['#C8181C', '#1a1a1a', '#111', '#0d0d0d', '#C8181C', '#111', '#1a1a1a', '#0d0d0d', '#111', '#C8181C', '#1a1a1a', '#111']

export default function Gallery() {
  return (
    <>
      <div style={{ background: 'var(--charcoal)', padding: '12rem 3rem 6rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--red)' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', fontFamily: 'var(--font-bebas)', fontSize: 'clamp(8rem, 22vw, 16rem)', color: 'rgba(255,255,255,0.025)', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>MILES</div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div className="mag-rule" />
          <div className="eyebrow">The Moments</div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.88, marginBottom: '1.5rem' }}>
            RUN<br /><span style={{ color: 'var(--red)' }}>CAPTURED</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.38)', maxWidth: '440px', lineHeight: 1.8, fontSize: '0.93rem', fontStyle: 'italic' }}>
            Every run leaves a memory. Follow us on Instagram for the full picture —{' '}
            <a href="https://www.instagram.com/verve.runclub" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', textDecoration: 'none' }}>@verve.runclub</a>
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: 'var(--red)', padding: '1.1rem 3rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {[{ n: '14+', l: 'Events' }, { n: '3', l: 'Collabs' }, { n: '100+', l: 'Runners' }, { n: '2025–26', l: 'Season' }].map(s => (
          <div key={s.l} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.5rem', color: '#fff', lineHeight: 1 }}>{s.n}</span>
            <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* Clean card grid — no photos */}
      <section style={{ background: 'var(--black)', padding: '4rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ columns: '3', columnGap: '4px' }}>
            {photos.map((photo, i) => (
              <div
                key={i}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '4px',
                  height: `${heights[i]}px`,
                  background: i % 5 === 0 ? 'var(--red)' : i % 3 === 0 ? '#1a1a1a' : 'var(--mid)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  borderTop: i % 5 !== 0 ? '2px solid rgba(255,255,255,0.04)' : 'none',
                  transition: 'background 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { if (i % 5 !== 0) e.currentTarget.style.background = '#282828' }}
                onMouseLeave={e => { if (i % 5 !== 0) e.currentTarget.style.background = i % 3 === 0 ? '#1a1a1a' : 'var(--mid)' }}
              >
                {/* Ghost run number */}
                <div style={{
                  position: 'absolute', top: '0.75rem', right: '1rem',
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '5rem',
                  color: i % 5 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Left red accent */}
                {i % 5 !== 0 && (
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '40px', background: 'var(--red)' }} />
                )}

                <div>
                  <div style={{
                    fontFamily: 'var(--font-barlow-condensed)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: i % 5 === 0 ? 'rgba(255,255,255,0.65)' : 'var(--red)',
                    marginBottom: '0.3rem',
                  }}>
                    {photo.type}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: '1.3rem',
                    color: '#fff',
                    lineHeight: 0.95,
                    marginBottom: '0.2rem',
                  }}>
                    {photo.caption}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-barlow-condensed)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: i % 5 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)',
                  }}>
                    {photo.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ color: 'rgba(255,255,255,0.28)', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              All run photos and videos live on our Instagram
            </p>
            <a href="https://www.instagram.com/verve.runclub" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Follow @verve.runclub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
