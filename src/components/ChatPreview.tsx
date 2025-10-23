import { motion } from 'framer-motion';

export function ChatPreview() {
  const deals = [
    {
      emoji: "🍷",
      title: "Chianti Classico DOCG",
      price: "29.90 Lei",
      oldPrice: "49.90 Lei",
      discount: "-40%",
      store: "Kaufland"
    },
    {
      emoji: "🍺",
      title: "Stella Artois 6-Pack",
      price: "19.90 Lei",
      oldPrice: "27.90 Lei",
      discount: "-29%",
      store: "Kaufland"
    },
    {
      emoji: "🥃",
      title: "Jameson Irish Whiskey 700ml",
      price: "69.90 Lei",
      oldPrice: "89.90 Lei",
      discount: "-22%",
      store: "Freshful"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[380px] mx-auto"
    >
      {/* Phone Mockup Container */}
      <div className="bg-[#242424] rounded-3xl p-3 shadow-xl">
        {/* Phone Screen */}
        <div className="bg-[#0e1621] rounded-[20px] overflow-hidden">
          {/* Telegram Header */}
          <div className="bg-[#1c2733] px-4 py-3 flex items-center gap-3 border-b border-[#2a3847]">
            <div className="w-9 h-9 bg-[#5B8CFF] rounded-full flex items-center justify-center text-xl">
              🍷
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">Oferte Alcool RO</div>
              <div className="text-[#7e8e9f] text-xs">canal</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-3 space-y-2">
            {/* Channel Message */}
            <div className="bg-[#1c2733] rounded-2xl rounded-tl-md p-3 max-w-[90%]">
              <p className="text-[#f5f5f5] text-sm mb-2.5">
                Oferte astăzi:
              </p>

              {deals.map((deal, index) => (
                <div key={index} className="mb-2.5 last:mb-0 pb-2.5 last:pb-0 border-b border-[#2a3847] last:border-0">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">{deal.emoji}</span>
                    <div className="flex-1">
                      <p className="text-[#f5f5f5] text-sm">{deal.title}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[#5B8CFF] font-semibold text-sm">{deal.price}</span>
                        <span className="text-[#808080] line-through text-xs">{deal.oldPrice}</span>
                        <span className="text-[#4ade80] text-xs">{deal.discount}</span>
                      </div>
                      <p className="text-[#7e8e9f] text-xs mt-0.5">{deal.store}</p>
                    </div>
                  </div>
                </div>
              ))}

              <p className="text-[#7e8e9f] text-xs text-right mt-1.5">12:04</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
