import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[#00ffb2]" />
          <span className="text-lg font-bold tracking-tight text-white">OfferFlow</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#product" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Product</Link>
          <Link href="#solutions" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Solutions</Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-white hover:text-[#00ffb2] transition-colors">Log in</Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
