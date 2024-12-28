import type { TodoItem } from '@/types';

export function useValidateTodo() {
  function validateTodo(todo: Partial<TodoItem>) {
    const isTitleValid = todo.title ? todo.title.trim().length > 0 : false;
    const isDescriptionValid = todo.description ? todo.description.trim().length > 0 : false;

    return isTitleValid && isDescriptionValid;
  }

  return {
    validateTodo,
  };
}
