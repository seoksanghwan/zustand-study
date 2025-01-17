import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  };
  fetch: (id: number) => Promise<void>;
}

let userStore: any = (set: any) => ({
  user: {},
  fetch: async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const data = await response.json();
    set({ user: await data });
  },
});

// userStore = devtools(userStore);
// userStore = persist(userStore, {
//   name: 'user-storage',
// }) as any;

export const useUserStore = create<UserState>()(userStore);
