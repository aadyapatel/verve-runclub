const members = [
  { initials: 'AK', name: 'Ananya K.', role: 'B.Tech CSE, 2nd Year', quote: 'I joined never having run more than 500m. Three months later I finished my first 5K. Verve made that possible.' },
  { initials: 'RS', name: 'Rohit S.', role: 'B.Tech EE, 3rd Year', quote: 'Sunday runs are the only reason I wake up before 8am. No regrets — ever.' },
  { initials: 'PM', name: 'Priya M.', role: 'B.Tech IT, 1st Year', quote: 'The Coffee Run 3K was my first ever race. The energy was something else. Verve is special.' },
  { initials: 'DG', name: 'Dev G.', role: 'B.Tech CE, 2nd Year', quote: 'No fees, no pressure, just running. This is exactly what college running should feel like.' },
  { initials: 'SK', name: 'Sneha K.', role: 'B.Tech ME, 3rd Year', quote: 'The founders fund this from their own pockets. That level of commitment is rare.' },
  { initials: 'VR', name: 'Vikram R.', role: 'B.Tech ECE, 2nd Year', quote: 'Running used to feel like punishment. Now it\'s my escape. That\'s what Verve did.' },
]

export default function Community() {
  const doubled = [...members, ...members]
  return (
    <section style={{ background: 'var(--charcoal)', padding: '8rem 0', overflow: 'hidden' }}>
      <div style={{ padding: '0 3rem', maxWidth: '1100px', margin: '0 auto 4rem' }}>
        <div className="mag-rule" />
        <div className="eyebrow">The Tribe</div>
        <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.88 }}>
          REAL RUNNERS.<br /><span style={{ color: 'var(--red)' }}>REAL STORIES.</span>
        </h2>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', animation: 'marquee 35s linear infinite', width: 'max-content', paddingLeft: '3rem' }}>
        {doubled.map((m, i) => (
          <div key={i} style={{ background: 'var(--black)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '2px solid var(--red)', padding: '1.75rem', width: '300px', flexShrink: 0 }}>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, marginBottom: '1.25rem', fontStyle: 'italic' }}>
              "{m.quote}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-bebas)', fontSize: '0.9rem', color: '#fff', flexShrink: 0 }}>{m.initials}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>{m.name}</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', marginTop: '1px' }}>{m.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
