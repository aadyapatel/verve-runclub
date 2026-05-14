'use client'
import Link from 'next/link'

const WHATSAPP_LINK = 'https://chat.whatsapp.com/HaZS9FNRkvp6vwc2pfwvMg'
const INSTAGRAM_LINK = 'https://www.instagram.com/verve.runclub'

export default function Join() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          background: 'var(--black)',
          padding: '12rem 3rem 7rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 60%, rgba(200,24,28,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(8rem, 25vw, 20rem)',
            color: 'rgba(255,255,255,0.022)',
            userSelect: 'none', pointerEvents: 'none', lineHeight: 1, whiteSpace: 'nowrap',
          }}
        >
          JOIN
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <img
            src="/images/verve-logo.jpeg"
            alt="Verve"
            style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center', marginBottom: '2rem', display: 'block', margin: '0 auto 2rem' }}
          />
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span>Open to All</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(4rem, 14vw, 11rem)',
              lineHeight: 0.88,
              marginBottom: '2rem',
            }}
          >
            JOIN<br />
            <span style={{ color: 'var(--red)' }}>VERVE</span>
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.85,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            No fees. No signup forms. No prerequisites. Just tap the button below, join the WhatsApp community, and show up for the next run.
          </p>
        </div>
      </div>

      {/* Main join options */}
      <section style={{ background: 'var(--charcoal)', padding: '6rem 3rem' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {/* WhatsApp */}
          <div
            style={{
              background: 'var(--charcoal)',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
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
                Step 1 — Recommended
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '2.5rem',
                  lineHeight: 0.95,
                  color: '#fff',
                  marginBottom: '1rem',
                }}
              >
                JOIN THE<br />WHATSAPP<br />COMMUNITY
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>
                This is where all run announcements, meet-up points, and Verve updates happen. Join the community and you'll never miss a run.
              </p>
            </div>
            <div>
              {[
                'Run schedules every week',
                'Exact meet-up location & time',
                'Post-run plans & updates',
                'Direct line to the Verve team',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--red)', fontSize: '0.75rem' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#fff',
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: '0.9rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1.1rem 2rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                transition: 'opacity 0.2s',
                fontWeight: 700,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join WhatsApp Community
            </Link>
          </div>

          {/* Instagram */}
          <div
            style={{
              background: 'var(--charcoal)',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '0.75rem',
                }}
              >
                Step 2 — Stay Updated
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '2.5rem',
                  lineHeight: 0.95,
                  color: '#fff',
                  marginBottom: '1rem',
                }}
              >
                FOLLOW ON<br />INSTAGRAM
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>
                All run photos, event announcements, collabs, and Verve moments live on our Instagram. Follow for the full picture.
              </p>
            </div>
            <div>
              {[
                'Run photos & recaps',
                'Collab announcements',
                'Community highlights',
                'Behind the scenes',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
            <Link
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--mid)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: '0.9rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1.1rem 2rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                transition: 'background 0.2s',
                fontWeight: 700,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              @verve.runclub
            </Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ background: 'var(--black)', padding: '6rem 3rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: '2.5rem' }}>What to Expect</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {[
              { icon: '🏃', title: 'All paces welcome', text: 'Whether you run 5 min/km or 10 min/km — every pace has a place at Verve. We don\'t time, we don\'t judge.' },
              { icon: '💧', title: 'We\'ve got you covered', text: 'Water, Tata Gluco, and bananas provided at runs whenever possible. You just need to show up.' },
              { icon: '₹0', title: 'Completely free', text: 'No membership fee. No event fee. No hidden costs. Verve is funded by sponsorships and the team\'s own pockets.' },
              { icon: '📍', title: 'Campus 3, KIIT', text: 'Most runs start from Campus 3. The WhatsApp group will tell you the exact meet-up point before each run.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--black)', padding: '2.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
