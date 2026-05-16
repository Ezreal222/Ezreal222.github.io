import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import { personalInfo, education } from '../data/portfolioData'
import { fadeUp, stagger, revealUp } from '../hooks/animations'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="py-28 px-6">
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
              — 01 / about
            </motion.p>
            <motion.h2 variants={revealUp} className="section-title mt-3">
              Who <span className="text-accent">I am.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-[1.1fr_1fr] gap-14 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <FiMapPin className="text-teal flex-shrink-0" />
                <span className="mono-meta">New York, NY</span>
              </div>

              <p className="text-text-muted leading-relaxed text-[15px]">
                {personalInfo.bio}
              </p>

              <p className="text-text-muted leading-relaxed text-[15px]">
                My interests span cloud architecture, systems programming, computer graphics,
                and applied machine learning. I believe great engineers not only write clean
                code — they understand the problem deeply before writing a single line.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {['open to work', 'full-time & internship', 'on-site / remote'].map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] lowercase tracking-wide px-2.5 py-1 rounded-md bg-teal/10 text-teal border border-teal/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education cards */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <div className="flex items-center gap-2 mono-meta text-teal/80">
                <span className="h-px w-6 bg-teal/50" />
                education
              </div>

              {education.map((edu, i) => (
                <div key={i} className="card">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-text-primary font-medium text-[15px] leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-text-muted/90 text-sm mt-1 leading-snug">
                        {edu.school}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-amber whitespace-nowrap tracking-wide">
                      {edu.dates}
                    </span>
                  </div>
                  {edu.courses.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {edu.courses.map(c => (
                        <span key={c} className="skill-badge">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
