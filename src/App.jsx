import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080b12]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate-600 font-mono-dm text-xs border-t border-slate-800">
        © 2025 Onjalalaina Edmond RANDRIANANTENAINA — Développeur Web
      </footer>
    </div>
  )
}
