import { motion, useScroll, useTransform } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { useRef } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Photo drifts slower than text as user scrolls — subtle parallax
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Hero-local atmosphere — stronger chromatic spotlight that doesn't repeat elsewhere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(ellipse 70% 50% at 75% 70%, rgba(94,234,212,0.18), transparent 60%)',
        }}
      />

      {/* Faint grid shimmer — editorial signal, only on hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-[1.15fr_1fr] gap-16 items-center">
        {/* Left: editorial text stack */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col gap-7"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-teal/50" />
            <p className="mono-meta text-teal/80">
              Currently · NYU Tandon · 2026
            </p>
          </div>

          {/* Name + role */}
          <div className="flex flex-col gap-1">
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-[0.95] tracking-tight">
              Yang Zheng<span className="text-accent">.</span>
            </h1>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="font-serif italic text-2xl md:text-3xl text-teal">/</span>
              <div className="font-serif italic text-2xl md:text-3xl text-text-primary min-h-[2.5rem]">
                <Typewriter
                  words={personalInfo.titles}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  cursorColor="#5eead4"
                  typeSpeed={55}
                  deleteSpeed={35}
                  delaySpeed={2200}
                />
              </div>
              <span className="font-serif italic text-2xl md:text-3xl text-teal">/</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-text-muted leading-relaxed max-w-lg text-[15px]">
            {personalInfo.bio}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary flex items-center gap-2">
                <FiDownload size={16} />
                Resume
              </button>
            </a>
            <Link to="contact" smooth duration={400} offset={-80}>
              <button className="btn-outline flex items-center gap-2">
                <FiMail size={16} />
                Get in touch
              </button>
            </Link>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-5 mt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <span className="mono-meta text-text-muted/50">
              {personalInfo.email}
            </span>
          </div>
        </motion.div>

        {/* Right: asymmetric photo frame with teal glow */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col items-center md:items-end gap-4"
        >
          <div className="relative">
            {/* Offset accent frame (decorative) */}
            <div
              className="absolute inset-0 rounded-[2rem] border border-teal/30 translate-x-3 translate-y-3"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-[2rem] animate-teal-glow"
              aria-hidden="true"
            />
            <img
              src={personalInfo.profilePhoto}
              alt="Yang Zheng"
              className="relative z-10 w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem] rounded-[2rem] object-cover border border-white/10"
            />
          </div>
          <p className="mono-meta text-text-muted/70 pr-1">
            — Yang Zheng · New York · 2026
          </p>
        </motion.div>
      </div>

      {/* Minimal scroll indicator: vertical line + dot */}
      <Link
        to="about"
        smooth
        duration={400}
        offset={-80}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to about"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="mono-meta text-text-muted/50 group-hover:text-teal transition-colors">
            scroll
          </span>
          <div className="relative h-10 w-px bg-gradient-to-b from-teal/60 to-transparent">
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-teal"
              animate={{ y: [0, 28, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </Link>
    </section>
  )
}
