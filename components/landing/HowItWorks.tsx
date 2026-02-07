export function HowItWorks() {
  const steps = [
    {
      title: "Input Offer",
      desc: "Input your offer details via URL, file upload, or text description.",
      badge: "Step 1"
    },
    {
      title: "AI Analysis",
      desc: "Our engine extracts intelligence and generates strategy, copy, and design.",
      badge: "Step 2"
    },
    {
      title: "Launch Funnel",
      desc: "Publish your high-converting pages and email sequences instantly.",
      badge: "Step 3"
    }
  ];

  return (
    <section className="py-24 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From Idea to Revenue <br /> in 3 Simple Steps</h2>
            <div className="mt-12 space-y-0 relative">
               {/* Vertical line connecting steps */}
               <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 md:left-4"></div>

              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black text-xs font-bold text-white shadow-[0_0_0_4px_black]">
                    {i + 1}
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-zinc-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square rounded-2xl border border-white/10 bg-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/20 to-black/50 p-1">
              {/* Visual Grid Container */}
              <div className="h-full w-full bg-black/40 rounded-xl overflow-hidden relative backdrop-blur-sm border border-white/5">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                     {/* Processing Visual */}
                     <div className="relative flex flex-col gap-6 items-center">
                         <div className="w-48 h-16 rounded-lg border border-white/10 bg-zinc-900 flex items-center px-4 gap-3 shadow-xl">
                            <div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">DOC</div>
                            <div className="h-2 w-20 bg-zinc-800 rounded"></div>
                         </div>
                         
                         <div className="h-12 w-px bg-gradient-to-b from-zinc-800 to-[#00ffb2]"></div>
                         
                         <div className="w-16 h-16 rounded-full border-2 border-[#00ffb2] bg-[#00ffb2]/10 flex items-center justify-center shadow-[0_0_30px_-5px_#00ffb250]">
                             <div className="text-[#00ffb2] font-bold text-xl">AI</div>
                         </div>

                         <div className="h-12 w-px bg-gradient-to-b from-[#00ffb2] to-zinc-800"></div>

                         <div className="flex gap-4">
                             <div className="w-32 h-20 rounded-lg border border-white/10 bg-zinc-900 shadow-xl p-2">
                                 <div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
                                 <div className="h-8 w-full bg-zinc-800/50 rounded"></div>
                             </div>
                             <div className="w-32 h-20 rounded-lg border border-white/10 bg-zinc-900 shadow-xl p-2 opacity-50">
                                 <div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
                                 <div className="h-8 w-full bg-zinc-800/50 rounded"></div>
                             </div>
                         </div>
                     </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
