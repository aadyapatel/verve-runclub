'use client'
import { useEffect, useRef } from 'react'

export default function FounderStory() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: 'var(--charcoal)',
        padding: '8rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost text */}
      <div
        style={{
          position: 'absolute',
          top: '-2rem',
          right: '-2rem',
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(8rem, 18vw, 16rem)',
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        STORY
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <div className="eyebrow">The Origin</div>
          <h2
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.9,
              marginBottom: '1rem',
            }}
          >
            WHY VERVE<br />
            <span style={{ color: 'var(--red)' }}>EXISTS</span>
          </h2>
        </div>

        {/* Founder quote block */}
        <div
          className="reveal reveal-delay-1"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '5rem',
            alignItems: 'start',
            marginBottom: '5rem',
          }}
        >
          {/* Left — founder card */}
          <div>
            <div
              style={{
                background: 'var(--mid)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '2rem',
                position: 'relative',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  background: 'var(--red)',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  color: '#fff',
                  marginBottom: '0.25rem',
                }}
              >
                Akshar
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginBottom: '1rem',
                }}
              >
                Founder, Verve Run Club
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                Co-founded alongside Tejas, Shayan & one more visionary — from a single pair of shoes and a will to start.
              </p>
            </div>

            {/* Co-founders */}
            {['Tejas', 'Shayan'].map((name) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-bebas)',
                    fontSize: '1rem',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {name[0]}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow-condensed)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#fff',
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>Co-founder</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — the actual story */}
          <div>
            {/* Big pull quote */}
            <blockquote
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                lineHeight: 1.2,
                color: '#fff',
                borderLeft: '3px solid var(--red)',
                paddingLeft: '2rem',
                marginBottom: '2.5rem',
              }}
            >
              "At one of the lowest points in my life, I discovered a deep sense of peace and stability through running."
            </blockquote>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                'Verve has one single purpose: to promote the art of running. When it began, there was almost nothing — just the will to start, a pair of shoes, and a friend who wanted to explore it.',
                'Running events are expensive and rarely student-friendly. So instead of waiting for access, we built our own space — Verve. A free running platform, a free community. We provide water, Tata Gluco, and bananas whenever possible.',
                'Sponsorships are not easy to secure. Until then, if we are unable to bring in sponsors — we contribute from our own pocket money to host these runs. And we do it willingly, for one reason: to change your perspective on running.',
                'We are not a commercial run club. Verve is about embracing the pain, the discipline, the struggle, and the glory that running offers. It\'s about growth — physical, mental, and emotional.',
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '0.97rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.85,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* What Verve stands for — bottom highlight */}
        <div
          className="reveal reveal-delay-2"
          style={{
            background: 'var(--red)',
            padding: '3rem 3.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '1rem',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '0.5rem',
              }}
            >
              THE MISSION
            </div>
            <div
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 0.95,
                color: '#fff',
              }}
            >
              STANDARDISED<br />FREE RUNNING
            </div>
          </div>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            "That is what Verve stands for." — Akshar, Founder. A strong community is not built by a few people at the front — it's built by everyone who shows up and cares enough to contribute.
          </p>
        </div>
      </div>
    </section>
  )
}
