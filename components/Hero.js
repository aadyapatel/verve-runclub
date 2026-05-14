'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease'
      el.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <section style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', background: 'var(--black)' }}>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--red)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 35%, rgba(200,24,28,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="grid-overlay" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'absolute', top: '50%', right: '2rem', transform: 'translateY(-50%)', fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', writingMode: 'vertical-rl' }}>
        KIIT University · Bhubaneswar · Est. 2024
      </div>

      <div style={{ position: 'absolute', bottom: '-6rem', right: '-2rem', fontFamily: 'var(--font-bebas)', fontSize: 'clamp(16rem, 38vw, 48rem)', color: 'rgba(255,255,255,0.015)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>01</div>

      <div ref={ref} style={{ position: 'relative', zIndex: 2, padding: '3rem 3rem 5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--red)', padding: '0.3rem 0.9rem', marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#fff', fontWeight: 700 }}>KIIT's Free Running Community</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(5rem, 15vw, 17rem)', lineHeight: 0.85, letterSpacing: '-0.01em', marginBottom: '3rem' }}>
          <span style={{ display: 'block', color: 'var(--off-white)' }}>RUN</span>
          <span style={{ display: 'block', color: 'var(--red)' }}>WITH</span>
          <span style={{ display: 'block', color: 'var(--off-white)' }}>VERVE</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
              Verve for all.&nbsp;&nbsp;<span style={{ color: 'rgba(200,24,28,0.65)' }}>All for Verve.</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75, maxWidth: '380px', marginBottom: '2rem', fontStyle: 'italic' }}>
              "The only run club in KIIT that puts the community before the coffee."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/join" className="btn-primary">Join Free</Link>
              <Link href="/runs" className="btn-ghost">
                See All Runs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', paddingBottom: '0.25rem' }}>
            {[{ n: '100+', l: 'Runners' }, { n: 'Free', l: 'Forever' }, { n: '#1', l: 'At KIIT' }].map(s => (
              <div key={s.l} style={{ borderLeft: '2px solid var(--red)', paddingLeft: '0.8rem' }}>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.2rem', lineHeight: 1, color: '#fff' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '0.2rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', zIndex: 4 }}>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--red), transparent)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        Scroll
      </div>
    </section>
  )
}
