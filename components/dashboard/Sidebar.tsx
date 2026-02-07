"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Layers, Mail, Settings, LogOut, User } from "lucide-react";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Funnels', href: '/dashboard/funnels', icon: Layers },
  { name: 'Emails', href: '/dashboard/emails', icon: Mail },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="flex h-16 items-center px-6 border-b border-white/5">
        <div className="h-6 w-6 rounded-full bg-[#00ffb2] mr-3" />
        <span className="text-lg font-bold tracking-tight text-white">OfferFlow</span>
      </div>
      
      <div className="flex flex-1 flex-col gap-1 p-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-white/5">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </div>
  );
}
