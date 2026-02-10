import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#08070e] overflow-hidden flex flex-col items-center pt-32 pb-20 font-dm-sans">
      {/* Background Gradients */}
      {/* Top Center Green Gradient */}
      <div className="absolute top-[-1px] left-0 right-0 h-[2px] bg-[radial-gradient(25%_25%_at_50%_50%,_#ffffff_0%,_#00ffb200_99.68%)] opacity-50 z-10 pointer-events-none mix-blend-screen" />
      
      {/* Main Radial Glow */}
      <div className="absolute top-[-430px] left-1/2 -translate-x-1/2 w-[666px] h-[614px] bg-[radial-gradient(50%_50%_at_50%_50%,_#00ffb2_0%,_#00ffb200_100%)] opacity-[0.15] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 mx-auto flex flex-col items-center">
        {/* Navbar Placeholder / Spacing - Nav is technically separate but visually merged. 
            The real nav would be fixed or sticky. We assume Navbar component handles that. 
            Here is the main text content. */}
        
        <div className="mt-12 md:mt-24 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-[#f5f5f5] text-[40px] md:text-[64px] lg:text-[82px] leading-[48px] md:leading-[72px] lg:leading-[90px] font-normal tracking-tight max-w-[900px]">
            Complete Funnel System
from Your Offer Idea.
          </h1>
          
          <p className="mt-6 md:mt-8 text-[#d5d5d5] text-[16px] md:text-[18px] leading-[26px] max-w-[600px] font-normal">
           Transform any digital offer into a complete lead generation and revenue funnel.
The AI-native funnel strategist, copywriter, and designer in one.
          </p>

          {/* CTA */}
          <div className="mt-10 md:mt-12">
            <Button 
              asChild
              className="inline-flex h-auto items-center justify-center bg-[#00ffb2] text-black px-10 py-5 rounded-[48px] font-medium text-[16px] hover:bg-[#00e6a0] transition-all duration-300 shadow-[0px_0px_34px_0px_rgba(42,240,124,0.3)] hover:shadow-[0px_0px_48px_0px_rgba(42,240,124,0.5)] active:scale-95"
            >
              <Link href="/signup">View Demo</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex -space-x-2">
               {/* Placeholders for avatars or use generated circles */}
               {[1,2,3,4,5].map((i) => (
                 <div key={i} className="w-8 h-8 rounded-full border border-[#08070e] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm" />
               ))}
            </div>
            <div className="flex items-center gap-2 text-[#d5d5d5] text-sm">
                <span className="italic">They trust us</span>
                <span className="font-bold">4.9</span>
                {/* Star icon */}
                <svg className="w-4 h-4 text-[#00ffb2] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative z-10 mt-16 md:mt-24 w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="relative w-full aspect-[2880/1770] bg-[#0d0c15] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08070e]/80 z-20" />
             <Image 
                src="/dashboard.png" 
                alt="Cryptix Dashboard" 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
             />
             
             {/* Glowing lines overlay simulation (simplified) */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffb2]/30 to-transparent z-20" />
             <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00ffb2]/10 to-transparent z-20" />
          </div>
          
          {/* Bottom Gradient Glow behind Dashboard */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-[#00ffb2] blur-[100px] opacity-10 -z-10" />
        </div>

      </div>
      
      {/* Bottom Separator Gradient */}
      <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[1184px] h-[2px] bg-[radial-gradient(25%_25%_at_50%_50%,_#00ffb2_0%,_#00ffb200_99.68%)] opacity-50 z-10 pointer-events-none" />

    </section>
  );
}
