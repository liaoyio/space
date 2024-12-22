import { TinaMarkdown } from 'tinacms/dist/rich-text';
import GitHubGistEmbed from '@/components/embed//github-gist';
import CodeSandboxEmbed from '@/components/embed/code-sandbox';
import StackBlitzEmbed from '@/components/embed/stack-blitz';
import CodeBlock from './code-block';
import { CustomComponents } from './custom-components';
import Heading from './heading';

export type TinaMarkdownProps = React.ComponentProps<typeof TinaMarkdown>;
export type MarkdownProps = Omit<TinaMarkdownProps, 'components'>;

const components = {
  CodeSandboxEmbed,
  GitHubGistEmbed,
  Heading,
  StackBlitzEmbed,
  code_block: CodeBlock,
  ...CustomComponents,
} as TinaMarkdownProps['components'];

const Markdown: React.FC<MarkdownProps> = ({ ...props }) => {
  return <TinaMarkdown {...props} components={components} />;
};

export default Markdown;
