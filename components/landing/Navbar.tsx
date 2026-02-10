import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08070e]/80 backdrop-blur-md font-dm-sans">
      <div className="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
             <img src="/logo.svg" alt="Cryptix Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-[24px] font-medium tracking-tight text-[#f5f5f5]">Offerflow</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#why" className="text-[16px] text-[#d5d5d5] hover:text-[#f5f5f5] transition-colors">Why Offerflow?</Link>
          <Link href="#cryptos" className="text-[16px] text-[#d5d5d5] hover:text-[#f5f5f5] transition-colors">Features</Link>
          <Link href="#howitworks" className="text-[16px] text-[#d5d5d5] hover:text-[#f5f5f5] transition-colors">How it works</Link>
          <Link href="#testimonials" className="text-[16px] text-[#d5d5d5] hover:text-[#f5f5f5] transition-colors">Testimonials</Link>
          <Link href="#faq" className="text-[16px] text-[#d5d5d5] hover:text-[#f5f5f5] transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-[16px] font-medium text-[#d5d5d5] hover:text-[#f5f5f5] hover:bg-transparent px-0">
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            asChild
            className="rounded-[48px] border border-white/10 bg-white/5 px-6 py-6 text-[16px] font-medium text-white transition-colors hover:bg-white/10"
          >
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
