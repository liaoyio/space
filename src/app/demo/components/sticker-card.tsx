import React from 'react';
import { Phone, ChartNoAxesColumnDecreasing, Timer } from 'lucide-react'

import { cn } from '@/lib/utils';

const StickerCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <a
        className={cn(
          'relative z-10 mt-0 block size-full overflow-hidden',
          'rounded-lg rounded-tr-[26px]',
          'px-4 pb-4 pt-5',
          // Card
          'bg-white font-normal leading-8 text-gray-900 dark:bg-gray-900 dark:text-gray-50',
          'ring-1 ring-inset ring-gray-200 dark:ring-gray-800',

          // Animation
          'transition-all duration-200 ease-in-out',

          // Before Element (Corner Fold)
          'before:content-[""]',
          'before:absolute before:right-0 before:top-0',
          'before:z-[3]',
          'before:h-[30px] before:w-[30px]',
          'before:-translate-y-1/2 before:translate-x-1/2',
          'before:rotate-45',
          'before:bg-white dark:before:bg-gray-950',
          'before:ring-1 before:ring-gray-200 dark:before:ring-gray-800',
          'before:transition-all before:duration-200 before:ease-in-out',

          // After Element (Corner Shadow)
          'after:content-[""]',
          'after:absolute after:right-0 after:top-0',
          'after:z-[2]',
          'after:size-7',
          'after:-translate-y-2 after:translate-x-2',
          'after:rounded-bl-lg',
          'after:border after:bg-gray-50 dark:after:border-gray-800 dark:after:bg-gray-900',
          'after:shadow-sm',
          'after:transition-all after:duration-200 after:ease-in-out',

          // Hover States
          'hover:cursor-pointer',
          'hover:rounded-tr-[45px]',
          'hover:before:h-[50px] hover:before:w-[50px]',
          'hover:after:h-[42px] hover:after:w-[42px]',
          'after:hover:shadow-lg after:hover:shadow-black/5',
        )}
      >
        <div>
          <div className="relative flex items-center gap-2">
            <div className="absolute -left-4 h-5 w-1 rounded-r-sm bg-blue-500" />
            <Icon className="h-5 w-5 shrink-0 text-blue-500" />
            <h3 className="font-medium text-gray-900 dark:text-gray-50">
              {title}
            </h3>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400 sm:text-sm">
            {children}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Example() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StickerCard icon={Phone} title="Call Analytics">
          Real-time voice analytics and sentiment tracking to improve customer
          interactions.
        </StickerCard>

        <StickerCard icon={ChartNoAxesColumnDecreasing} title="Performance Metrics">
          Comprehensive reporting on KPIs including call resolution rates and
          response times.
        </StickerCard>

        <StickerCard icon={Timer} title="Queue Management">
          Smart call routing and queue optimization to minimize wait times and
          maximize agent efficiency.
        </StickerCard>
      </div>
    </>
  );
}
