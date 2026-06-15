import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { siteConfig } from '../data/portfolio'
import { springHover } from '../utils/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = siteConfig.navLinks.map((link) => link.href.slice(1))
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const navClass = scrolled
    ? 'border-zinc-800/60 bg-zinc-900/75 shadow-xl shadow-black/25 backdrop-blur-xl'
    : 'border-transparent bg-zinc-950/20 backdrop-blur-sm'

  const linkClass = (href) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${activeSection === href
      ? 'text-cyan-300'
      : 'text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-100'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        aria-label="Main navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6 ${navClass}`}
      >
        <motion.a
          href="#about"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springHover}
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-100"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 text-xs font-bold text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            {siteConfig.logo}
          </span>
          <span className="hidden bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent sm:inline">
            {siteConfig.name}
          </span>
        </motion.a>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-0.5">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass(link.href)}>
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
                      transition={springHover}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop resume CTA — triggers direct PDF download */}
          <motion.a
            href={siteConfig.resumeUrl}
            download="Kaviprakash_S_Resume.pdf"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={springHover}
            className="group inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/35 bg-indigo-500/10 px-3.5 py-2 text-sm font-medium text-indigo-200 transition-all duration-300 hover:border-indigo-400/55 hover:bg-indigo-500/15 hover:text-indigo-100 hover:shadow-[0_0_20px_rgba(99,102,241,0.22)]"
          >
            <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Resume
          </motion.a>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          className="inline-flex items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-2.5 text-zinc-400 transition-colors duration-300 hover:border-purple-500/30 hover:text-zinc-100 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {siteConfig.navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMobile}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${activeSection === link.href
                        ? 'bg-cyan-500/10 text-cyan-300'
                        : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100'
                      }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: siteConfig.navLinks.length * 0.05 }}
              >
                <a
                  href={siteConfig.resumeUrl}
                  download="Kaviprakash_S_Resume.pdf"
                  onClick={closeMobile}
                  className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-sm font-medium text-indigo-200 transition-colors duration-300 hover:border-indigo-400/50 hover:bg-indigo-500/15 hover:text-indigo-100"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
