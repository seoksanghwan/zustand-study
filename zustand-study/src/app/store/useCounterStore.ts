import { createStore } from 'zustand/vanilla';
import { create, useStore } from 'zustand';
import { type StoreApi } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
  setNumber: (number: number) => void;
}

let counterStore: any = (set: any) => ({
  count: 1,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
  setNumber: (number: number) => set({ count: number }),
});

counterStore = devtools(counterStore);
counterStore = persist(counterStore, {
  name: 'counter-storage',
});

// vanilla store 생성
export const useCounterStore = create<CounterState>()(counterStore);
