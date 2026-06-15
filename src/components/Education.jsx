import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Sparkles } from 'lucide-react'
import { certification, educationEntries } from '../data/portfolio'
import { fadeUp, slideRight, stagger, springHover } from '../utils/motion'

const glassCard =
  'relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-300 sm:p-6'

const neonBadge = {
  cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]',
  purple: 'border-purple-500/40 bg-purple-500/10 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.2)]',
}

function Badge({ children, color = 'cyan' }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${neonBadge[color]}`}
    >
      {children}
    </span>
  )
}

function SectionHeader() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className="mb-12 text-center"
    >
      <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400/80 uppercase">
        Background
      </p>
      <h2 className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        Education & Certification
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400">
        Academic foundation and professional training that power my full-stack journey.
      </p>
    </motion.div>
  )
}

function EducationTimeline() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="mb-6 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
          <GraduationCap className="h-5 w-5 text-cyan-400" aria-hidden="true" />
        </div>
        <h3 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
          Education
        </h3>
      </div>

      <ol className="relative space-y-5 sm:space-y-6">
        <div
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[11px] w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-cyan-500/20 sm:left-[13px]"
        />

        {educationEntries.map((entry) => (
          <motion.li key={entry.degree} variants={fadeUp} className="relative pl-10 sm:pl-11">
            <span
              aria-hidden="true"
              className="absolute top-2 left-0 flex h-6 w-6 items-center justify-center sm:h-7 sm:w-7"
            >
              <span className="absolute inset-0 rounded-full bg-cyan-500/25 blur-sm" />
              <span className="relative h-3 w-3 rounded-full border-2 border-cyan-400 bg-zinc-950 shadow-[0_0_10px_rgba(34,211,238,0.7)] sm:h-3.5 sm:w-3.5" />
            </span>

            <motion.article
              whileHover={{ y: -3, scale: 1.01 }}
              transition={springHover}
              className={`group ${glassCard} hover:border-cyan-500/35 hover:shadow-[0_0_36px_rgba(34,211,238,0.12)]`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {entry.period && (
                    <>
                      <span className="text-xs font-medium text-zinc-500">{entry.period}</span>
                      <span className="text-zinc-700" aria-hidden="true">
                        ·
                      </span>
                    </>
                  )}
                  <Badge>{entry.badge}</Badge>
                </div>

                <h4 className="text-base font-semibold text-zinc-100 transition-colors duration-300 group-hover:text-cyan-50 sm:text-lg">
                  {entry.degree}
                </h4>
                <p className="mt-1 text-sm font-medium text-purple-400">{entry.institution}</p>
                {entry.location && <p className="mt-0.5 text-sm text-zinc-500">{entry.location}</p>}
                {entry.details && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{entry.details}</p>
                )}
              </div>
            </motion.article>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  )
}

function CertificationCard() {
  return (
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative h-full"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/25 via-cyan-500/10 to-purple-500/25 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-90"
      />

      <motion.article
        whileHover={{ y: -4 }}
        transition={springHover}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple-500/30 bg-zinc-900/50 p-6 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-purple-400/45 hover:shadow-[0_0_48px_rgba(168,85,247,0.16)] sm:p-7"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative">
          <div className="mb-5 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10">
              <Award className="h-5 w-5 text-purple-400" aria-hidden="true" />
            </div>
            <h3 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
              Certification
            </h3>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-zinc-500">{certification.period}</span>
            <span className="text-zinc-700" aria-hidden="true">
              ·
            </span>
            <Badge color="purple">{certification.duration}</Badge>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 sm:text-xl">{certification.title}</h4>
          <p className="mt-1 text-sm font-medium text-cyan-400">{certification.institution}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{certification.description}</p>

          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-purple-400" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                Key Topics Covered
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {certification.topics.map((topic) => (
                <motion.span
                  key={topic}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={springHover}
                  className="cursor-default rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-2.5 py-1.5 text-xs font-medium text-zinc-400 transition-colors duration-300 hover:border-cyan-500/45 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.14)]"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                Training Highlights
              </p>
            </div>
            <ul className="space-y-3">
              {certification.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  whileHover={{ x: 4 }}
                  transition={springHover}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 hover:text-zinc-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_8px_rgba(34,211,238,0.75)]"
                  />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-28 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(34,211,238,0.04),transparent_65%)]"
      />

      <SectionHeader />

      <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <EducationTimeline />
        <CertificationCard />
      </div>
    </section>
  )
}
