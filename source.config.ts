import { remarkMermaid } from '@theguild/remark-mermaid';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
// https://fumadocs.vercel.app/docs/headless/mdx/remark-docgen
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen';
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  dir: 'content/posts',
  docs: {
    async: true,
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      author: z.string().default('liaoyi'),
      date: z.string().date().or(z.date()).optional(),
      tags: z.array(z.string()).optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      inline: 'tailing-curly-colon',
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
        {
          name: 'transformers:remove-notation-escape',
          code(hast) {
            for (const line of hast.children) {
              if (line.type !== 'element') continue;

              const lastSpan = line.children.findLast((v) => v.type === 'element');

              const head = lastSpan?.children[0];
              if (head?.type !== 'text') return;

              head.value = head.value.replace(/\[\\!code/g, '[!code');
            }
          },
        },
      ],
    },
    remarkPlugins: [
      remarkMermaid, // Markdown 作图工具
      [remarkInstall, { persist: { id: 'package-manager' } }], // 多代码块切换
      [remarkDocGen, { generators: [fileGenerator()] }], // 文档备注生成 代码示例引用
    ],
  },
});
