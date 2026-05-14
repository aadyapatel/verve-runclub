'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/runs', label: 'Runs' },
    { href: '/collabs', label: 'Collabs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/join', label: 'Join' },
  ]

  return (
    <>
      {/* Top red rule */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: 'var(--red)', zIndex: 1001 }} />

      <nav style={{
        position: 'fixed', top: '3px', left: 0, right: 0,
        zIndex: 1000,
        padding: '1rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(8,8,8,0.98)' : 'rgba(8,8,8,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img
            src="/images/verve-logo.jpeg"
            alt="Verve Run Club"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              border: '2px solid rgba(255,255,255,0.15)',
            }}
          />
          <span style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '1.6rem',
            letterSpacing: '0.2em',
            color: '#fff',
            lineHeight: 1,
          }}>VERVE</span>
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '0', listStyle: 'none', alignItems: 'center' }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                textDecoration: 'none', padding: '0.4rem 1rem',
                color: pathname === l.href ? '#fff' : 'rgba(255,255,255,0.45)',
                borderBottom: pathname === l.href ? '1px solid var(--red)' : '1px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/join" className="btn-primary hidden md:inline-block" style={{ padding: '0.5rem 1.4rem', fontSize: '0.72rem' }}>
          Join Free
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px', background: '#fff',
              transition: 'all 0.3s ease',
              transform: menuOpen ? (i===0 ? 'translateY(6.5px) rotate(45deg)' : i===2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)') : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'var(--black)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
        padding: '3rem',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
        borderTop: '3px solid var(--red)',
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.5rem' }}>Navigation</div>
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        </div>
        {links.map((l, i) => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            letterSpacing: '0.05em',
            color: pathname === l.href ? 'var(--red)' : 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            lineHeight: 1.15,
            transition: 'color 0.2s',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
            transitionDelay: `${i * 0.05}s`,
          }}>
            {l.label}
          </Link>
        ))}
        <Link href="/join" className="btn-primary" style={{ marginTop: '2.5rem', opacity: menuOpen ? 1 : 0, transitionDelay: '0.3s' }}>
          Join Free
        </Link>
      </div>
    </>
  )
}
