import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full bg-white/5 p-4 border border-white/10">
        <Plus className="h-8 w-8 text-zinc-500" />
      </div>
      <h2 className="text-xl font-semibold text-white">No active funnels</h2>
      <p className="max-w-sm text-sm text-zinc-400">
        You haven't created any funnels yet. Start by creating your first offer to generate a complete funnel system.
      </p>
      <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#00ffb2] px-4 py-2 text-sm font-medium text-black hover:bg-[#00ffb2]/90 transition-colors">
        Create Funnel
      </button>
    </div>
  );
}
