import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { scaleIn, stagger, springHover } from '../utils/motion'

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-28 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(99,102,241,0.05),transparent_60%)]"
      />

      <SectionHeading
        label="Projects"
        title="Selected work"
        description="A snapshot of recent builds — from full-stack platforms to polished developer tools."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={scaleIn}
            whileHover={{ y: -6 }}
            transition={springHover}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/40 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]"
          >
            <div className="relative overflow-hidden border-b border-zinc-800/60 bg-zinc-950/20">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950/10">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-4 pb-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
                  screenshot
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-zinc-100 transition-colors duration-300 group-hover:text-cyan-50">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={springHover}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors duration-300 hover:border-purple-500/40 hover:text-purple-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-5 border-t border-zinc-800/60 pt-4">
                <motion.a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  transition={springHover}
                  className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <GitBranch className="h-4 w-4 transition-transform duration-300 group-hover/link:-rotate-12" />
                  Source
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  transition={springHover}
                  className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-300 hover:text-purple-300"
                >
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
