import type { ClassnameProp, TodoItem } from '@/types';

export interface TaskListProps extends ClassnameProp {
  todoList: TodoItem[];
  setTodoList: (todoList: TodoItem[]) => void;
}
