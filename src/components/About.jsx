export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-dm text-[#5bafd6] text-sm">01.</span>
          <h2 className="font-syne font-bold text-3xl text-white">À propos</h2>
          <div className="flex-1 h-px bg-slate-800"/>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Card Photo + Stats */}
          <div className="bg-[#0d1117] border border-slate-800 rounded-2xl p-8 flex flex-col items-center gap-6 hover:border-[#5bafd6]/30 transition-colors">
            {/* Cercle photo */}
            <div className="relative w-56 h-56">
              {/* Border mihodina */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_20px_#5bafd6,0_0_40px_#5bafd6aa]"
                style={{
                  background: 'conic-gradient(from 0deg, #5bafd6, transparent 60%, #5bafd6)',
                  borderRadius: '50%',
                  animation: 'spin 3s linear infinite',
                  padding: '2px',
                }}
              />
              {/* Cache intérieur */}
              <div className="absolute inset-[3px] rounded-full bg-[#0d1117]"/>
              {/* Photo */}
              <img
                src="/lala.png"
                alt="Lalà Nanté"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
              />
            </div>
            {/* Nom */}
            <div className="text-center">
              <h3 className="font-syne font-bold text-white text-xl">Lalà Nanté</h3>
              <p className="font-mono-dm text-[#5bafd6] text-xs tracking-widest uppercase mt-1">Développeur Full Stack</p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { num: 'L3',  label: 'Niveau actuel'   },
                { num: '2+',  label: 'Ans de pratique' },
                { num: '10+', label: 'Technologies'    },
                { num: '3',   label: 'Langues parlées' },
              ].map(s => (
                <div key={s.label} className="bg-[#080b12] border border-slate-800 rounded-xl p-4 hover:border-[#5bafd6]/30 transition-colors text-center">
                  <div className="font-syne font-bold text-2xl text-[#5bafd6] mb-1">{s.num}</div>
                  <div className="font-mono-dm text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Texte */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-slate-400 leading-relaxed">
              Je suis <span className="text-white font-medium">Onjalalaina Edmond RANDRIANANTENAINA</span>,
              étudiant en <span className="text-[#5bafd6]">Trosième année de Licence en Informatique – Parcours Développement d'Appication Internet & Intranet (DA2I)</span> à l'ÉMIT Fianarantsoa (Ecole Management pour l'Innovation Technologique), Madagascar.
            </p>
            <p className="text-slate-400 leading-relaxed">
              <span className="text-white font-medium">Passionné par le Développement Web</span>, je conçois des applications
              full-stack performantes et des interfaces soignées. Curieux et déterminé, je cherche constamment
              à progresser et relever de nouveaux défis techniques.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Né le <span className="text-white">17 Avril 2004</span> à <span className="text-white">Vohimarina</span>, Madagascar.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}