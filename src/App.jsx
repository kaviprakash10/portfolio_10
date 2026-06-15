import { BackgroundAnimation } from './components/BackgroundAnimation'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      <BackgroundAnimation />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
