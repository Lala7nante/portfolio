const timeline = [
  { year: '2024 – 2026', title: 'Licence Informatique L1 → L3', sub: 'ÉMIT Fianarantsoa · Parcours: Développement d\'Application Internet/Intranet DA2I', current: true },
  { year: '2023',        title: 'Baccalauréat (BACC)',           sub: 'Institution Marthe Hervée Antsirabe, Madagascar' },
  { year: '2018',        title: 'BEPC',                          sub: 'Les Poussins Antsirabe, Madagascar' },
  { year: '2014',        title: 'CEPE',                          sub: 'Les Poussins Antsirabe, Madagascar' },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-dm text-[#5bafd6] text-sm">02.</span>
          <h2 className="font-syne font-bold text-3xl text-white">Formation</h2>
          <div className="flex-1 h-px bg-[#5bafd6]/30"/>
        </div>

        <div className="relative pl-8 border-l-2 border-[#5bafd6]/30">
          {timeline.map((item, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              {/* Dot */}
              <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 ${
                item.current
                  ? 'bg-[#5bafd6] border-[#5bafd6] shadow-[0_0_12px_#5bafd6]'
                  : 'bg-transparent border-[#5bafd6]/50'
              }`}/>

              <div className="border rounded-xl p-5 transition-all"
                style={{
                  background: 'transparent',
                  border: item.current
                    ? '1px solid rgba(91,175,214,0.5)'
                    : '1px solid rgba(91,175,214,0.2)',
                  backdropFilter: 'blur(4px)',
                }}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-syne font-bold text-white text-base mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.sub}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-dm text-xs text-[#5bafd6] bg-[#5bafd6]/10 px-3 py-1 rounded-full border border-[#5bafd6]/20">
                      {item.year}
                    </span>
                    {item.current && (
                      <span className="font-mono-dm text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                        En cours
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}