import React from 'react';
import Link from 'next/link';
import { Bilibili, Github, Gmail, Juejin } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

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

export default function SocialMediaList({ getDelay }: { getDelay: () => number }) {
  return (
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
  );
}
