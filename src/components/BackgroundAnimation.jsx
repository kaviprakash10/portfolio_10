import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

const ORBS = [
  {
    className: 'left-[8%] top-[12%] h-72 w-72 sm:h-96 sm:w-96',
    color: 'bg-purple-500/12',
    duration: 22,
    delay: 0,
    x: [0, 30, -15, 0],
    y: [0, -25, 20, 0],
    scale: [1, 1.08, 0.96, 1],
  },
  {
    className: 'right-[5%] top-[28%] h-64 w-64 sm:h-80 sm:w-80',
    color: 'bg-indigo-500/10',
    duration: 26,
    delay: 2,
    x: [0, -35, 20, 0],
    y: [0, 30, -20, 0],
    scale: [1, 1.1, 0.94, 1],
  },
  {
    className: 'bottom-[18%] left-[22%] h-56 w-56 sm:h-72 sm:w-72',
    color: 'bg-cyan-500/10',
    duration: 24,
    delay: 4,
    x: [0, 25, -30, 0],
    y: [0, -20, 25, 0],
    scale: [1, 1.06, 1.02, 1],
  },
  {
    className: 'bottom-[32%] right-[18%] hidden h-48 w-48 sm:block sm:h-64 sm:w-64',
    color: 'bg-violet-500/8',
    duration: 28,
    delay: 1,
    x: [0, -20, 15, 0],
    y: [0, 15, -25, 0],
    scale: [1, 1.04, 0.98, 1],
  },
]

function createParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 37) % 84)}%`,
    top: `${6 + ((i * 53) % 88)}%`,
    size: i % 3 === 0 ? 2 : 1,
    delay: `${(i * 0.7) % 12}s`,
    duration: `${14 + (i % 8)}s`,
    opacity: 0.15 + (i % 5) * 0.06,
  }))
}

export function BackgroundAnimation() {
  const reduceMotion = useReducedMotion()
  const particles = useMemo(() => createParticles(24), [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-950"
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient animate-gradient-shift opacity-80" />

      {/* Radial accent washes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_0%_80%,rgba(34,211,238,0.07),transparent_55%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35]" />

      {/* Floating orbs */}
      {ORBS.map((orb) =>
        reduceMotion ? (
          <div
            key={orb.className}
            className={`absolute rounded-full blur-3xl ${orb.className} ${orb.color}`}
          />
        ) : (
          <motion.div
            key={orb.className}
            className={`absolute rounded-full blur-3xl will-change-transform ${orb.className} ${orb.color}`}
            animate={{ x: orb.x, y: orb.y, scale: orb.scale }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        ),
      )}

      {/* Soft particles — CSS-only for 60fps */}
      <div className="absolute inset-0 hidden sm:block">
        {particles.map((p) => (
          <span
            key={p.id}
            className="bg-particle absolute rounded-full animate-particle-drift"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Mobile: fewer particles */}
      <div className="absolute inset-0 sm:hidden">
        {particles.slice(0, 10).map((p) => (
          <span
            key={`m-${p.id}`}
            className="bg-particle absolute rounded-full animate-particle-drift"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity * 0.8,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Vignette — keeps edges dark, content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.4)_100%)]" />
    </div>
  )
}
