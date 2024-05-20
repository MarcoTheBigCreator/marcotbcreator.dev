'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
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
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-zinc-900  w-full h-full rounded-3xl p-6 shadow-xl border border-white/20 flex flex-col justify-between"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <h1 className="text-3xl font-bold text-white mb-3">Expertise</h1>
            <div className="font-normal text-white">{card.content}</div>
            <div>
              <p className="font-semibold text-2xl mt-4 text-white">
                {card.name}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
