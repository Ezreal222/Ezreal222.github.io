import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import { fadeUp, stagger, revealUp } from '../hooks/animations'

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {/* Section header */}
          <div className="mb-14">
            <motion.p variants={fadeUp} className="section-eyebrow">
              — 03 / trajectory
            </motion.p>
            <motion.h2 variants={revealUp} className="section-title mt-3">
              Where I've <span className="text-accent">worked.</span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline line — purple to teal gradient */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/70 via-teal/40 to-transparent -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {experience.map((exp, i) => {
                const num = String(i + 1).padStart(2, '0')
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
                  >
                    {/* Serif numeral marker */}
                    <div className="absolute left-6 md:left-1/2 top-4 -translate-x-1/2 z-10 flex items-center justify-center h-8 w-8 rounded-full bg-bg border border-teal/40">
                      <span className="font-serif italic text-amber text-sm">{num}</span>
                    </div>

                    {/* Left column: role info */}
                    <div
                      className={`md:text-right md:pr-12 ${
                        i % 2 === 0 ? '' : 'md:col-start-2'
                      }`}
                    >
                      <div
                        className={
                          i % 2 !== 0
                            ? 'md:col-start-1 md:row-start-1 md:text-left md:pl-12'
                            : ''
                        }
                      >
                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            i % 2 === 0 ? 'md:justify-end' : ''
                          }`}
                        >
                          <span className="mono-meta text-amber">{exp.dates}</span>
                        </div>
                        <h3 className="font-serif italic text-text-primary text-2xl leading-tight">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-text-muted text-xs mt-1 tracking-wide">
                          — {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Right column: bullets */}
                    <div
                      className={`mt-4 md:mt-0 md:pl-12 ${
                        i % 2 !== 0
                          ? 'md:col-start-1 md:row-start-1 md:pl-0 md:pr-12 md:text-right'
                          : ''
                      }`}
                    >
                      <div className="card">
                        <ul className="flex flex-col gap-3">
                          {exp.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-text-muted text-sm leading-relaxed"
                            >
                              <span className="text-teal mt-1 flex-shrink-0 font-mono">
                                ▸
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
