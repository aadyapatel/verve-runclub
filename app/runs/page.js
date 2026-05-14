'use client'
import { runs } from '@/data/runs'
import Link from 'next/link'

export default function RunsPage() {
  const upcoming = runs.filter((r) => r.status === 'upcoming')
  const past = runs.filter((r) => r.status === 'past')

  return (
    <>
      <div style={{ background: 'var(--charcoal)', padding: '12rem 3rem 6rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', fontFamily: 'var(--font-bebas)', fontSize: 'clamp(8rem, 22vw, 16rem)', color: 'rgba(255,255,255,0.025)', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>RUN</div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div className="eyebrow">Get Moving</div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.9, marginBottom: '1.5rem' }}>
            ALL<br /><span style={{ color: 'var(--red)' }}>RUNS</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', lineHeight: 1.8, fontSize: '0.97rem' }}>
            Every run is free. Every pace is welcome. Follow{' '}
            <Link href="https://www.instagram.com/verve.runclub" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', textDecoration: 'none' }}>@verve.runclub</Link>{' '}
            for the latest meet-up details.
          </p>
        </div>
      </div>

      {upcoming.length > 0 && (
        <section style={{ background: 'var(--black)', padding: '6rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: '2.5rem' }}>Coming Up</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
              {upcoming.map((r) => (
                <div key={r.id} style={{ background: 'var(--mid)', padding: '2.5rem', position: 'relative' }}>
                  {r.collab && <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', background: 'var(--red)', color: '#fff', padding: '0.28rem 0.75rem' }}>× {r.collab}</div>}
                  <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem' }}>{r.type}</div>
                  <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 0.9, marginBottom: '1.25rem' }}>{r.name}</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    {[{ icon: '📅', val: r.date }, { icon: '🕐', val: r.time }, { icon: '📍', val: r.location }].map((m) => (
                      <span key={m.val} style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.78rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>{m.icon} {m.val}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{r.description}</p>
                  <Link href="/join" className="btn-ghost" style={{ fontSize: '0.78rem' }}>Join This Run →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: upcoming.length > 0 ? 'var(--charcoal)' : 'var(--black)', padding: '6rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: '2.5rem' }}>Past Runs</div>
          {past.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.3)' }}>Past runs will appear here.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
              {past.map((r) => (
                <div key={r.id} style={{ background: 'var(--charcoal)', padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '2rem', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.4rem' }}>{r.type}{r.collab ? ` × ${r.collab}` : ''}</div>
                    <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', color: '#fff', lineHeight: 1 }}>{r.name}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    {[{ label: 'Date', val: r.date }, { label: 'Distance', val: r.distance }, { label: 'Location', val: r.location }, r.participants && { label: 'Runners', val: r.participants }].filter(Boolean).map((m) => (
                      <div key={m.label}>
                        <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.2rem' }}>{m.label}</div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>{m.val}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={r.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.72rem', whiteSpace: 'nowrap' }}>Photos →</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
