export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        
        {/* brand */}
        <div>
          <h3 className="text-lg font-semibold">Decyde AI</h3>
          <p className="mt-1 text-sm text-zinc-400">
            AI founder decision copilot for smarter startup growth.
          </p>
        </div>

        {/* links */}
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#" className="transition hover:text-white">
            Features
          </a>
          <a href="#" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
        © 2026 Decyde AI. All rights reserved.
      </div>
    </footer>
  )
}