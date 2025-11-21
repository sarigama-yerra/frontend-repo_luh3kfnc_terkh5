import { motion } from 'framer-motion';
import { Shirt, PlusSquare, CalendarDays, ShoppingBag, Images } from 'lucide-react';

const tiles = [
  { title: 'My Wardrobe', icon: Shirt },
  { title: 'Create Outfit', icon: PlusSquare },
  { title: 'Weekly Planner', icon: CalendarDays },
  { title: 'Shopping Assistant', icon: ShoppingBag },
  { title: 'Lookbook', icon: Images },
];

function QuickAccess() {
  return (
    <div className="px-5 mt-5 pb-28">
      <div className="grid grid-cols-2 gap-3">
        {tiles.map((t, i) => (
          <motion.button
            key={t.title}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(162,89,255,0.25)' }}
            whileTap={{ scale: 0.96 }}
            className="p-4 rounded-2xl flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 text-left"
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#A259FF]/30 to-[#3A2DFF]/30 border border-white/10">
              <t.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-sm font-medium">{t.title}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
