'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { titleFont } from '@/config';

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  title,
}: CardStackProps) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startFlipping = useCallback(() => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCards((previous) => {
        if (previous.length < 2) return previous;
        const next = [...previous];
        next.unshift(next.pop()!);
        return next;
      });
    }, 6000);
  }, []);

  useEffect(() => {
    startFlipping();
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [startFlipping]);

  const flipCardOnClick = (index: number) => {
    setCards((previous) => {
      if (!previous[index]) return previous;
      const next = [...previous];
      const [card] = next.splice(index, 1);
      next.push(card);
      return next;
    });
    startFlipping();
  };

  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-neutral-900  w-full h-full rounded-3xl p-6 shadow-xl border border-white/20 flex flex-col justify-between"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
            onClick={() => flipCardOnClick(index)}
          >
            <h1
              className={`${titleFont.className} text-4xl font-bold text-white drop-shadow-text mb-3`}
            >
              {title}
            </h1>
            <div className="font-normal text-gray-300">{card.content}</div>
            <div>
              <p
                className={`${titleFont.className} font-semibold text-3xl mt-4 text-violet-400 drop-shadow-purple`}
              >
                {card.name}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
