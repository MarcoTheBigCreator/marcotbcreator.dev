'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/cn';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.01),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} aria-live="polite" aria-label={words}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-white opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
