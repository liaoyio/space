import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { findToDos, createToDo } from './page.actions';
import { DirectlyButton } from './page.client';

export default async function Page() {
  const todos = await findToDos();
  return (
    <>
      <form action={createToDo as (e: FormData) => void} className="flex items-center gap-2">
        <Input type="text" name="todo" />
        <Button type="submit">Submit</Button>
        <DirectlyButton> Add Directly</DirectlyButton>
      </form>
      <ul className="p-3">
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
