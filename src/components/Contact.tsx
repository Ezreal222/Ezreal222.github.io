import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { fadeUp, stagger, revealUp } from '../hooks/animations'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="section-eyebrow">
            — 05 / contact
          </motion.p>

          <motion.h2
            variants={revealUp}
            className="font-serif italic text-5xl md:text-7xl text-text-primary leading-[1] tracking-tight mt-4"
          >
            Let's build <span className="text-accent">something.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-text-muted leading-relaxed mt-8 max-w-xl text-[15px]"
          >
            I'm currently open to new opportunities — full-time roles and internships in
            software engineering. Whether you have a question, a project idea, or just want
            to say hi, my inbox is open.
          </motion.p>

          {/* Oversized email link */}
          <motion.a
            variants={fadeUp}
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-4 mt-12 font-serif italic text-3xl md:text-5xl text-teal hover:text-accent transition-colors duration-500"
          >
            <span className="relative">
              {personalInfo.email}
              <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
            <FiArrowUpRight
              size={40}
              className="flex-shrink-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </motion.a>

          {/* Secondary links */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-14">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 mono-meta text-text-muted hover:text-teal transition-colors"
            >
              <FiLinkedin size={14} />
              LinkedIn
              <FiArrowUpRight
                size={12}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 mono-meta text-text-muted hover:text-teal transition-colors"
            >
              <FiGithub size={14} />
              GitHub
              <FiArrowUpRight
                size={12}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="mono-meta text-text-muted hover:text-teal transition-colors"
            >
              {personalInfo.phone}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
