'use client';

import { useCounterStore } from '../store/useCounterStore';

export default function Counter() {
  const { count, increment, reset, setNumber } = useCounterStore();

  const clear = () => {
    useCounterStore.persist.clearStorage();
  };

  return (
    <div className="flex flex-col gap-2">
      <h1>Count: {count}</h1>
      <div className="flex flex-row gap-2">
        <button
          onClick={increment}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Up
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white rounded-md p-2"
        >
          Reset
        </button>
        <button
          onClick={e => setNumber(10)}
          className="bg-green-500 text-white rounded-md p-2"
        >
          Set 10
        </button>
        <button
          onClick={clear}
          className="bg-gray-500 text-white rounded-md p-2"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
