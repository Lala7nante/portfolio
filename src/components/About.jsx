import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-dm text-[#5bafd6] text-sm">01.</span>
          <h2 className="font-syne font-bold text-3xl text-white">À propos</h2>
          <div className="flex-1 h-px bg-[#5bafd6]/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Card */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center gap-6 transition-all"
            style={{
              border: '1px solid rgba(91,175,214,0.25)',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.border =
                '1px solid rgba(91,175,214,0.55)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.border =
                '1px solid rgba(91,175,214,0.25)')
            }
          >

            {/* Image FIXED */}
            <div
              className="w-full overflow-hidden rounded-xl relative flex items-center justify-center bg-black"
              style={{
                border: '1px solid rgba(91,175,214,0.3)',
                boxShadow: '0 0 20px rgba(91,175,214,0.15)',
                height: '350px',
              }}
            >
              <img
                src="/lala.png"
                alt="Lalà Nanté"
                className="w-full h-full object-contain"
              />

              {/* Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                }}
              />

              {/* Badge */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono-dm"
                  style={{
                    background: 'rgba(91,175,214,0.15)',
                    border: '1px solid rgba(91,175,214,0.4)',
                    color: '#5bafd6',
                    backdropFilter: 'blur(8px)',
                    letterSpacing: '0.12em',
                  }}
                >
                  DÉVELOPPEUR WEB
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <h3 className="font-syne font-bold text-white text-xl">
                Lalà Nanté
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { num: 'L3', label: 'Niveau actuel' },
                { num: '2+', label: 'Ans de pratique' },
                { num: '10+', label: 'Technologies' },
                { num: '3', label: 'Langues parlées' },
              ].map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center transition-all hover:scale-105"
                  style={{
                    border: '1px solid rgba(91,175,214,0.2)',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.border =
                      '1px solid rgba(91,175,214,0.5)')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.border =
                      '1px solid rgba(91,175,214,0.2)')
                  }
                >
                  <div
                    className="font-syne font-bold text-2xl mb-1"
                    style={{
                      color: '#5bafd6',
                      textShadow: '0 0 12px rgba(91,175,214,0.5)',
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="font-mono-dm text-xs text-slate-500 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Texte */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-slate-400 leading-relaxed">
              Je suis{' '}
              <span className="text-white font-medium">
                Onjalalaina Edmond RANDRIANANTENAINA
              </span>
              , étudiant en{' '}
              <span className="text-[#5bafd6]">
                Troisième année de Licence en Informatique – Parcours
                Développement d'Application Internet & Intranet (DA2I)
              </span>{' '}
              à l'ÉMIT Fianarantsoa, Madagascar.
            </p>

            <p className="text-slate-400 leading-relaxed">
              <span className="text-white font-medium">
                Passionné par le Développement Web
              </span>
              , je conçois des applications full-stack performantes et des
              interfaces modernes. Curieux et déterminé, je cherche constamment
              à progresser.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Né le <span className="text-white">17 Avril 2004</span> à{' '}
              <span className="text-white">Vohimarina</span>, FANDRIANA.
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                'React',
                'Node.js',
                'Laravel',
                'MySQL',
                'Tailwind CSS',
                'Git',
              ].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono-dm"
                  style={{
                    border: '1px solid rgba(91,175,214,0.25)',
                    color: '#5bafd6',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}