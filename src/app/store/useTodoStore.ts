import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';

// Todo 아이템의 타입 정의
interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

// Todo 스토어의 상태와 액션 타입 정의
interface TodoState {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

// Todo ID 생성을 위한 유틸리티
let id = 0;
const getId = () => id++;

// Todo 스토어 생성
let todoStore: any = (set: any) => ({
  // 초기 상태
  todos: [],

  // Todo 추가
  addTodo: (todoText: string) =>
    set((state: any) => ({
      todos: [
        ...state.todos,
        {
          id: getId(),
          text: todoText,
          isCompleted: false,
        },
      ],
    })),

  // Todo 삭제
  deleteTodo: (id: number) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),

  // Todo 완료 상태 토글
  completeTodo: (id: number) =>
    set((state: any) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    })),
});

todoStore = devtools(todoStore);
todoStore = persist(todoStore, {
  name: 'todo-storage',
  storage: createJSONStorage(() => sessionStorage),
});

export const useTodoStore = create<TodoState>()(todoStore);

// 외부에서 사용할 수 있는 Todo 추가 유틸리티 함수
export const addTodo = (text: string) => {
  useTodoStore.getState().addTodo(text);
};
