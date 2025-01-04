'use client';

import { useActionState, useOptimistic } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createToDo } from './page.actions';

export function Form({ todos }: { todos: any[] }) {
  const [state, sendFormAction] = useActionState(createToDo, { message: '' });

  /*
    const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // 更新函数
    (currentState, optimisticValue) => {
      // 使用乐观值
      // 合并并返回新 state
    }
  );
  */

  const [optimistiToDos, addOptimisticTodo] = useOptimistic(
    todos.map((i) => ({ text: i })),
    (state, newTodo) => [
      ...state,
      {
        text: newTodo,
        sending: true,
      },
    ],
  );

  const formAction = async (formData: FormData) => {
    addOptimisticTodo(formData.get('todo'));
    await sendFormAction(formData);
  };

  console.log('----', JSON.stringify(optimistiToDos));

  return (
    <>
      <form action={formAction}>
        <div className="flex gap-2">
          <Input type="text" name="todo" />
          <Button type="submit"> Add </Button>
        </div>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      <ul className="p-3">
        {
          // @ts-ignore
          optimistiToDos.map(({ text, sending }, i) => (
            <li key={i}>
              {text}
              {!!sending && <small> (Sending...)</small>}
            </li>
          ))
        }
      </ul>
    </>
  );
}
