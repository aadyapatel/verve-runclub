'use client'
import { collabs } from '@/data/collabs'
import Link from 'next/link'

export default function Collabs() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          background: 'var(--charcoal)',
          padding: '12rem 3rem 6rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', top: '50%', right: '-1rem',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(8rem, 22vw, 16rem)',
            color: 'rgba(255,255,255,0.025)',
            userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
          }}
        >
          COLLAB
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div className="eyebrow">Partnerships</div>
          <h1
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              lineHeight: 0.9,
              marginBottom: '1.5rem',
            }}
          >
            OUR<br />
            <span style={{ color: 'var(--red)' }}>COLLABS</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', lineHeight: 1.8, fontSize: '0.97rem' }}>
            We don't partner for the sake of it. Every collab is built around one goal — giving our runners a better experience. These are the brands and spaces that share that vision.
          </p>
        </div>
      </div>

      {/* Collabs grid */}
      <section style={{ background: 'var(--black)', padding: '6rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {collabs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 0', color: 'rgba(255,255,255,0.3)' }}>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '3rem', marginBottom: '1rem' }}>Coming Soon</div>
              <p>Collabs will appear here as they happen.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
              {collabs.map((c, i) => (
                <div
                  key={c.id}
                  style={{
                    background: 'var(--black)',
                    padding: '3rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '4rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Left */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-barlow-condensed)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--red)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {c.type}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: 0.9,
                        color: '#fff',
                        marginBottom: '1rem',
                      }}
                    >
                      {c.partner}
                    </div>
                    <div
                      style={{
                        display: 'flex', flexDirection: 'column', gap: '0.5rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {[
                        { label: 'Event', val: c.event },
                        { label: 'Date', val: c.date },
                        { label: 'Location', val: c.location },
                        { label: 'Distance', val: c.distance },
                        c.participants && { label: 'Runners', val: c.participants },
                      ].filter(Boolean).map((m) => (
                        <div key={m.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-barlow-condensed)',
                              fontSize: '0.68rem',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.3)',
                              minWidth: '70px',
                            }}
                          >
                            {m.label}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{m.val}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={c.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: '0.75rem' }}
                    >
                      View on Instagram →
                    </Link>
                  </div>

                  {/* Right */}
                  <div>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.85,
                        borderLeft: '2px solid var(--red)',
                        paddingLeft: '1.5rem',
                      }}
                    >
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Want to collab CTA */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: '6rem 3rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span>Work With Us</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 0.9,
            marginBottom: '1.5rem',
          }}
        >
          WANT TO<br />
          <span style={{ color: 'var(--red)' }}>COLLAB?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '2.5rem', maxWidth: '440px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          We're always looking for brands, cafes, and spaces that genuinely care about the running community. Reach out on Instagram.
        </p>
        <Link
          href="https://www.instagram.com/verve.runclub"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          DM @verve.runclub
        </Link>
      </section>
    </>
  )
}
