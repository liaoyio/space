
dynamic 在Next.js 15  App Router 中的区别

- 服务端组件(未标记use client): 使用`dynamic`导入组件时，不能设置 { ssr: false } 会报错
- 客户端组件(标记 use client): 使用`dynamic`导入组件时，允许设置 { ssr: false }

参考链接🔗： https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr
