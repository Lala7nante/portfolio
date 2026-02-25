import { useEffect, useState } from 'react'

const USERNAME = 'Lala7nante'

export default function GitHub() {
  const [repos, setRepos] = useState([])
  const [user, setUser]   = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`).then(r => r.json()),
    ])
      .then(([u, r]) => { setUser(u); setRepos(Array.isArray(r) ? r : []); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-dm text-[#5bafd6] text-sm">05.</span>
          <h2 className="font-syne font-bold text-3xl text-white">GitHub</h2>
          <div className="flex-1 h-px bg-slate-800"/>
        </div>

        {loading && (
          <div className="text-center text-slate-500 font-mono-dm text-sm py-12">
            Chargement des repos...
          </div>
        )}

        {error && (
          <div className="text-center text-slate-500 font-mono-dm text-sm py-12">
            Impossible de charger les repos GitHub.
          </div>
        )}

        {!loading && !error && (
          <>
            {/* User card */}
            {user && (
              <div className="flex items-center gap-5 mb-8 bg-[#0d1117] border border-slate-800 rounded-xl p-5">
                <img src={user.avatar_url} alt="avatar"
                  className="w-14 h-14 rounded-full border-2 border-[#5bafd6]/40"/>
                <div className="flex-1">
                  <div className="font-syne font-bold text-white">{user.name || USERNAME}</div>
                  <div className="font-mono-dm text-xs text-slate-500">@{user.login}</div>
                </div>
                <div className="flex gap-6 text-center">
                  <div>
                    <div className="font-syne font-bold text-[#5bafd6]">{user.public_repos}</div>
                    <div className="font-mono-dm text-xs text-slate-600">repos</div>
                  </div>
                  <div>
                    <div className="font-syne font-bold text-[#5bafd6]">{user.followers}</div>
                    <div className="font-mono-dm text-xs text-slate-600">followers</div>
                  </div>
                </div>
                <a href={user.html_url} target="_blank" rel="noreferrer"
                  className="font-mono-dm text-xs px-4 py-2 border border-[#5bafd6]/40 text-[#5bafd6] rounded-lg hover:bg-[#5bafd6]/10 transition-all">
                  Voir profil ↗
                </a>
              </div>
            )}

            {/* Repos grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map(r => (
                <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer"
                  className="bg-[#0d1117] border border-slate-800 rounded-xl p-4 hover:border-[#5bafd6]/40 hover:-translate-y-1 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#5bafd6] text-sm">📁</span>
                    <span className="text-slate-600 group-hover:text-slate-400 transition-colors text-xs">↗</span>
                  </div>
                  <h3 className="font-syne font-bold text-white text-sm mb-1 group-hover:text-[#5bafd6] transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {r.description || 'Aucune description'}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-mono-dm">
                    {r.language && <span className="text-[#5bafd6]">{r.language}</span>}
                    <span>⭐ {r.stargazers_count}</span>
                    <span>🍴 {r.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
