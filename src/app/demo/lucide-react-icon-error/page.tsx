import { StarIcon } from './page.client';

// error: 服务端组件无法使用 { ssr: false }
// const Star = dynamic(() => import('lucide-react').then((mod) => mod.Star), { ssr: false });

export default function Page() {
  return (
    <>
      <StarIcon />
    </>
  );
}
