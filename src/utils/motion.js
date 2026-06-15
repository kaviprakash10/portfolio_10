export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const springHover = { type: 'spring', stiffness: 400, damping: 22 }
