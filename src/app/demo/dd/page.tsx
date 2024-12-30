import Image from 'next/image';
import { cn } from '@/lib/utils';

const _icons = [
  {
    src: 'https://api.iconify.design/lineicons:nextjs.svg?color=%23ffffff',
    name: 'nextjs',
    radius: 200,
    duration: 10,
    delay: 80,
  },
  {
    src: 'https://api.iconify.design/vscode-icons:file-type-vite.svg',
    name: 'vite',
    radius: 190,
    duration: 20,
    delay: 30,
  },
  {
    src: 'https://api.iconify.design/vscode-icons:file-type-vitest.svg',
    name: 'vitest',
    radius: 190,
    duration: 20,
    delay: 80,
  },
  {
    src: 'https://api.iconify.design/logos:vue.svg',
    name: 'vue',
    radius: 190,
    duration: 10,
    delay: 80,
  },
  {
    src: 'https://api.iconify.design/logos:vueuse.svg',
    name: 'vueuse',
    radius: 190,
    duration: 10,
    delay: 80,
  },
  {
    src: 'https://api.iconify.design/vscode-icons:file-type-js-official.svg',
    name: 'js',
    radius: 200,
    duration: 10,
    delay: 80,
  },
  {
    src: 'https://api.iconify.design/devicon:typescript.svg',
    name: 'ts',
    radius: 200,
    duration: 10,
    delay: 80,
  },

  {
    src: 'https://api.iconify.design/akar-icons:vercel-fill.svg?color=%23ffffff',
    name: 'vercel-1',
    radius: 200,
    duration: 50,
    delay: 90,
  },
  {
    src: 'https://api.iconify.design/devicon:supabase.svg',
    name: 'supabase',
    radius: 300,
    duration: 60,
    delay: 130,
  },
  {
    src: 'https://api.iconify.design/vscode-icons:file-type-reactjs.svg',
    name: 'react',
    radius: 190,
    duration: 20,
  },
  {
    src: 'https://api.iconify.design/logos:react-query-icon.svg',
    name: 'react-query',
    radius: 80,
    duration: 20,
    delay: 10,
  },
  {
    src: 'https://api.iconify.design/devicon:reactrouter.svg',
    name: 'react-router',
    radius: 190,
    duration: 20,
    delay: 10,
  },
  {
    src: 'https://api.iconify.design/logos:pinia.svg',
    name: 'pinia',
    radius: 300,
    duration: 30,
    delay: 80,
  },
  {
    src: '/images/zustand.svg',
    name: 'zustand',
    radius: 300,
    duration: 60,
    delay: 80,
  },
  {
    src: 'https://api.iconify.design/devicon:antdesign.svg',
    name: 'antd',
    radius: 300,
    duration: 140,
    delay: 80,
  },
];

/*

 <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
*/

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span> */}

      <div className="grid grid-cols-5 divide-x divide-y">
        {_icons.map((it, index) => (
          <>
            <div
              className={cn(
                'flex size-32 items-center justify-center',
                index === 4 || index === 9 ? '!border-r' : '',
                index === 10 || index === 11 || index === 12 || index === 13 ? '!border-b' : '',
              )}
            >
              <Image src={it.src} width={40} height={40} alt={it.name} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
