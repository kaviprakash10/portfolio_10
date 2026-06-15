import { motion } from 'framer-motion'
import { toolkit } from '../data/portfolio'
import { fadeUp, scaleIn, stagger, springHover } from '../utils/motion'

const accentStyles = {
  cyan: {
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconText: 'text-cyan-400',
    countBg: 'bg-cyan-500/15 text-cyan-300 ring-cyan-500/30',
    badgeHover:
      'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)] hover:text-cyan-300',
    iconHover: 'group-hover/skill:text-cyan-400',
    glow: 'group-hover/card:shadow-[0_0_40px_rgba(34,211,238,0.08)] group-hover/card:border-cyan-500/25',
  },
  violet: {
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconText: 'text-violet-400',
    countBg: 'bg-violet-500/15 text-violet-300 ring-violet-500/30',
    badgeHover:
      'hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.18)] hover:text-violet-300',
    iconHover: 'group-hover/skill:text-violet-400',
    glow: 'group-hover/card:shadow-[0_0_40px_rgba(139,92,246,0.08)] group-hover/card:border-violet-500/25',
  },
  blue: {
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconText: 'text-blue-400',
    countBg: 'bg-blue-500/15 text-blue-300 ring-blue-500/30',
    badgeHover:
      'hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.18)] hover:text-blue-300',
    iconHover: 'group-hover/skill:text-blue-400',
    glow: 'group-hover/card:shadow-[0_0_40px_rgba(59,130,246,0.08)] group-hover/card:border-blue-500/25',
  },
  emerald: {
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconText: 'text-emerald-400',
    countBg: 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30',
    badgeHover:
      'hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.18)] hover:text-emerald-300',
    iconHover: 'group-hover/skill:text-emerald-400',
    glow: 'group-hover/card:shadow-[0_0_40px_rgba(52,211,153,0.08)] group-hover/card:border-emerald-500/25',
  },
  amber: {
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconText: 'text-amber-400',
    countBg: 'bg-amber-500/15 text-amber-300 ring-amber-500/30',
    badgeHover:
      'hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.18)] hover:text-amber-300',
    iconHover: 'group-hover/skill:text-amber-400',
    glow: 'group-hover/card:shadow-[0_0_40px_rgba(251,191,36,0.08)] group-hover/card:border-amber-500/25',
  },
  fuchsia: {
    iconBg: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    iconText: 'text-fuchsia-400',
    countBg: 'bg-fuchsia-500/15 text-fuchsia-300 ring-fuchsia-500/30',
    badgeHover:
      'hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.18)] hover:text-fuchsia-300',
    iconHover: 'group-hover/skill:text-fuchsia-400',
    glow: 'group-hover/card:shadow-[0_0_40px_rgba(217,70,239,0.08)] group-hover/card:border-fuchsia-500/25',
  },
}

function ToolkitCard({ group }) {
  const styles = accentStyles[group.accent] ?? accentStyles.cyan
  const CategoryIcon = group.icon

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={springHover}
      className={`group/card relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 sm:p-6 ${styles.glow}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
      />

      <header className="relative mb-5 flex items-center justify-between gap-3 border-b border-zinc-800/50 pb-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${styles.iconBg}`}
          >
            <CategoryIcon className={`h-5 w-5 ${styles.iconText}`} aria-hidden="true" />
          </div>
          <h3 className="text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
            {group.category}
          </h3>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1 ${styles.countBg}`}
          aria-label={`${group.skills.length} skills`}
        >
          {group.skills.length}
        </span>
      </header>

      <div className="relative flex flex-wrap gap-2">
        {group.skills.map((skill, i) => {
          const SkillIcon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -3, scale: 1.04 }}
              viewport={{ once: true }}
              transition={{ ...springHover, delay: i * 0.03 }}
              className={`group/skill flex cursor-default items-center gap-2 rounded-lg border border-zinc-800/70 bg-zinc-950/60 px-2.5 py-2 text-zinc-400 transition-all duration-300 ${styles.badgeHover}`}
            >
              <SkillIcon
                className={`h-3.5 w-3.5 shrink-0 text-zinc-500 transition-colors duration-300 ${styles.iconHover}`}
                aria-hidden="true"
              />
              <span className="text-xs font-medium sm:text-sm">{skill.name}</span>
            </motion.div>
          )
        })}
      </div>
    </motion.article>
  )
}

export function TechStack() {
  return (
    <section id="tech-stack" className="relative scroll-mt-28 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04),transparent_70%)]"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="relative mb-12 text-center"
      >
        <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400/80 uppercase">
          Skills
        </p>
        <h2 className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          My Toolkit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Technologies and tools I use to build robust, scalable applications
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
      >
        {toolkit.map((group) => (
          <ToolkitCard key={group.category} group={group} />
        ))}
      </motion.div>
    </section>
  )
}
