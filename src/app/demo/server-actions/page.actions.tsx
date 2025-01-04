'use server';

import { revalidatePath } from 'next/cache';

const data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(formData: FormData) {
  const todo = formData.get('todo') as string;
  data.push(todo);
  revalidatePath('/demo/server-actions');
  return data;
}

export async function createToDoDirectly(value: string) {
  const form = new FormData();
  form.append('todo', value);
  console.log(form);
  return createToDo(form);
}
