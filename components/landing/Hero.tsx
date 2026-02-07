import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-32 text-center lg:pt-48 border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00ffb2]/10 via-black to-black opacity-40 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-[#00ffb2]"></span>
          <span className="text-sm font-medium text-zinc-300">New: AI Funnel Strategist</span>
        </div>

        <h1 className="bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:leading-[1.1]">
          Complete Funnel System <br /> from Your Offer Idea.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Transform any digital offer into a complete lead generation and revenue funnel. <br className="hidden sm:block" />
          The AI-native funnel strategist, copywriter, and designer in one.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00ffb2] px-8 text-base font-semibold text-black transition-all hover:scale-105 hover:bg-[#00ffb2]/90 hover:shadow-[0_0_40px_-10px_rgba(0,255,178,0.5)]"
          >
            <span>Get started now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            View Demo
          </button>
        </div>
        
        {/* Abstract Dashboard Visual with Grid Lines */}
        <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#00ffb2]/20 to-transparent opacity-20 blur-xl rounded-2xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-sm">
                <div className="flex h-10 items-center border-b border-white/10 bg-white/5 px-4">
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                </div>
                <div className="aspect-[16/9] w-full bg-[#050505] relative grid grid-cols-12 grid-rows-6 gap-px p-px">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                  
                  {/* Mockup Elements */}
                  <div className="col-span-3 row-span-6 bg-white/5 rounded-sm border border-white/5 p-4">
                      <div className="h-4 w-24 bg-white/10 rounded mb-6"/>
                      <div className="space-y-3">
                          {[1,2,3,4,5].map(i => (
                              <div key={i} className="h-8 w-full bg-white/5 rounded border border-white/5" />
                          ))}
                      </div>
                  </div>
                  <div className="col-span-9 row-span-6 p-6">
                      <div className="flex justify-between items-end mb-8">
                          <div>
                             <div className="h-4 w-32 bg-white/10 rounded mb-2"/>
                             <div className="h-8 w-64 bg-white/20 rounded"/>
                          </div>
                          <div className="h-10 w-32 bg-[#00ffb2]/20 border border-[#00ffb2]/30 rounded"/>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-8">
                          {[1,2,3].map(i => (
                              <div key={i} className="h-24 bg-white/5 rounded border border-white/5"/>
                          ))}
                      </div>
                      <div className="h-48 bg-white/5 rounded border border-white/5 w-full"/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
