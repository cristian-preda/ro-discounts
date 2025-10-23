import { Plus } from 'lucide-react';

export function ShopLogos() {
  return (
    <div className="max-w-[600px] mx-auto">
      <p className="text-center text-[#b0b0b0] text-sm mb-6">
        Currently tracking deals from
      </p>
      
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {/* Kaufland Logo */}
        <div className="flex items-center justify-center bg-white rounded-2xl px-8 py-6 shadow-lg min-w-[140px] transition-transform hover:scale-105">
          <div className="text-center">
            <div className="text-[#E30613] tracking-tight" style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Arial, sans-serif' }}>
              Kaufland
            </div>
          </div>
        </div>

        {/* Freshful Logo */}
        <div className="flex items-center justify-center bg-[#00A86B] rounded-2xl px-8 py-6 shadow-lg min-w-[140px] transition-transform hover:scale-105">
          <div className="text-center">
            <div className="text-white tracking-tight" style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'system-ui, sans-serif' }}>
              Freshful
            </div>
          </div>
        </div>

        {/* More Coming Soon */}
        <div className="flex flex-col items-center justify-center bg-[#242424] border-2 border-dashed border-[#404040] rounded-2xl px-8 py-6 min-w-[140px] transition-all hover:border-[#5B8CFF]">
          <Plus className="w-8 h-8 text-[#5B8CFF] mb-1" />
          <div className="text-[#808080] text-sm">More soon</div>
        </div>
      </div>

      <p className="text-center text-[#808080] text-xs mt-6 max-w-[400px] mx-auto">
        We're constantly adding new retailers. Join now to never miss a deal.
      </p>
    </div>
  );
}
