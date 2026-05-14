import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/runs', label: 'Runs' },
  { href: '/collabs', label: 'Collabs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/join', label: 'Join' },
  { href: 'https://www.instagram.com/verve.runclub', label: 'Instagram', external: true },
  { href: 'https://chat.whatsapp.com/HaZS9FNRkvp6vwc2pfwvMg', label: 'WhatsApp', external: true },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', borderTop: '3px solid var(--red)' }}>
      <style>{`
        .footer-link { color: rgba(255,255,255,0.28); transition: color 0.2s; font-family: var(--font-barlow-condensed); font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; text-decoration: none; }
        .footer-link:hover { color: var(--red); }
      `}</style>

      {/* Top section */}
      <div style={{ padding: '4rem 3rem 3rem', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/images/verve-logo.jpeg" alt="Verve" style={{ width: '46px', height: '46px', borderRadius: '8px', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.15em', color: '#fff' }}>VERVE</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.28)', lineHeight: 1.8, maxWidth: '280px', fontStyle: 'italic' }}>
            Free running community at KIIT University. Verve for all. All for Verve.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.25rem' }}>Pages</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.75rem 2rem' }}>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '1.5rem 3rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.08em' }}>© 2025 Verve Run Club · KIIT University · Bhubaneswar, Odisha</p>
        <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>Standardised Free Running</p>
      </div>
    </footer>
  )
}
