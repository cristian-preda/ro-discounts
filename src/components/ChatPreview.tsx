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
    <div className="max-w-[390px] mx-auto">
      {/* Phone Mockup Container */}
      <div className="bg-[#242424] rounded-[32px] p-3 shadow-2xl">
        {/* Phone Screen */}
        <div className="bg-[#0e1621] rounded-[24px] overflow-hidden">
          {/* Telegram Header */}
          <div className="bg-[#1c2733] px-4 py-3 flex items-center gap-3 border-b border-[#2a3847]">
            <div className="w-10 h-10 bg-[#5B8CFF] rounded-full flex items-center justify-center">
              🍷
            </div>
            <div>
              <div className="text-white">Deals Romania</div>
              <div className="text-[#7e8e9f] text-xs">Daily at 18:00</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3">
            {/* Channel Message */}
            <div className="bg-[#1c2733] rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
              <p className="text-[#f5f5f5] text-sm mb-3">
                🔥 Today's deals — October 23, 2025
              </p>
              
              {deals.map((deal, index) => (
                <div key={index} className="mb-3 last:mb-0 pb-3 last:pb-0 border-b border-[#2a3847] last:border-0">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">{deal.emoji}</span>
                    <div className="flex-1">
                      <p className="text-[#f5f5f5] text-sm">{deal.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#5B8CFF]">{deal.price}</span>
                        <span className="text-[#808080] line-through text-xs">{deal.oldPrice}</span>
                        <span className="text-[#4ade80] text-xs">{deal.discount}</span>
                      </div>
                      <p className="text-[#7e8e9f] text-xs mt-1">{deal.store}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <p className="text-[#7e8e9f] text-xs text-right mt-2">18:04</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
