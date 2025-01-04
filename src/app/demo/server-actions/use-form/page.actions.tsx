'use server';

import { revalidatePath } from 'next/cache';

const data = ['阅读', '写作', '冥想'];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function findToDos() {
  return data;
}

export async function createToDo(prevState: any, formData: FormData) {
  await sleep(500);
  const todo = formData.get('todo') as string;
  data.push(todo);
  revalidatePath('/demo/server-actions/use-form');
  return {
    message: `add ${todo} success!`,
  };
}
