"use client"

import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="mx-auto mt-8 max-w-6xl px-4 pb-10">
      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-xl"
        >
          <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20" />
          <h3 className="text-lg font-semibold">Churn Prediction</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Detect users likely to leave before they churn with AI-driven risk scoring.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-xl"
        >
          <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/20" />
          <h3 className="text-lg font-semibold">Revenue Leak Finder</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Instantly uncover pricing mistakes and conversion blockers.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-xl"
        >
          <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/20" />
          <h3 className="text-lg font-semibold">Sprint Prioritizer</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Let AI rank tasks by urgency, impact, and revenue potential.
          </p>
        </motion.div>
      </div>
    </section>
  )
}