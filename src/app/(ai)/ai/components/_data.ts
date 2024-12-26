import {
  HomeIcon,
  ConverterIcon,
  ExplainerIcon,
  GeneratorIcon,
  FilesIcon,
  HistoryIcon,
  CodeConverter,
  CodeExplainer,
  CodeGenerator
} from './icons';

export const menu_list = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Converter', icon: ConverterIcon },
  { title: 'Explainer', icon: ExplainerIcon },
  { title: 'Generator', icon: GeneratorIcon },
];

export const sub_menu_list = [
  { title: 'Files', icon: FilesIcon },
  { title: 'History', icon: HistoryIcon },
];

export type CardItem = {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  title?: string;
  description?: string;
  link: string
  linkText?: string
}

export const startedList: CardItem[]  = [
  {
    icon: CodeConverter,
    title: 'Code Converter',
    description: 'Seamlessly transform code across languages and frameworks with AI.',
    link: '/code-converter',
    linkText: 'Convert Code Now',

  },
  {
    icon: CodeExplainer,
    title: 'Code Explainer',
    description: 'Understand complex code snippets with clear, AI-powered explanations.',
    link: '/code-explainer',
    linkText: 'Get Code Explanation'
  },
  {
    icon: CodeGenerator,
    title: 'Code Generator',
    description: 'Generate clean, efficient code tailored to your needs in seconds.',
    link: '/code-generator',
    linkText: 'Generate Code'
  },
]


export type ToolCard = {
  url: string
  imageUrl?: string[];
  title?: string;
  description?: string;
}

export const popularTools: ToolCard[]  = [
  {
    url: '/code-converter?inputLang=Python&outputLang=JavaScript',
    imageUrl: ['/lang-logos/python.svg','/lang-logos/javascript.svg'],
    title: 'Python to JavaScript',
    description: 'Used by 10,000+ users'
  },
  {
    url: '/code-converter?inputLang=TypeScript',
    imageUrl: ['/lang-logos/typescript.svg'],
    title: 'TypeScript Code Generator',
    description: 'Used by 2,500+ users'
  },
  {
    url: '/code-converter?inputLang=Ruby',
    imageUrl: ['/lang-logos/ruby.svg'],
    title: 'Ruby Code Explainer',
    description: 'Used by 2,500+ users'
  },

  {
    url: '/code-converter?inputLang=C&amp;outputLang=Java',
    imageUrl: ['/lang-logos/c.svg',  '/lang-logos/java.svg'],
    title: 'C to Java',
    description: 'Used by 7,500+ users'
  },
]

