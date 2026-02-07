import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#00ffb2]" />
            <span className="text-base font-bold text-zinc-300">OfferFlow</span>
        </div>
        <div className="flex gap-8">
            <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Twitter</Link>
        </div>
        <p className="text-sm text-zinc-500">© 2026 OfferFlow AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
