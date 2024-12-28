export interface TodoItem {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
}

const todoItems: TodoItem[] = [
  {
    id: 1,
    title: 'Learn TypeScript',
    description: 'Learn TypeScript to improve your React codebase.',
    isCompleted: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Learn Next.js',
    description: 'Learn Next.js to improve your React codebase.',
    isCompleted: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 3,
    title: 'Learn GraphQL',
    description: 'Learn GraphQL to improve your React codebase.',
    isCompleted: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 4,
    title: 'Learn React Testing Library',
    description: 'Learn React Testing Library to improve your React codebase.',
    isCompleted: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
];
