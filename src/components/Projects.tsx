import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import { projects, type Project } from '../data/portfolioData'
import { fadeUp, stagger, revealUp, useMagneticHover } from '../hooks/animations'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const magnetic = useMagneticHover(10)
  const num = String(index + 1).padStart(2, '0')
  const hasAnyLink = Boolean(project.liveDemo || project.github)

  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay: index * 0.08 }}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className="card group flex flex-col relative will-change-transform"
    >
      {/* Numeral + external link */}
      <div className="flex items-start justify-between mb-4">
        <span className="font-serif italic text-amber/80 text-lg">{num}</span>
        <div className="flex items-center gap-3">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-teal transition-colors"
              aria-label="Live demo"
              title="Live demo"
              onClick={e => e.stopPropagation()}
            >
              <FiExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-teal transition-colors"
              aria-label="GitHub repo"
              title="GitHub repo"
              onClick={e => e.stopPropagation()}
            >
              <FiGithub size={16} />
            </a>
          )}
          {hasAnyLink && (
            <FiArrowUpRight
              size={18}
              className="text-text-muted group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif italic text-2xl text-text-primary group-hover:text-accent transition-colors leading-tight">
        {project.name}
      </h3>
      <span className="mono-meta text-text-muted/60 mt-1">{project.date}</span>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mt-4 flex-grow">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-white/5">
        {project.tech.map(t => (
          <span key={t} className="skill-badge">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-28 px-6">
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
              — 04 / selected work
            </motion.p>
            <motion.h2 variants={revealUp} className="section-title mt-3">
              What I've <span className="text-accent">built.</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
