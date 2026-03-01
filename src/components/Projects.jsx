import { useState } from 'react'

const comingSoon = [
  {
    icon: '🌐',
    title: 'Portfolio Personnel',
    desc: 'Ce portfolio que vous consultez — conçu avec React, Tailwind CSS et des animations CSS personnalisées. Premier projet public disponible sur GitHub.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    status: 'En ligne',
    statusColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    dot: 'bg-green-400',
    demo: '#',
    code: 'https://github.com/Lala7nante/portfolio',
    available: true,
  },
  {
    icon: '🛒',
    title: 'Application E-commerce',
    desc: 'Une application de vente en ligne avec panier interactif, authentification utilisateur et intégration de paiement.',
    tags: ['React', 'Node.js', 'MySql'],
    status: 'En ligne',
    statusColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    dot: 'bg-green-400',
    demo: 'https://github.com/Lala7nante/ecommerce-app',
    code: 'https://github.com/Lala7nante/ecommerce-app',
    available: true,
  },
  {
    icon: '📋',
    title: 'Gestionnaire de Tâches',
    desc: 'Application de gestion de tâches avec drag & drop, filtres par priorité et notifications en temps réel.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    status: 'Bientôt',
    statusColor: 'text-[#5bafd6] border-[#5bafd6]/30 bg-[#5bafd6]/10',
    dot: 'bg-[#5bafd6]',
    demo: null,
    code: null,
    available: false,
  },
  {
    icon: '🌤️',
    title: 'App Météo',
    desc: "Application météo avec géolocalisation, prévisions sur 7 jours et visualisation graphique des données climatiques.",
    tags: ['JavaScript', 'API REST', 'CSS'],
    status: 'Bientôt',
    statusColor: 'text-[#5bafd6] border-[#5bafd6]/30 bg-[#5bafd6]/10',
    dot: 'bg-[#5bafd6]',
    demo: null,
    code: null,
    available: false,
  },
  {
    icon: '💬',
    title: 'Chat en Temps Réel',
    desc: 'Application de messagerie instantanée avec salons de discussion, envoi de fichiers et indicateurs de présence.',
    tags: ['React', 'Socket.io', 'Node.js'],
    status: 'Bientôt',
    statusColor: 'text-[#5bafd6] border-[#5bafd6]/30 bg-[#5bafd6]/10',
    dot: 'bg-[#5bafd6]',
    demo: null,
    code: null,
    available: false,
  },
  {
    icon: '📊',
    title: 'Dashboard Analytique',
    desc: 'Tableau de bord interactif avec graphiques dynamiques, filtres avancés et export de données en PDF/Excel.',
    tags: ['React', 'Recharts', 'Tailwind CSS'],
    status: 'Bientôt',
    statusColor: 'text-[#5bafd6] border-[#5bafd6]/30 bg-[#5bafd6]/10',
    dot: 'bg-[#5bafd6]',
    demo: null,
    code: null,
    available: false,
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0d14] relative overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5bafd6]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5bafd6]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── Titre de section ── */}
        <div className="flex items-center gap-4 mb-4 animate-fadeUp">
          <span className="font-mono-dm text-[#5bafd6] text-sm">04.</span>
          <h2 className="font-syne font-bold text-3xl text-white">Projets</h2>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <p className="text-slate-500 text-sm font-mono-dm mb-10 animate-fadeUp delay-100">
          // Projets en cours de réalisation — mise à jour régulière
        </p>

        {/* ── Bannière construction ── */}
        <div className="animate-fadeUp delay-200 mb-10 rounded-xl border border-[#5bafd6]/20 bg-gradient-to-r from-[#5bafd6]/5 to-transparent px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#5bafd6]/10 border border-[#5bafd6]/20 flex items-center justify-center text-2xl shrink-0">
            🚧
          </div>
          <div className="flex-1">
            <p className="text-white font-syne font-semibold mb-1">Section en construction</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Je travaille activement sur mes premiers projets. Voici un aperçu de ce qui arrive très bientôt.
              Tous les codes sources seront disponibles sur mon GitHub.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono-dm text-slate-500 shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Actif
          </div>
        </div>

        {/* ── Grille de projets ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {comingSoon.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`animate-fadeUp group bg-[#0d1117] border rounded-xl p-5 transition-all duration-300 flex flex-col cursor-default
                ${hovered === i
                  ? 'border-[#5bafd6]/50 -translate-y-1 shadow-lg shadow-[#5bafd6]/5'
                  : 'border-slate-800'
                }`}
              style={{ animationDelay: `${0.1 * (i + 3)}s` }}
            >
              {/* Header carte */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl transition-all duration-300
                  ${hovered === i
                    ? 'bg-[#5bafd6]/15 border-[#5bafd6]/30'
                    : 'bg-[#5bafd6]/5 border-[#5bafd6]/10'
                  }`}>
                  {p.icon}
                </div>

                {/* Badge statut */}
                <span className={`flex items-center gap-1.5 text-xs font-mono-dm px-2.5 py-1 rounded-full border ${p.statusColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${p.dot} ${p.status === 'En ligne' ? 'animate-pulse' : ''}`} />
                  {p.status}
                </span>
              </div>

              {/* Titre + description */}
              <h3 className={`font-syne font-bold text-base mb-2 transition-colors duration-300
                ${hovered === i ? 'text-[#5bafd6]' : 'text-white'}`}>
                {p.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex gap-3 pt-4 border-t border-slate-800/80">
                {p.available ? (
                  <>
                    <a
                      href={p.code}
                      className="flex items-center gap-1.5 text-xs font-mono-dm text-slate-400 hover:text-white transition-colors"
                    >
                      <span>⌨️</span> Code source
                    </a>
                    <span className="text-slate-700">·</span>
                    <a
                      href={p.demo}
                      className="flex items-center gap-1.5 text-xs font-mono-dm text-slate-400 hover:text-[#5bafd6] transition-colors"
                    >
                      <span>↗</span> Voir la démo
                    </a>
                  </>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-mono-dm text-slate-700 select-none">
                    <span>🔒</span> Disponible bientôt
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer section ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 animate-fadeUp delay-500">
          <p className="text-slate-600 text-sm font-mono-dm text-center sm:text-left">
            // D'autres projets arrivent — restez connectés
          </p>
          <a
            href="https://github.com/Lala7nante"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            Suivre mon GitHub
          </a>
        </div>

      </div>
    </section>
  )
}