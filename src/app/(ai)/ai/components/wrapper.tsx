import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Pin, Left, UpgradeIcon } from '@/app/(ai)/ai/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { CardItem, ToolCard } from './_data';

// eslint-disable-next-line prettier/prettier
interface Props extends React.HTMLAttributes<HTMLDivElement>, React.PropsWithChildren {}

type TitleProps = {
  className?: string;
  title?: string;
  description?: string;
};

export const Title = ({ className, title, description }: TitleProps) => {
  return (
    <div>
      <div className={cn('space-y-1', className)}>
        <h1 className="text-xl font-medium tracking-tight sm:text-2xl">{title}</h1>
        <p className="text-sm font-normal text-neutral-500 dark:text-neutral-400 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export const MainWrapper = ({ className, children, ...props }: Props) => {
  return (
    <div {...props} className={cn('flex-1 space-y-6 overflow-y-auto p-4 sm:p-6', className)}>
      {children}
    </div>
  );
};

export const Getstarted = ({ list }: { list: CardItem[] }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-6">
        <p className="text-base font-medium tracking-tight">Get started</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {list.map((item) => (
          <CardItemBox key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export const CardItemBox = ({ icon, title, description, linkText, link }: CardItem) => {
  const Icon = icon;
  return (
    <Link
      href={link}
      className="shadow-xs group relative flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-900 sm:px-5"
    >
      <div className="inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 group-hover:bg-green-500 group-hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-green-600">
        <Icon className="size-6" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-base font-medium tracking-tight text-gray-950 dark:text-white">
          {title}
        </p>
        <p className="mt-1 line-clamp-2 text-sm font-normal text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <p className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-green-500 transition-all duration-200 hover:text-green-600 dark:text-green-600 dark:hover:text-green-500">
          {linkText}
          <ArrowUpRight className="size-4" />
        </p>
      </div>
    </Link>
  );
};

export const PinnedTools = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-lg font-medium tracking-tight text-gray-950 dark:text-white">
          Pinned Tools
        </p>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          Your pinned tools for quick access.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <Link
          href="/ai/code-converter?inputLang=Assembly&amp;outputLang=Ada"
          className="group relative space-y-2"
        >
          <div className="absolute right-2 top-4 z-10 cursor-pointer p-1.5 text-green-500 hover:text-gray-400 dark:text-green-600 dark:hover:text-gray-200">
            <Pin className="size-5" />
          </div>
          <div className="grid aspect-video place-items-center overflow-hidden rounded-xl bg-gray-50 transition-all duration-200 group-hover:bg-gray-200/50 dark:bg-gray-800 dark:group-hover:bg-gray-700/60">
            <div className="flex items-center justify-center gap-4">
              <Image
                alt="Assembly logo"
                width={32}
                height={32}
                className="size-8 shrink-0 text-transparent sm:size-12"
                src="/lang-logos/assembly.svg"
              />

              <Left className="size-5 text-gray-400 sm:size-6" />
              <Image
                alt="Assembly logo"
                width={32}
                height={32}
                className="size-8 shrink-0 text-transparent sm:size-12"
                src="/lang-logos/ada.svg"
              />
            </div>
          </div>
          <div className="flex text-base font-medium tracking-tight text-gray-950 dark:text-white">
            Assembly to Ada
          </div>
        </Link>
      </div>
    </div>
  );
};

export const PopularTools = ({ list }: { list: ToolCard[] }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-lg font-medium tracking-tight text-gray-950 dark:text-white">
          Popular Tools
        </p>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          Explore some of the most frequently used tools by our community.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {list.map((item) => (
          <PopularToolCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export const PopularToolCard = ({ url, imageUrl, description, title }: ToolCard) => {
  return (
    <Link href={url} className="group relative space-y-2">
      <div className="grid aspect-video place-items-center overflow-hidden rounded-xl bg-gray-50 transition-all duration-200 group-hover:bg-gray-200/50 dark:bg-gray-800 dark:group-hover:bg-gray-700/60">
        <div className="flex items-center justify-center gap-4">
          {imageUrl?.length && (
            <Image
              alt={`${imageUrl[0].split('/')[2].split('.')[0]} logo`}
              width={32}
              height={32}
              className="size-8 shrink-0 text-transparent sm:size-12"
              src={imageUrl[0]}
            />
          )}
          {imageUrl?.length && imageUrl.length >= 2 && (
            <>
              <Left className="size-5 text-gray-400 sm:size-6" />
              <Image
                alt={`${imageUrl[1].split('/')[2].split('.')[0]} logo`}
                width={32}
                height={32}
                className="size-8 shrink-0 text-transparent sm:size-12"
                src={imageUrl[1]}
              />
            </>
          )}
        </div>
      </div>

      <div className="space-y-0.5">
        <p className="text-base font-medium tracking-tight text-gray-950 dark:text-white">
          {title}
        </p>
        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export const SiderPlanCard = () => {
  return (
    <>
      <div className="shadow-xs mb-3 ml-2 space-y-3 overflow-hidden rounded-md border border-gray-200 bg-white p-4 group-data-[collapsible=icon]:hidden dark:border-gray-700 dark:bg-gray-900 dark:shadow-xl">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-950 dark:text-white">Free Plan</p>
          <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
            Upgrade for more usage and to unlock additional features!
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-gray-950 dark:text-white">Credits used</p>
            <p className="text-sm font-medium text-gray-950 dark:text-white">0 / 10</p>
          </div>
          <div className="relative h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="bg-primary-500 dark:bg-primary-600 absolute inset-y-0 left-0 rounded-full"
              style={{ width: 0 }}
            />
          </div>
        </div>

        <Button className="w-full rounded-sm bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-50 dark:focus-visible:outline-0">
          Upgrade Plan
          <UpgradeIcon className="size-5" />
        </Button>
      </div>
    </>
  );
};
