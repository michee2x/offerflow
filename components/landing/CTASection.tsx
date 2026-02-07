import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ffb2]/20 via-black to-black opacity-30 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Monetize Your Offer?
        </h2>
        <p className="mb-10 text-lg text-zinc-400">
          Join creators and marketers who are building complete funnels in minutes with OfferFlow AI.
        </p>
        <Link
          href="/dashboard"
          className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00ffb2] px-8 text-base font-semibold text-black transition-all hover:scale-105 hover:bg-[#00ffb2]/90 hover:shadow-[0_0_40px_-10px_rgba(0,255,178,0.5)]"
        >
          <span>Start Building Free</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
