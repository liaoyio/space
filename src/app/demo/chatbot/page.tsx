'use client';

import { ReactNode, useActionState, useOptimistic } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// 定义消息类型，每条消息包含内容和是否处于等待状态
type Message = {
  content: ReactNode;
  pending: boolean;
};

// 工具函数：模拟异步延迟
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

// 主组件
export default function Home() {
  // 使用 useActionState 管理表单状态和提交动作
  const [messages, formAction] = useActionState<Message[], FormData>(
    // 异步表单处理函数
    async (state, payload) => {
      // 获取输入内容
      const message = payload.get('input') as string;

      // 使用 passThrough 暂时添加消息到 UI（乐观更新）
      passThrough([
        ...state,
        {
          content: message,
          pending: true, // 设为等待中
        },
      ]);

      // 模拟网络延迟
      await sleep(1000);

      // 返回新的消息状态（pending 设为 false）
      return [
        ...state,
        {
          content: message,
          pending: false,
        },
      ];
    },
    [], // 初始状态为空数组
  );

  // 使用 useOptimistic 提供一个乐观 UI 展示的状态
  const [optimisticMessages, passThrough] = useOptimistic<Message[]>(messages);

  return (
    <div className="mx-auto max-w-md">
      <main className="space-y-9 py-12">
        {/* 表单区域 */}
        <form action={formAction} className="flex flex-col gap-4">
          <Input name="input" className="rounded border p-2" />
          <Button type="submit">Submit</Button>
        </form>

        {/* 渲染每条消息 */}
        <ul className="list-inside list-disc text-left">
          {optimisticMessages.map((message, idx) => (
            <li key={idx}>
              {/* 展示内容和等待状态 */}
              {message.content} {message.pending ? '(loading)' : null}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
