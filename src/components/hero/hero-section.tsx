import Link from 'next/link';
import { Bilibili, Github, Gmail, Juejin } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { TypeIntro } from './type-intro';

const Logos: { [key: string]: React.ReactNode } = {
  Github: <Github className="text-base" />,
  Gmail: <Gmail className="text-base" />,
  Bilibili: <Bilibili className={`text-base text-[#00AEEC]`} />,
  掘金: <Juejin className={`text-base text-[#2985fc]`} />,
};

export const socialMediaList: Array<{ label: keyof typeof Logos; link: string }> = [
  { label: 'Github', link: 'https://github.com/liaoyio' },
  { label: 'Gmail', link: `mailto:a2417276459@gmail.com` },
  { label: 'Bilibili', link: 'https://space.bilibili.com/439436121' },
  { label: '掘金', link: 'https://juejin.cn/user/4195392104437758' },
];

export const HeroSection = () => {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="flex min-h-full max-w-screen-md flex-col justify-center gap-5 px-6 md:px-10 2xl:max-w-7xl">
      <p
        className="animate-fade-up animate-ease-in-out text-2xl tracking-widest md:text-5xl"
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        你好，我是
      </p>
      <strong
        className={cn(
          `bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black tracking-widest md:text-6xl`,
          'animate-fade-up animate-ease-in-out font-extrabold',
        )}
        style={{
          WebkitTextFillColor: 'transparent',
          animationDelay: `${getDelay()}ms`,
          lineHeight: 1.2
        }}
      >
        Liaoyi
      </strong>
      <div
        className={cn('animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <TypeIntro />
      </div>
      <p
        className={cn(
          'text-2xl tracking-widest md:text-5xl',
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        喜欢
        <span className={`font-semibold text-[#00d8ff]`}>React</span>、
        <span className={`font-semibold text-[#007acc]`}>TypeScript</span>
        <span className="ml-4">\owo/ ~</span>
      </p>
      <p
        className={cn(
          'text-muted-foreground text-base tracking-widest md:text-2xl',
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        我在这个网站记录我的成长，努力 💪 成为一个更好的程序员。
      </p>
      <div
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <Link href="/posts" className={cn(buttonVariants({ variant: 'outline' }))}>
          我的博客
        </Link>
        <Link href="/about" className={cn(buttonVariants({ variant: 'outline' }))}>
          关于我
        </Link>
      </div>

      <ul
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {socialMediaList.map((el) => (
          <li key={el.link}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {Logos[el.label]}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{el.label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};
