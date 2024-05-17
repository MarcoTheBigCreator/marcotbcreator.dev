'use client';
import React from 'react';
import { AnimatedTooltip } from '../animated-tooltip/AnimatedTooltip';

const profileImage = [
  {
    id: 1,
    name: `That\'s me`,
    designation: 'The Big Creator (nobody calls me that)',
    image:
      'https://res.cloudinary.com/dmlpgks2h/image/upload/fl_preserve_transparency/v1715931102/Portfolio/ipbpcd4m2zvcixfxvzzb.jpg?_s=public-apps',
  },
];

export function ProfileImage() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={profileImage} />
    </div>
  );
}
