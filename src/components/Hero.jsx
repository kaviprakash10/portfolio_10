import { motion } from 'framer-motion'
import { ArrowRight, Download, GitBranch, Mail, Share2, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/portfolio'
import { fadeUp, stagger, springHover } from '../utils/motion'

const socialLinks = [
  { href: siteConfig.social.github, icon: GitBranch, label: 'GitHub profile' },
  { href: siteConfig.social.linkedin, icon: Share2, label: 'LinkedIn profile' },
  { href: siteConfig.social.email, icon: Mail, label: 'Send email' },
]

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center scroll-mt-28 overflow-hidden pt-28 pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_50%)]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl"
      >
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-zinc-900/50 px-3 py-1.5 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-cyan-400/90 uppercase">
            {siteConfig.tagline}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-extrabold leading-[1.08] tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {siteConfig.name.split(' ')[0]}
          </span>
          <span className="mt-1 block bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {siteConfig.headline}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {siteConfig.subheadline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springHover}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          {/* Direct download — file must live at public/resume.pdf */}
          <motion.a
            href={siteConfig.resumeUrl}
            download="Kaviprakash_S_Resume.pdf"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springHover}
            className="group inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-6 py-3.5 text-sm font-semibold text-indigo-200 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/15 hover:text-indigo-100 hover:shadow-[0_0_32px_rgba(99,102,241,0.28)]"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springHover}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900/40 px-6 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:text-zinc-100 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springHover}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/50 text-zinc-400 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
