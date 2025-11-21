import { motion } from 'framer-motion';
import { Shirt, Timer, Archive } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileTap={{ scale: 0.96 }}
    className="flex-1 min-w-[110px] p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl shadow-[#0E0A1F]/40 hover:shadow-[0_0_35px_rgba(162,89,255,0.25)] hover:border-[rgba(162,89,255,0.35)] transition-all"
    style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), 0 10px 30px rgba(14,10,31,0.35)'}}
  >
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#A259FF]/40 to-[#3A2DFF]/40 border border-white/10">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-xs text-[#D1D1D1]">{label}</div>
        <div className="text-lg font-semibold text-white">{value}</div>
      </div>
    </div>
  </motion.div>
);

function QuickStats() {
  return (
    <div className="px-5 mt-6">
      <div className="p-4 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10">
        <div className="flex gap-3">
          <StatCard icon={Shirt} label="Total Items" value="128" delay={0.1} />
          <StatCard icon={Timer} label="Most Worn" value="Denim Jacket" delay={0.2} />
          <StatCard icon={Archive} label="Least Worn" value="Loafers" delay={0.3} />
        </div>
      </div>
    </div>
  );
}

export default QuickStats;
