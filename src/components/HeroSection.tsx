import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, TrendingDown, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  telegramLink: string;
}

export function HeroSection({ telegramLink }: HeroSectionProps) {
  return (
    <section className="relative text-center mb-10">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-6"
      >
        <Badge
          variant="outline"
          className="bg-[#242424] border-[#5B8CFF]/20 text-[#5B8CFF] px-3 py-1.5 rounded-full text-sm"
        >
          <Clock className="w-3 h-3 mr-1.5 inline" />
          Zilnic la 12:00
        </Badge>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-4 text-[#f5f5f5] text-2xl md:text-3xl font-semibold max-w-[500px] mx-auto leading-snug px-4"
      >
        Reduceri la alcool,<br />
        <span className="text-[#5B8CFF]">zilnic pe Telegram</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-6 text-[#b0b0b0] text-base max-w-[400px] mx-auto px-4"
      >
        Postăm ofertele bune în fiecare zi. Gratuit.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[#808080] text-sm mb-8"
      >
        18+ doar
      </motion.p>
    </section>
  );
}
