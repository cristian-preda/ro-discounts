import { Button } from './ui/button';
import { useEffect, useState } from 'react';

interface StickyBottomCTAProps {
  telegramLink: string;
}

export function StickyBottomCTA({ telegramLink }: StickyBottomCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (roughly 400px)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent transition-all duration-300 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="block">
        <Button 
          size="lg"
          className="bg-[#5B8CFF] hover:bg-[#4a7ae6] text-white rounded-full px-8 py-6 shadow-2xl hover:shadow-[#5B8CFF]/30 transition-all w-full"
        >
          Join on Telegram
        </Button>
      </a>
    </div>
  );
}
