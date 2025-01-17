import Counter from '../components/Counter';
import TodoList from '../components/TodoList';
import UserInfo from '../components/UserInfo';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <UserInfo />
      <h1 className="text-2xl font-bold">Zustand Tutorials</h1>
      <TodoList />
      <Counter />
    </div>
  );
}
