import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(text: string) {
  return (text.length / 700 + 1).toFixed();
}

export const isBrowser = () => {
  // 代码来自：https://ahooks.js.org/zh-CN/guide/blog/ssr
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};
