import { Wine, MessageCircle, Gift } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ChatPreview } from './components/ChatPreview';
import { ShopLogos } from './components/ShopLogos';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import { Button } from './components/ui/button';

export default function App() {
  const telegramLink = "https://t.me/yourdealschannel"; // Replace with actual Telegram channel link

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      {/* Sticky bottom CTA for mobile - shows after scroll */}
      <StickyBottomCTA telegramLink={telegramLink} />
      
      <main className="mx-auto max-w-[800px] px-6 py-8 md:py-12">
        
        {/* 1️⃣ Hero Section */}
        <HeroSection telegramLink={telegramLink} />

        {/* 2️⃣ Screenshot / Preview Block */}
        <section className="mb-12">
          <ChatPreview />
          <p className="text-center text-[#b0b0b0] text-sm mt-4 mb-8">
            Example of today's post.
          </p>
          
          {/* Shop Logos Section */}
          <div className="mt-12">
            <ShopLogos />
          </div>
        </section>

        {/* 3️⃣ Value Bullets */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[700px] mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-[#242424] rounded-2xl shadow-md">
              <Wine className="w-10 h-10 text-[#5B8CFF] mb-3" />
              <p className="text-[#f5f5f5]">Real discounts only</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#242424] rounded-2xl shadow-md">
              <MessageCircle className="w-10 h-10 text-[#5B8CFF] mb-3" />
              <p className="text-[#f5f5f5]">1 daily drop at 18:00</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#242424] rounded-2xl shadow-md">
              <Gift className="w-10 h-10 text-[#5B8CFF] mb-3" />
              <p className="text-[#f5f5f5]">Free channel, no spam</p>
            </div>
          </div>
        </section>

        {/* 4️⃣ Second CTA Section */}
        <section className="text-center mb-16 py-8">
          <p className="mb-6 text-[#f5f5f5]">
            Ready for today's deals?
          </p>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              className="bg-[#5B8CFF] hover:bg-[#4a7ae6] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Join on Telegram
            </Button>
          </a>
        </section>

        {/* 5️⃣ Footer */}
        <footer className="text-center text-[#808080] text-sm pt-8 border-t border-[#2a2a2a]">
          <p>18+ • Drink responsibly • Not affiliated with retailers.</p>
        </footer>
      </main>
    </div>
  );
}
