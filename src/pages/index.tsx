import { Todo } from '$/services/todo';
import { TodoObject } from '$/types';
import { TodoList } from '$/views/TodoList';
import Head from 'next/head';

export default function Home({ data }: { data: TodoObject[] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Basic todo list with supabase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TodoList data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await Todo.getAll();

  return {
    props: {
      data,
    },
  };
}
