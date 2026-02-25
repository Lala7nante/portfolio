import { useEffect, useState } from 'react'

const roles = ['Développeur Web', 'Développeur Full Stack', 'UI/UX Designer', 'Étudiant L3 DA2I']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIdx]
    let i = typing ? displayed.length : displayed.length - 1
    const timer = setTimeout(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1))
        if (i + 1 === role.length) setTimeout(() => setTyping(false), 1500)
      } else {
        setDisplayed(role.slice(0, i))
        if (i === 0) { setRoleIdx((roleIdx + 1) % roles.length); setTyping(true) }
      }
    }, typing ? 80 : 40)
    return () => clearTimeout(timer)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5bafd6]/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#3d8fb5]/5 rounded-full blur-3xl"/>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage:'linear-gradient(#5bafd6 1px,transparent 1px),linear-gradient(90deg,#5bafd6 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>
      </div>

      <div className="relative z-10 text-center px-6 animate-fadeUp">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#5bafd6]/30 rounded-full bg-[#5bafd6]/5">
          <span className="w-2 h-2 rounded-full bg-[#5bafd6] animate-pulse"/>
          <span className="font-mono-dm text-xs text-[#5bafd6] tracking-widest uppercase">Disponible pour stage / projet</span>
        </div>

        {/* Name */}
        <h1 className="font-syne font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
          Lalà<br/>
          <span className="text-[#5bafd6]">Nanté</span>
        </h1>

        {/* Typing role */}
        <div className="font-mono-dm text-xl md:text-2xl text-slate-300 mb-8 h-8 flex items-center justify-center gap-1">
          <span className="text-[#5bafd6]">&gt;</span>
          <span>{displayed}</span>
          <span className="cursor-blink text-[#5bafd6]">|</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects"
            className="px-6 py-3 bg-[#5bafd6] text-[#080b12] font-syne font-bold text-sm rounded-lg hover:bg-[#3d8fb5] transition-all hover:scale-105">
            Voir mes projets
          </a>
          <a href="#contact"
            className="px-6 py-3 border border-[#5bafd6]/40 text-[#5bafd6] font-syne font-bold text-sm rounded-lg hover:border-[#5bafd6] hover:bg-[#5bafd6]/5 transition-all">
            Me contacter
          </a>
          <a href="/cv.pdf" target="_blank"
            className="px-6 py-3 border border-slate-700 text-slate-400 font-syne font-bold text-sm rounded-lg hover:border-slate-500 hover:text-white transition-all">
            ↓ Télécharger CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-slate-600">
          <span className="font-mono-dm text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent"/>
        </div>
      </div>
    </section>
  )
}
