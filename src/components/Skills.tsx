import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import { fadeUp, stagger, revealUp } from '../hooks/animations'

const categoryIcons: Record<string, string> = {
  Languages: '{ }',
  Frontend: '◈',
  'Backend & DB': '⬡',
  'AI / ML': '◎',
  'Cloud & Infrastructure': '☁',
  Tools: '⚙',
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-28 px-6">
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
              — 02 / stack
            </motion.p>
            <motion.h2 variants={revealUp} className="section-title mt-3">
              What I <span className="text-accent">work with.</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group relative card overflow-hidden"
              >
                {/* Left-edge accent line: purple → teal on hover */}
                <span className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent to-accent/20 group-hover:from-teal group-hover:to-teal/30 transition-colors duration-500" />

                <div className="flex items-center gap-3 mb-4 pl-2">
                  <span className="font-mono text-accent text-lg group-hover:text-teal transition-colors">
                    {categoryIcons[group.category] ?? '·'}
                  </span>
                  <h3 className="font-mono text-text-primary text-xs uppercase tracking-[0.2em]">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-2">
                  {group.items.map(skill => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
