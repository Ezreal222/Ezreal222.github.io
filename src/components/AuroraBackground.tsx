import { motion, useScroll, useTransform } from 'framer-motion'

export default function AuroraBackground() {
  // Gentle scroll parallax — transform only, keeps blobs on the compositor layer.
  // Ranges kept small so the browser doesn't have to repaint blurred surfaces during scroll.
  const { scrollYProgress } = useScroll()
  const blobAY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const blobBY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const blobCY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base chromatic wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(94,234,212,0.12),transparent_60%)]" />

      {/* Three drifting aurora blobs — outer motion.div does scroll transform, inner div holds the blurred paint.
          Split intentionally: scroll drives transform (GPU-composited), while the static blur stays on its own layer. */}
      <motion.div
        style={{ y: blobAY, willChange: 'transform' }}
        className="absolute -top-40 -left-40 h-[44rem] w-[44rem]"
      >
        <div
          className="h-full w-full rounded-full animate-drift-a"
          style={{
            background:
              'radial-gradient(circle at center, rgba(168,85,247,0.85) 0%, rgba(168,85,247,0) 62%)',
            filter: 'blur(110px)',
            mixBlendMode: 'screen',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: blobBY, willChange: 'transform' }}
        className="absolute top-[20%] -right-24 h-[40rem] w-[40rem]"
      >
        <div
          className="h-full w-full rounded-full animate-drift-b"
          style={{
            background:
              'radial-gradient(circle at center, rgba(94,234,212,0.70) 0%, rgba(94,234,212,0) 62%)',
            filter: 'blur(120px)',
            mixBlendMode: 'screen',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: blobCY, willChange: 'transform' }}
        className="absolute bottom-[-15%] left-[25%] h-[36rem] w-[36rem]"
      >
        <div
          className="h-full w-full rounded-full animate-drift-c"
          style={{
            background:
              'radial-gradient(circle at center, rgba(251,191,36,0.45) 0%, rgba(251,191,36,0) 65%)',
            filter: 'blur(130px)',
            mixBlendMode: 'screen',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,11,20,0.45)_100%)]" />
    </div>
  )
}
