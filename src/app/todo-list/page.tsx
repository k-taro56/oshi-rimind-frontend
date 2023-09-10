import Head from 'next/head';
import Todo from '../../components/todo';

export default function TodoPage() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>OshiRemind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10">
        <h1 className="text-center text-2xl mb-10">TODOアプリ</h1>
        <Todo />
      </main>
    </div>
  );
}
