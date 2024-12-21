'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonStar, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="size-10">
      {mounted ? (
        <>
          {theme === 'light' ? (
            <button
              aria-label="Light theme"
              className="flex size-full items-center justify-center rounded-full text-xl transition-colors duration-300 ease-in-out hover:bg-black/5"
              onClick={() => setTheme('dark')}
            >
              <Sun />
            </button>
          ) : (
            <button
              aria-label="Dark theme"
              className="flex size-full items-center justify-center rounded-full text-xl transition-colors duration-300 ease-in-out hover:bg-white/10"
              onClick={() => setTheme('light')}
            >
              <MoonStar />
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ThemeToggle;
