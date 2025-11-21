import { motion } from 'framer-motion';

function OutfitCard() {
  return (
    <div className="px-5 mt-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl overflow-hidden relative border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(14,10,31,0.5)]"
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop"
          alt="Outfit"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">Today’s Outfit</h3>
          <p className="text-[#D1D1D1] text-sm mt-1">Minimal streetwear fit with layered textures and neutral tones.</p>
          <button
            className="mt-3 px-4 py-2 text-sm text-white rounded-xl border border-white/15 bg-gradient-to-r from-[#3A2DFF]/40 to-[#A259FF]/40 hover:from-[#3A2DFF]/60 hover:to-[#A259FF]/60 transition-all shadow-[0_0_20px_rgba(162,89,255,0.25)]"
          >
            View Outfit
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default OutfitCard;
