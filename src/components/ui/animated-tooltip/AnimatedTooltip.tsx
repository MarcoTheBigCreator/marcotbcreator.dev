'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';

export const AnimatedTooltip = ({
  items,
  children,
}: {
  items: {
    id: number;
    name: string;
    designation?: string;
    path: string;
    width?: number;
    height?: number;
    priority?: boolean;
    imageClassName?: string;
    className?: string;
  }[];
  children?: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className={`relative group ${item.className}`}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: 'nowrap',
              }}
              className="absolute -top-20 align-middle translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black/[0.96] z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-violet-700 to-transparent h-px " />
              <div className="font-light text-white relative z-30 text-base">
                {item.name}
              </div>
              {item.designation && (
                <div className="text-white text-medium">{item.designation}</div>
              )}
            </motion.div>
          )}
          <Image
            onMouseMove={handleMouseMove}
            height={item.width || 30}
            width={item.height || 30}
            priority={item.priority || false}
            src={item.path}
            alt={item.name}
            placeholder="empty"
            className={`${
              item.imageClassName
                ? item.imageClassName
                : 'object-cover !m-0 !p-0 object-top rounded-2xl h-80 w-64 border-2 group-hover:scale-105 group-hover:z-30 border-violet-950  relative transition duration-500'
            }`}
          />

          {/* Children  */}
          {children}
        </div>
      ))}
    </>
  );
};
