import { Bell } from 'lucide-react';

function TopBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-6">
      <div>
        <p className="text-sm text-[#D1D1D1]">Your style dashboard</p>
        <h1 className="text-2xl font-semibold text-white">Welcome, Nova</h1>
      </div>
      <button className="relative p-3 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_20px_rgba(162,89,255,0.35)] hover:border-[rgba(162,89,255,0.45)] transition-all">
        <Bell className="w-5 h-5 text-white" />
        <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#FF2FE6] shadow-[0_0_10px_rgba(255,47,230,0.8)]" />
      </button>
    </div>
  );
}

export default TopBar;
