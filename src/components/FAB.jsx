import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

function FAB() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 h-16 w-16 rounded-full grid place-items-center text-white shadow-2xl border border-white/15"
      style={{
        background:
          'radial-gradient(100% 100% at 70% 30%, rgba(58,45,255,0.9) 0%, rgba(162,89,255,0.85) 40%, rgba(0,224,255,0.9) 100%)',
        boxShadow:
          '0 15px 35px rgba(58,45,255,0.45), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 25px rgba(255,255,255,0.15)'
      }}
    >
      <Plus className="w-7 h-7" />
    </motion.button>
  );
}

export default FAB;
