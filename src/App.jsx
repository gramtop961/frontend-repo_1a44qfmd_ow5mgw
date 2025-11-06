import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Built with love and a bit of 3D flair.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
