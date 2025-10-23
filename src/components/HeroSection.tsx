import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, TrendingDown, Users } from 'lucide-react';

interface HeroSectionProps {
  telegramLink: string;
}

export function HeroSection({ telegramLink }: HeroSectionProps) {
  return (
    <section className="relative text-center mb-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#5B8CFF] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      {/* Status Badge */}
      <div className="flex justify-center mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <Badge 
          variant="outline" 
          className="bg-[#242424] border-[#5B8CFF]/30 text-[#5B8CFF] px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
        >
          <Clock className="w-3.5 h-3.5 mr-2 inline" />
          Live today at 18:00
        </Badge>
      </div>

      {/* Main Headline */}
      <h1 className="mb-3 text-[#f5f5f5] max-w-[600px] mx-auto leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        Daily Alcohol Discounts.<br />
        <span className="text-[#5B8CFF]">Straight to Telegram.</span>
      </h1>

      {/* Subtext */}
      <p className="mb-6 text-[#b0b0b0] max-w-[500px] mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
        We post Romania's best deals every evening at 18:00 — free, 18+ only.
      </p>

      {/* Social Proof Stats */}
      <div className="flex items-center justify-center gap-4 mb-8 text-sm text-[#808080] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4 text-[#5B8CFF]" />
          <span>2,300+ members</span>
        </div>
        <div className="w-1 h-1 bg-[#404040] rounded-full" />
        <div className="flex items-center gap-1.5">
          <TrendingDown className="w-4 h-4 text-[#5B8CFF]" />
          <span>Up to 60% off</span>
        </div>
      </div>

      {/* Small Note - moved BEFORE button for better hierarchy */}
      <p className="mb-6 text-[#606060] text-xs max-w-[400px] mx-auto animate-in fade-in duration-700 delay-400">
        We send 2–4 short messages per day because Telegram has limits.
      </p>

      {/* CTA Button - now in thumb zone */}
      <div className="animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
        <a href={telegramLink} target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg"
            className="bg-[#5B8CFF] hover:bg-[#4a7ae6] text-white rounded-full px-10 py-7 shadow-2xl hover:shadow-[#5B8CFF]/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden w-full max-w-[340px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join on Telegram
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a7ae6] to-[#5B8CFF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </a>
      </div>
    </section>
  );
}
