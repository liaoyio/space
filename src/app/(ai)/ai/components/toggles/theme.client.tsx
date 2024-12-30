'use client';

import { useTheme } from 'next-themes';
import { DarkModeIcon, LightModeIcon, SystemModeIcon } from '@/app/(ai)/ai/components/icons';
import { cn } from '@/lib/utils';
import { ModeItem } from './theme';

export const ModeItemCard = ({ title, description, htmlFor }: ModeItem) => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <label htmlFor={htmlFor}>
      <input
        id={htmlFor}
        onChange={() => setTheme(htmlFor)}
        checked={theme === htmlFor}
        className="peer pointer-events-none absolute left-2 top-2 appearance-none opacity-0"
        type="radio"
        name="theme"
      />

      <div
        className={cn(
          'relative flex cursor-pointer items-start justify-between gap-3 overflow-hidden rounded-lg p-4 shadow-sm ring-1 transition-all duration-200',
          'bg-white text-gray-600 ring-gray-200 hover:bg-gray-50 hover:ring-gray-400/60',
          'dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-gray-800',
          'peer-checked:bg-[#f2f8f4] peer-checked:text-green-600 peer-checked:ring-green-500',
          'dark:peer-checked:bg-green-950/50 dark:peer-checked:ring-green-800',
        )}
      >
        <div className="shadow-xs inline-flex size-8 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-700">
          {htmlFor === 'light' && <LightModeIcon className="size-5" />}
          {htmlFor === 'dark' && <DarkModeIcon className="size-5" />}
          {htmlFor === 'system' && <SystemModeIcon className="size-5" />}
        </div>
        <div className="min-w-0 flex-1 space-y-0.5">
          <p className="text-sm font-medium text-gray-950 dark:text-white">{title}</p>
          <p className="pt-1 text-xs font-normal text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </label>
  );
};
