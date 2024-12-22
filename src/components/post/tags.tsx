import {
  AstroIcon,
  DockerIcon,
  EslintIcon,
  GitIcon,
  HuskyIcon,
  JavascriptIcon,
  NextjsIcon,
  PrettierIcon,
  ReactIcon,
  TailwindcssIcon,
  TypescriptIcon,
  UnocssIcon,
  ViteIcon,
  VueIcon,
  VueUseIcon,
  WebpackIcon,
} from '@/components/icons/tag-logo';

export const tagIcons = {
  astro: <AstroIcon className="size-4" />,
  docker: <DockerIcon className="size-4" />,
  eslint: <EslintIcon className="size-4" />,
  git: <GitIcon className="size-4" />,
  husky: <HuskyIcon className="size-4" />,
  javascript: <JavascriptIcon className="size-4" />,
  nextjs: <NextjsIcon className="size-4" />,
  prettier: <PrettierIcon className="size-4" />,
  react: <ReactIcon className="size-4" />,
  tailwindcss: <TailwindcssIcon className="size-4" />,
  typescript: <TypescriptIcon className="size-4" />,
  unocss: <UnocssIcon className="size-4" />,
  vite: <ViteIcon className="size-4" />,
  vue: <VueIcon className="size-4" />,
  vueuse: <VueUseIcon className="size-4" />,
  webpack: <WebpackIcon className="size-4" />,
};

type TagListProps = { tags?: (string | null)[] | null };

export const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className="flex flex-wrap gap-2 pl-0 text-xs">
      {tags?.map((tag) => (
        <li key={tag} className="flex cursor-pointer items-center hover:underline">
          <span className="mr-1">#&nbsp;{tag}</span>
          {tag && <TagPrefixIcon tag={tag.toLowerCase()} />}
        </li>
      ))}
    </ul>
  );
};

type TagPrefixIconProps = { tag: string };

export const TagPrefixIcon = ({ tag }: TagPrefixIconProps) => {
  const str = tag.replace(/\.| /g, '');
  const icon = tagIcons[str as keyof typeof tagIcons] ?? null;
  return icon;
};
