export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-dm text-[#5bafd6] text-sm">01.</span>
          <h2 className="font-syne font-bold text-3xl text-white">À propos</h2>
          <div className="flex-1 h-px bg-slate-800"/>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Je suis <span className="text-white font-medium">Onjalalaina Edmond RANDRIANANTENAINA</span>,
              étudiant en <span className="text-[#5bafd6]">L3 Informatique – Parcours Développement d'Application Internet et Intranet (DA2I)</span> à l'ÉMIT Fianarantsoa, Madagascar.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              <span className="text-white font-medium">Passionné par le Développement Web</span>, je conçois des applications
              full-stack performantes et des interfaces soignées. Curieux et déterminé, je cherche constamment
              à progresser et relever de nouveaux défis techniques.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Né le <span className="text-white">17 Avril 2004</span> à <span className="text-white">Vohimarina</span>, Madagascar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['nantelala08@gmail.com','038 781 5005','033 302 3609'].map(item => (
                <span key={item} className="font-mono-dm text-xs px-3 py-1.5 border border-slate-700 text-slate-400 rounded-md">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: 'L3',    label: 'Niveau actuel',      color: 'text-[#5bafd6]' },
              { num: '2+',    label: 'Ans de pratique',    color: 'text-[#5bafd6]' },
              { num: '10+',   label: 'Technologies',       color: 'text-[#5bafd6]' },
              { num: '3',     label: 'Langues parlées',    color: 'text-[#5bafd6]' },
            ].map(s => (
              <div key={s.label} className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 hover:border-[#5bafd6]/30 transition-colors">
                <div className={`font-syne font-bold text-3xl ${s.color} mb-1`}>{s.num}</div>
                <div className="font-mono-dm text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
