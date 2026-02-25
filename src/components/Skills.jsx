const groups = [
  {
    title: 'Frontend', icon: '⚡',
    skills: [
      { name: 'HTML',       pct: 85 },
      { name: 'CSS',        pct: 75 },
      { name: 'JavaScript', pct: 65 },
      { name: 'React',      pct: 60 },
    ],
    tags: ['Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend & BDD', icon: '🔧',
    skills: [
      { name: 'MySQL',         pct: 90 },
      { name: 'Node + Express',pct: 75 },
      { name: 'PHP',           pct: 70 },
      { name: 'PostgreSQL',    pct: 70 },
      { name: 'Python',        pct: 50 },
    ],
    tags: ['API REST'],
  },
  {
    title: 'POO', icon: '🧩',
    skills: [
      { name: 'C#',   pct: 70 },
      { name: 'Java', pct: 50 },
      { name: 'C++',  pct: 50 },
    ],
    tags: [],
  },
  {
    title: 'Développement', icon: '🌐',
    items: [
      { label: 'Web',          status: 'Opérationnel', color: 'emerald' },
      { label: 'Design UI/UX', status: 'Opérationnel', color: 'emerald' },
      { label: 'Desktop',      status: 'Bases acquises',color: 'yellow'  },
      { label: 'Mobile',       status: 'En cours',      color: 'blue'    },
      { label: 'Réseaux Cisco',status: 'En cours',      color: 'blue'    },
    ],
  },
]

const colorMap = {
  emerald: 'bg-emerald-400/10 text-emerald-400',
  yellow:  'bg-yellow-400/10  text-yellow-400',
  blue:    'bg-blue-400/10    text-blue-400',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-dm text-[#5bafd6] text-sm">03.</span>
          <h2 className="font-syne font-bold text-3xl text-white">Compétences</h2>
          <div className="flex-1 h-px bg-slate-800"/>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map(g => (
            <div key={g.title} className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 hover:border-[#5bafd6]/30 transition-all">
              <div className="font-mono-dm text-xs text-[#5bafd6] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span>{g.icon}</span> {g.title}
              </div>

              {/* Bars */}
              {g.skills?.map(s => (
                <div key={s.name} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-xs">{s.name}</span>
                    <span className="font-mono-dm text-xs text-[#5bafd6]">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#5bafd6] to-[#1a6fa0] rounded-full"
                      style={{ width: `${s.pct}%` }}/>
                  </div>
                </div>
              ))}

              {/* Tags */}
              {g.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {g.tags.map(t => (
                    <span key={t} className="font-mono-dm text-xs px-2 py-1 bg-[#5bafd6]/10 text-[#5bafd6] rounded-md border border-[#5bafd6]/20">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Status items */}
              {g.items?.map(item => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-800/50 last:border-0">
                  <span className="text-slate-300 text-sm">{item.label}</span>
                  <span className={`font-mono-dm text-xs px-2 py-0.5 rounded-full ${colorMap[item.color]}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* OS */}
        <div className="mt-5 bg-[#0d1117] border border-slate-800 rounded-xl p-5">
          <div className="font-mono-dm text-xs text-[#5bafd6] uppercase tracking-widest mb-3">🖥️ Environnements & OS</div>
          <div className="flex flex-wrap gap-2">
            {['🐧 Linux Mint 22 Cinnamon', '🪟 Windows', '🌐 Cisco Packet Tracer'].map(os => (
              <span key={os} className="font-mono-dm text-xs px-3 py-1.5 border border-slate-700 text-slate-400 rounded-md">
                {os}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
