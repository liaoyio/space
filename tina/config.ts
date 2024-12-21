import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'mdx',
        fields: [
          // 标题
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          // 封面图
          { type: 'string', name: 'image', label: 'Image', required: false },
          // 是否置顶
          { type: 'boolean', name: 'pin', label: 'Pin', required: false },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date Posted',
            ui: { dateFormat: 'YYYY-MM-DD' },
            required: true,
          },
          // 是否为草稿
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            required: true,
            description: 'If this is checked the post will not be published',
          },
          // 标签
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            required: false,
            list: true,
            ui: { component: 'tags' },
          },

          /* 富文本配置 */
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
              {
                name: 'CodeSandboxEmbed',
                label: 'CodeSandbox Embed',
                match: {
                  start: '{%',
                  end: '%}',
                  name: 'codesandbox',
                },
                fields: [
                  {
                    name: 'url',
                    label: 'url',
                    type: 'string',
                    required: true,
                  },
                ],
              },
              {
                name: 'StackBlitzEmbed',
                label: 'StackBlitz Embed',
                match: {
                  start: '{%',
                  end: '%}',
                  name: 'stackblitz',
                },
                fields: [
                  {
                    name: 'url',
                    label: 'url',
                    type: 'string',
                    required: true,
                  },
                ],
              },
              {
                name: 'GitHubGistEmbed',
                label: 'GitHub Gist Embed',
                match: {
                  start: '{%',
                  end: '%}',
                  name: 'githubgist',
                },
                fields: [
                  {
                    name: 'id',
                    label: 'id',
                    type: 'string',
                    required: true,
                  },
                ],
              },
              {
                name: 'Heading',
                label: 'Heading',
                fields: [
                  {
                    name: 'id',
                    type: 'string',
                  },
                  {
                    name: 'children',
                    type: 'string',
                  },
                  {
                    name: 'variant',
                    type: 'string',
                  },
                  {
                    name: 'anchor',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
