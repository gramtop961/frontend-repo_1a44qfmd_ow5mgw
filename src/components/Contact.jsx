import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Let’s build something</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Tell me about your project, timeline, and goals.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-xl">
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-zinc-300/60 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-md border border-zinc-300/60 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell me a bit about your project..."
            className="w-full rounded-md border border-zinc-300/60 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Send message
            </button>
            {status && <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
