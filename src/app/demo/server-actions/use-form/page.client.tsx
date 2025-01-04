'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createToDo } from './page.actions';

const initialState = {
  message: '',
};

// 注意：当使用 useFormStatus 的时候，要写在 form 下的单独的组件中。使用的时候，注意这两点就行。
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? 'Adding' : 'Add'}
    </Button>
  );
}

export function AddToDoForm() {
  // 原来 react-dom 的 useFormState，被移到react下面了，名字改为 useActionState 用法没变
  // 当使用 useActionState 的时候，对应 Server Action 函数的参数，第一个参数是 prevState，第二个参数是 formData。
  const [state, formAction] = useActionState(createToDo, initialState);

  return (
    <form action={formAction}>
      <div className="flex gap-2">
        <Input type="text" name="todo" />
        <SubmitButton />
      </div>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
}
