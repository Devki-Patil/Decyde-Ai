"use client"

import { motion } from "framer-motion"

export default function Pricing() {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Simple pricing for fast-moving founders
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Start free, scale as your decisions grow. Built for startups,
            product teams, and founder operators.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-8 max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold">Founder Pro</h3>
          <p className="mt-2 text-zinc-400">
            AI decision intelligence for startups
          </p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-bold">$29</span>
            <span className="pb-1 text-zinc-400">/month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            <li>✔ Churn prediction</li>
            <li>✔ Revenue leak analysis</li>
            <li>✔ Sprint prioritization</li>
            <li>✔ Decision simulation</li>
          </ul>

          <button className="mt-8 w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  )
}