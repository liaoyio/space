import {
  HomeIcon,
  ConverterIcon,
  ExplainerIcon,
  GeneratorIcon,
  FilesIcon,
  HistoryIcon,
  CodeConverter,
  CodeExplainer,
  CodeGenerator,
} from './icons';

export type MenuItem = {
  title: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

export const menu_list: MenuItem[] = [
  { title: 'Home', icon: HomeIcon, href: '/ai' },
  { title: 'Converter', icon: ConverterIcon, href: '/ai/code-converter' },
  { title: 'Explainer', icon: ExplainerIcon, href: '/ai/code-explainer' },
  { title: 'Generator', icon: GeneratorIcon, href: '/ai/code-generator' },
];
// explainer/page.tsx   generator/page.tsx   files/page.tsx  history/page.tsx

export const sub_menu_list: MenuItem[] = [
  { title: 'Files', icon: FilesIcon, href: '/ai/files' },
  { title: 'History', icon: HistoryIcon, href: '/ai/history' },
];

export type CardItem = {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  title?: string;
  description?: string;
  link: string;
  linkText?: string;
};

export const startedList: CardItem[] = [
  {
    icon: CodeConverter,
    title: 'Code Converter',
    description: 'Seamlessly transform code across languages and frameworks with AI.',
    link: '/ai/code-converter',
    linkText: 'Convert Code Now',
  },
  {
    icon: CodeExplainer,
    title: 'Code Explainer',
    description: 'Understand complex code snippets with clear, AI-powered explanations.',
    link: '/ai/code-explainer',
    linkText: 'Get Code Explanation',
  },
  {
    icon: CodeGenerator,
    title: 'Code Generator',
    description: 'Generate clean, efficient code tailored to your needs in seconds.',
    link: '/ai/code-generator',
    linkText: 'Generate Code',
  },
];

export type ToolCard = {
  url: string;
  imageUrl?: string[];
  title?: string;
  description?: string;
};

export const popularTools: ToolCard[] = [
  {
    url: '/ai/code-converter?inputLang=Python&outputLang=JavaScript',
    imageUrl: ['/lang-logos/python.svg', '/lang-logos/js.svg'],
    title: 'Python to JavaScript',
    description: 'Used by 10,000+ users',
  },
  {
    url: '/ai/code-converter?inputLang=TypeScript',
    imageUrl: ['/lang-logos/typescript.svg'],
    title: 'TypeScript Code Generator',
    description: 'Used by 2,500+ users',
  },
  {
    url: '/ai/code-converter?inputLang=Ruby',
    imageUrl: ['/lang-logos/ruby.svg'],
    title: 'Ruby Code Explainer',
    description: 'Used by 2,500+ users',
  },

  {
    url: '/ai/code-converter?inputLang=C&amp;outputLang=Java',
    imageUrl: ['/lang-logos/c.svg', '/lang-logos/java.svg'],
    title: 'C to Java',
    description: 'Used by 7,500+ users',
  },
];
