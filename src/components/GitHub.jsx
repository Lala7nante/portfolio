import { useEffect, useState } from 'react'

const USERNAME = 'Lala7nante'

export default function GitHub() {
  const [repos, setRepos]     = useState([])
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(false)

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
          <div className="flex-1 h-px bg-[#5bafd6]/30"/>
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
            {user && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 rounded-xl p-5"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(91,175,214,0.3)',
                }}>
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <img src={user.avatar_url} alt="avatar"
                    className="w-14 h-14 rounded-full shrink-0"
                    style={{ border: '2px solid rgba(91,175,214,0.5)' }}/>
                  <div className="min-w-0">
                    <div className="font-syne font-bold text-white truncate">{user.name || USERNAME}</div>
                    <div className="font-mono-dm text-xs text-slate-500">@{user.login}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-6">
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
                    className="shrink-0 font-mono-dm text-xs px-4 py-2 rounded-lg hover:bg-[#5bafd6]/10 transition-all whitespace-nowrap"
                    style={{
                      border: '1px solid rgba(91,175,214,0.4)',
                      color: '#5bafd6',
                    }}>
                    Voir profil ↗
                  </a>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map(r => (
                <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer"
                  className="rounded-xl p-4 hover:-translate-y-1 transition-all group"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(91,175,214,0.2)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(91,175,214,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(91,175,214,0.2)'}>
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