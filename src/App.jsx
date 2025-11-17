import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <footer className="py-10 border-t bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} LSS Contractors. All rights reserved.</p>
            <a href="/test" className="text-sm text-blue-700 hover:underline">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
