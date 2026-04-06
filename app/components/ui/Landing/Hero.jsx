"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 px-6 py-20 shadow-2xl md:px-10">
      
      {/* background glow */}
      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* top badge */}
      <div className="flex justify-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] text-zinc-300 backdrop-blur-xl">
          AI-powered decision engine for founders
        </span>
      </div>

      {/* centered content */}
      <div className="relative z-10 mx-auto mt-8 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          The AI SaaS your{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            startup actually needs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base"
        >
          Detect churn, uncover revenue leaks, prioritize sprint tasks, and
          simulate pricing decisions with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105">
            Get Started
          </button>
          <button className="rounded-xl border border-zinc-700 px-6 py-3 text-sm transition hover:bg-white/5">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}