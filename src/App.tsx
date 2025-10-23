import { Wine, MessageCircle, Gift } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ChatPreview } from './components/ChatPreview';
import { ShopLogos } from './components/ShopLogos';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import { Button } from './components/ui/button';
import { motion } from 'framer-motion';

export default function App() {
  const telegramLink = "https://t.me/+EiA31XyvLGlmZDI0";

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      {/* Sticky bottom CTA for mobile - shows after scroll */}
      <StickyBottomCTA telegramLink={telegramLink} />
      
      <main className="mx-auto max-w-[800px] px-5 py-6 md:py-12">
        
        {/* 1️⃣ Hero Section */}
        <HeroSection telegramLink={telegramLink} />

        {/* 2️⃣ Screenshot / Preview Block */}
        <section className="mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center text-[#b0b0b0] text-sm mb-6"
          >
            Așa arată postările:
          </motion.p>
          <ChatPreview />

          {/* Shop Logos Section */}
          <div className="mt-12">
            <ShopLogos />
          </div>
        </section>

        {/* 3️⃣ CTA Section - in thumb zone */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 pb-16"
        >
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#5B8CFF] hover:bg-[#4a7ae6] text-white font-semibold rounded-full px-10 py-6 shadow-lg transition-all w-full max-w-[340px]"
            >
              Intră pe Telegram
            </Button>
          </a>
        </motion.section>

        {/* 5️⃣ Footer */}
        <footer className="text-center text-[#808080] text-xs pt-8 pb-6 border-t border-[#2a2a2a]">
          <p>18+ • Consumă responsabil</p>
          <p className="mt-2">Nu suntem afiliați cu magazinele</p>
        </footer>
      </main>
    </div>
  );
}
