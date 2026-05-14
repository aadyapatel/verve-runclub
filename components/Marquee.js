const items = [
  { text: 'Run With Verve', accent: false },
  { text: '✦', accent: true },
  { text: 'KIIT University', accent: false },
  { text: '✦', accent: true },
  { text: 'Free Forever', accent: false },
  { text: '✦', accent: true },
  { text: 'Sunday Runs', accent: false },
  { text: '✦', accent: true },
  { text: 'Coffee Run 3K', accent: false },
  { text: '✦', accent: true },
  { text: '100+ Runners', accent: false },
  { text: '✦', accent: true },
  { text: 'Verve for All', accent: false },
  { text: '✦', accent: true },
  { text: 'All for Verve', accent: false },
  { text: '✦', accent: true },
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'var(--red)',
      overflow: 'hidden',
      padding: '0.7rem 0',
    }}>
      <div style={{
        display: 'flex', whiteSpace: 'nowrap',
        animation: 'marquee 22s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-barlow-condensed)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: item.accent ? 'rgba(255,255,255,0.5)' : '#fff',
            fontWeight: item.accent ? 400 : 700,
            padding: '0 1.8rem',
            flexShrink: 0,
          }}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
