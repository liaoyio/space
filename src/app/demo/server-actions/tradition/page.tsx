'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// /demo/server-actions/tradition
export default function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch('/api/todos')).json();
      setTodos(data);
    };
    fetchData();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: new FormData(event.currentTarget),
    });

    const { data } = await response.json();
    setTodos(data);
  }
  return (
    <>
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <Input type="text" name="todo" />
        <Button type="submit">Submit</Button>
      </form>
      <ul className="p-3">
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
