import { motion } from 'framer-motion'
import { Code2, Rocket, Palette } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Landing',
    description: 'A playful, modern landing page with 3D interactions and smooth transitions.',
    icon: Rocket,
    tags: ['React', 'Spline', 'Framer Motion'],
  },
  {
    title: 'Design System',
    description: 'A reusable component library with accessible primitives and tokens.',
    icon: Palette,
    tags: ['Tailwind', 'Radix', 'Storybook'],
  },
  {
    title: 'Dev Toolkit',
    description: 'CLI and utilities that speed up developer workflows and code quality.',
    icon: Code2,
    tags: ['Node', 'TypeScript', 'DX'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Selected Work</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">A few projects that showcase my range from UI to developer experience.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, icon: Icon, tags }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
