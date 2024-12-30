import React from 'react';
import { ModeItemCard } from './theme.client';

export type ModeItem = {
  title: string;
  description: string;
  htmlFor: 'dark' | 'light' | 'system';
};

export const mode_list: ModeItem[] = [
  {
    title: 'Light Mode',
    htmlFor: 'light',
    description: 'Bright &amp; clear for optimal visibility in well-lit environments.',
  },
  {
    title: 'Dark Mode',
    htmlFor: 'dark',
    description: 'Easy on the eyes, perfect for working in low-light settings.',
  },
  {
    title: 'System',
    htmlFor: 'system',
    description: 'Automatically adapts to match your device&apos;s system theme.',
  },
];

export function ThemeSwitcher() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {mode_list.map((item) => (
        <ModeItemCard key={item.htmlFor} {...item} />
      ))}
    </div>
  );
}
