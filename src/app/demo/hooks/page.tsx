'use client';

import { useDeferredValue, useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';

export default function Page() {
  const [input, setInput] = useState('');
  const query = useDeferredValue(input);

  const items = [
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
    { id: 4, name: 'linxi' },
    { id: 5, name: 'liaoyi' },
  ];

  return (
    <>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      {useMemo(() => {
        return items
          .filter((item) => item.name.includes(query))
          .map((item) => <div key={item.id}>{item.name}</div>);
      }, [items, query])}
    </>
  );
}
