"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    desc: "Plug in product analytics, Stripe, CRM, or churn events in seconds.",
    glow: "from-cyan-500/30 to-blue-500/20",
  },
  {
    number: "02",
    title: "AI Simulates Decisions",
    desc: "Decyde predicts churn, pricing impact, sprint ROI, and growth risks.",
    glow: "from-purple-500/30 to-pink-500/20",
  },
  {
    number: "03",
    title: "Execute With Confidence",
    desc: "Get ranked actions, sprint priorities, and revenue-saving moves instantly.",
    glow: "from-emerald-500/30 to-teal-500/20",
  },
]

export default function Workflow() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 pb-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
          Workflow
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
          From data to decisions in minutes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          A seamless AI workflow designed for founders to move from raw metrics
          to confident business decisions faster than ever.
        </p>
      </div>

      <div className="relative mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-xl"
          >
            {/* glow orb */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${step.glow} blur-2xl`}
            />

            {/* number */}
            <div className="relative z-10 text-4xl font-bold text-white/20">
              {step.number}
            </div>

            <h3 className="relative z-10 mt-4 text-xl font-semibold">
              {step.title}
            </h3>

            <p className="relative z-10 mt-3 text-sm leading-7 text-zinc-400">
              {step.desc}
            </p>

            {/* connector line desktop */}
            {index < steps.length - 1 && (
              <div className="absolute right-[-20px] top-1/2 hidden h-[2px] w-10 bg-gradient-to-r from-white/20 to-transparent md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}