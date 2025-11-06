import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-zinc-950 dark:via-zinc-950/60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-20">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            Creative Developer & Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 max-w-xl"
          >
            I build interactive, modern web experiences blending clean code with playful 3D elements. Let’s create something memorable together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300/60 dark:border-zinc-700/60 px-6 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <div className="h-[40vh] lg:h-[60vh]" />
      </div>
    </section>
  )}
