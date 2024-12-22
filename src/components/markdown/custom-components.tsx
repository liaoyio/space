import { JSX } from 'react';

const CodeInLine = ({ children }: { children: JSX.Element }) => (
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium before:content-none after:content-none">
    {children}
  </code>
);

const BlockQuote = ({ children }: { children: JSX.Element }) => (
  <blockquote
    role="alert"
    className="w-full rounded-lg border bg-muted/50 px-4 py-3 text-sm text-foreground"
  >
    {children}
  </blockquote>
);

const LinkHref = ({ url, children }: { url: string; children: JSX.Element }) => {
  return (
    <a href={url} target={url.startsWith('#') ? '_self' : '_blank'}>
      {children}
    </a>
  );
};

export const CustomComponents = {
  a: LinkHref,
  code: CodeInLine,
  block_quote: BlockQuote,
};
