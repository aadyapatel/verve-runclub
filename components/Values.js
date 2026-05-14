'use client'
import { useEffect, useRef } from 'react'

const values = [
  { num: '01', title: 'Inclusive by Design', text: 'Fast, slow, beginner, veteran — every pace is welcome. No timers. No judgement. The road belongs to everyone.' },
  { num: '02', title: 'Community First', text: 'We run together, struggle together, celebrate together. The friendships at 6am on a Sunday are the ones that last.' },
  { num: '03', title: 'Always Free', text: 'Zero fees. Zero barriers. Verve believes running is a right, not a privilege. Show up in whatever shoes you have.' },
]

export default function Values() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background: 'var(--black)', padding: '8rem 3rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem', alignItems: 'end' }}>
          <div className="reveal">
            <div className="mag-rule" />
            <div className="eyebrow">Our Principles</div>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.88 }}>
              WHAT<br />DRIVES US
            </h2>
          </div>
          <p className="reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.38)', lineHeight: 1.85, fontSize: '0.95rem', fontStyle: 'italic' }}>
            Three things that make Verve more than just a run club. They make it a movement.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
          {values.map((v, i) => (
            <div key={v.num} className={`reveal reveal-delay-${i}`}
              style={{ background: 'var(--black)', padding: '2.5rem', borderTop: i === 0 ? '2px solid var(--red)' : '2px solid transparent', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderTopColor = 'var(--red)'}
              onMouseLeave={e => e.currentTarget.style.borderTopColor = i === 0 ? 'var(--red)' : 'transparent'}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, marginBottom: '1.5rem' }}>{v.num}</div>
              <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.75rem' }}>{v.title}</div>
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.87rem', lineHeight: 1.8 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
