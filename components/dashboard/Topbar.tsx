import { Bell, Search, User } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/5 bg-black/40 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-white">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-9 w-64 rounded-md border border-white/10 bg-black/50 pl-9 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-[#00ffb2]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffb2]/50"
          />
        </div>
        
        <button className="relative rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#00ffb2]" />
        </button>
        
        <div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
            <User className="h-4 w-4 text-zinc-400" />
        </div>
      </div>
    </header>
  );
}
