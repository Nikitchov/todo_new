import classNames from 'classnames';

import { TodoCell } from '@/components/tasks/TodoCell/TodoCell';
import { TodoListItem } from '@/components/tasks/TodoListItem/TodoListItem';
import type { TodoItem } from '@/types';

import type { TaskListProps } from './TaskList.types.ts';

import s from './TaskList.module.scss';

export function TaskList({ className, todoList, setTodoList }: TaskListProps) {
  const headCells = [
    { key: 'id', title: 'ID', width: '5%' },
    { key: 'title', title: 'Title', width: '10%' },
    { key: 'status', title: 'Status', width: '8%' },
    { key: 'description', title: 'Description', width: '15%' },
    { key: 'createdAt', title: 'Created at', width: '5%' },
    { key: 'changeStatus', title: 'Change status', width: '10%' },
    { key: 'delete', title: 'Delete', width: '10%' },
    { key: 'edit', title: 'Edit', width: '20%' },
  ];

  // Валидация todoList
  if (!Array.isArray(todoList)) {
    console.error('todoList должен быть массивом');
    return <div>Ошибка: данные задач недоступны.</div>;
  }

  const isValidTodo = (todo) => {
    return (
      todo &&
      typeof todo.id === 'number' &&
      typeof todo.title === 'string' &&
      typeof todo.isCompleted === 'boolean' &&
      typeof todo.description === 'string' &&
      typeof todo.createdAt === 'string'
    );
  };

  const validTodos = todoList.filter(isValidTodo);

  if (validTodos.length === 0) {
    return <div>Нет доступных задач для отображения.</div>;
  }

  function handleStatusChange(id: number) {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setTodoList(updatedList);
  }

  function handleRowDelete(id: number) {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  }

  function handleRowEdit(updatedTodo: TodoItem) {
    const updatedList = todoList.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return { ...updatedTodo };
      }
      return todo;
    });

    setTodoList(updatedList);
  }

  return (
    <table className={classNames(s.list, className)}>
      <thead>
        <tr className={s.head}>
          {headCells.map((cell) => (
            <TodoCell
              key={cell.key}
              className={s.head__cell}
              style={{
                width: cell.width,
                maxWidth: cell.width,
              }}
            >
              {cell.title}
            </TodoCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {validTodos.map((todo) => (
          <TodoListItem
            data={todo}
            key={todo.id}
            onStatusChange={() => handleStatusChange(todo.id)}
            onRowDelete={() => handleRowDelete(todo.id)}
            onRowEdit={handleRowEdit}
          />
        ))}
      </tbody>
    </table>
  );
}
