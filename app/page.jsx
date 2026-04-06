import Hero from "@/app/components/ui/Landing/Hero"
import Features from "@/app/components/ui/Landing/Features"
import Pricing from "@/app/components/ui/Landing/Pricing"
import  Workflow  from "@/app/components/ui/Landing/Workflow"
import Footer from "@/app/components/ui/Landing/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-4 py-6 text-white">
      <Hero />
      <Features />
      <Pricing />
      <Workflow/>
      <Footer />
    </main>
  )
}