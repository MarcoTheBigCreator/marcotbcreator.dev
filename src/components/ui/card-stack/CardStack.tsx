'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { titleFont } from '@/config';

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  title,
}: CardStackProps) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 6000);
  };

  const flipCardOnClick = (index: number) => {
    clearInterval(interval);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      const card = newArray.splice(index, 1)[0];
      newArray.push(card);
      return newArray;
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
