'use client';

// import { Star } from 'lucide-react'; // 直接导入使用会水合失败
import dynamic from 'next/dynamic';

// 虽然客户端组件可以设置 { ssr: false } ，但闪烁问题特别严重
const Star = dynamic(() => import('lucide-react').then((mod) => mod.Star), { ssr: false });

export const StarIcon = () => {
  return (
    <div className="inline-flex cursor-pointer">
      <Star />
    </div>
  );
};
