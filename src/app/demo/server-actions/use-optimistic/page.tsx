import { findToDos } from './page.actions';
import { Form } from './page.client';

export default async function Page() {
  const todos = await findToDos();
  return (
    <>
      <Form todos={todos} />
    </>
  );
}
