import { NextLink } from '@/components/toggles//next-link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-md px-5">
      <p className="mb-4">找不到此页面。</p>
      <NextLink href="/" className="pl-0">
        返回首页
      </NextLink>
    </div>
  );
}
