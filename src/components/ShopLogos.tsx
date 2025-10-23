import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export function ShopLogos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[500px] mx-auto"
    >
      <p className="text-center text-[#b0b0b0] text-sm mb-6">
        Verificăm la:
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
        {/* Kaufland Logo */}
        <div className="flex items-center justify-center bg-white rounded-2xl px-6 py-4 shadow-md min-w-[120px]">
          <div className="text-center">
            <div className="text-[#E30613] tracking-tight" style={{ fontSize: '22px', fontWeight: '800', fontFamily: 'Arial, sans-serif' }}>
              Kaufland
            </div>
          </div>
        </div>

        {/* Freshful Logo */}
        <div className="flex items-center justify-center bg-[#00A86B] rounded-2xl px-6 py-4 shadow-md min-w-[120px]">
          <div className="text-center">
            <div className="text-white tracking-tight" style={{ fontSize: '22px', fontWeight: '700', fontFamily: 'system-ui, sans-serif' }}>
              Freshful
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-[#808080] text-xs">
        Mai multe magazine în curând
      </p>
    </motion.div>
  );
}
