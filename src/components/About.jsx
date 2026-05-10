import React, { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { num: 'L3', label: 'Niveau actuel', icon: '🎓' },
    { num: '2+', label: 'Ans de pratique', icon: '⏱' },
    { num: '10+', label: 'Technologies', icon: '⚡' },
    { num: '3', label: 'Langues parlées', icon: '🌍' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute top-10 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,175,214,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,175,214,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* ── Title — même style que Formation.jsx ── */}
        <div
          className="flex items-center gap-4 mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <span className="font-mono text-[#5bafd6] text-sm">01.</span>
          <h2
            className="font-bold text-3xl text-white"
            style={{ fontFamily: 'inherit' }}
          >
            À propos
          </h2>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, rgba(91,175,214,0.35), transparent)' }}
          />
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT: Photo ── */}
          <div
            className="lg:col-span-4 relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
            }}
          >
            {/* Badge */}
            <div
              className="absolute -top-4 -left-4 z-10 px-3 py-1.5 rounded-lg text-xs font-mono tracking-widest uppercase"
              style={{
                background: 'rgba(10,15,25,0.9)',
                border: '1px solid rgba(91,175,214,0.5)',
                color: '#5bafd6',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 0 20px rgba(91,175,214,0.15)',
              }}
            >
              Développeur Web
            </div>

            {/* Photo frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1.5px solid rgba(0,255,255,0.45)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 32px rgba(0,255,255,0.1)',
              }}
            >
              <img
                src="/lala.png"
                alt="Lalà Nanté"
                className="w-full object-cover"
                style={{ height: '420px', objectPosition: 'top' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(5,10,20,0.85) 0%, rgba(5,10,20,0.1) 50%, transparent 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-mono text-[#5bafd6] text-xs tracking-widest uppercase mb-1">Portfolio</p>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Lalà Nanté
                </h3>
              </div>
            </div>

            {/* Corner accent */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 pointer-events-none"
              style={{
                borderRight: '2px solid rgba(0,255,255,0.35)',
                borderBottom: '2px solid rgba(0,255,255,0.35)',
                borderRadius: '0 0 8px 0',
              }}
            />
          </div>

          {/* ── RIGHT: Text + Stats ── */}
          <div
            className="lg:col-span-8 flex flex-col gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s',
            }}
          >
            {/* Headline */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
              >
                Étudiant &amp; <br />
                <span style={{ color: '#5bafd6' }}>
                  Développeur passionné
                </span>
              </h2>
              <div className="w-12 h-0.5" style={{ background: '#5bafd6' }} />
            </div>

            {/* Bio — nouveau paragraphe */}
            <div className="space-y-4">
              <p
                className="text-slate-200 leading-relaxed"
                style={{ fontFamily: 'sans-serif', fontSize: '16px', lineHeight: '1.8' }}
              >
                Je suis{' '}
                <span className="text-white font-semibold">
                  Onjalalaina Edmond RANDRIANANTENAINA
                </span>
                , étudiant en{' '}
                <span className="text-[#5bafd6]">
                  troisième année de Licence en Informatique
                </span>{' '}
                à l'ÉMIT Fianarantsoa, parcours{' '}
                <span className="text-[#5bafd6]">
                  DA2I (Développement d'Applications Internet et Intranet)
                </span>.
              </p>
              <p
                className="text-slate-300 leading-relaxed"
                style={{ fontFamily: 'sans-serif', fontSize: '16px', lineHeight: '1.8' }}
              >
                Passionné par le développement web, je conçois des applications
                performantes et des interfaces modernes, en alliant technique,
                créativité et expérience utilisateur. Curieux et déterminé,
                je m'engage à évoluer constamment pour relever des défis et
                créer des solutions innovantes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="relative rounded-xl p-4 text-center cursor-default"
                  style={{
                    background: 'rgba(91,175,214,0.04)',
                    border: '1px solid rgba(91,175,214,0.15)',
                    transition: 'all 0.3s ease',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(15px)',
                    transitionDelay: `${0.4 + i * 0.08}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(91,175,214,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(91,175,214,0.45)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(91,175,214,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(91,175,214,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(91,175,214,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="text-lg mb-1">{s.icon}</div>
                  <div
                    className="font-bold text-2xl mb-0.5"
                    style={{
                      color: '#5bafd6',
                      textShadow: '0 0 16px rgba(91,175,214,0.4)',
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-wider leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer divider */}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-px flex-1" style={{ background: 'rgba(91,175,214,0.15)' }} />
              <span className="font-mono text-xs text-slate-600 tracking-widest uppercase">
                ÉMIT · Fianarantsoa · Madagascar
              </span>
              <div className="h-px flex-1" style={{ background: 'rgba(91,175,214,0.15)' }} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}