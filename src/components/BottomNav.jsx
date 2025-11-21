import { Home, Shirt, Layers, Calendar, User } from 'lucide-react';

function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%]">
      <div className="mx-auto flex items-center justify-between px-4 py-3 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(14,10,31,0.5)]">
        <button className="p-2 rounded-2xl bg-gradient-to-br from-[#A259FF]/40 to-[#3A2DFF]/40 border border-white/10 text-white shadow-[0_0_20px_rgba(162,89,255,0.35)]">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-2xl text-white/80 hover:text-white transition-colors">
          <Shirt className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-2xl text-white/80 hover:text-white transition-colors">
          <Layers className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-2xl text-white/80 hover:text-white transition-colors">
          <Calendar className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-2xl text-white/80 hover:text-white transition-colors">
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
