import type { Variants } from 'framer-motion'
import { useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent } from 'react'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

// Reveal-from-below with clip-path — used for serif section titles
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.9, ease: 'easeOut' as const },
  },
}

// Hook: magnetic hover — card follows cursor by a small offset
export function useMagneticHover(strength = 10) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set((relX / rect.width) * strength)
    y.set((relY / rect.height) * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { x: springX, y: springY, onMouseMove, onMouseLeave }
}
