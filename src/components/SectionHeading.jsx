import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

export function SectionHeading({ id, label, title, description, centered = false }) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className={`mb-12 scroll-mt-28 ${centered ? 'text-center' : ''}`}
    >
      <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400/80 uppercase">
        {label}
      </p>
      <h2 className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base text-zinc-400 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
