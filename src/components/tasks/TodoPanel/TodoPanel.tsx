import { useState, useMemo } from 'react';
import classNames from 'classnames';

import { NewTask } from '@/components/tasks/NewTask/NewTask';
import type { NewTodoTask } from '@/components/tasks/NewTask/NewTask.types';
import { TaskList } from '@/components/tasks/TaskList/TaskList';
import { TodoFilters } from '@/components/tasks/TodoFilters/TodoFilters';
import {
  TodoFilterType,
  TodoSortDirection,
} from '@/components/tasks/TodoFilters/TodoFilters.types';
import { LocalStorageKey } from '@/const';
import { useLocalStoreState } from '@/hooks';
import type { TodoItem } from '@/types';

import type { TodoPanelProps } from './TodoPanel.types.ts';

import s from './TodoPanel.module.scss';

export function TodoPanel({ className }: TodoPanelProps) {
  const [filter, setFilter] = useState<TodoFilterType>('all');
  const [sortDirection, setSortDirection] = useState<TodoSortDirection>('asc');

  const { state: todoList, updateState: setTodoList } = useLocalStoreState<TodoItem[]>({
    defaultState: [],
    storageKey: LocalStorageKey.TODOS,
  });

  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo) => {
      if (filter === 'all') {
        return true;
      }
      return filter === 'completed' ? todo.isCompleted : !todo.isCompleted;
    });
  }, [filter, todoList]);

  const sortedTodoList = useMemo(() => {
    return [...filteredTodoList].sort((a, b) => {
      return sortDirection === 'asc'
        ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [filteredTodoList, sortDirection]);

  function handleCreateTask(newTask: NewTodoTask) {
    const newId = todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;

    const newTodo: TodoItem = {
      id: newId,
      title: newTask.title,
      description: newTask.description,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    setTodoList((prevTodos: TodoItem[]) => [...prevTodos, newTodo]);
  }

  return (
    <div className={classNames(s.UPDATE_CLASSNAME, className)}>
      <TodoFilters
        filterType={filter}
        onFilterChange={setFilter}
        sortDirection={sortDirection}
        onSortDirectionChange={setSortDirection}
      />
      <TaskList todoList={sortedTodoList} setTodoList={setTodoList} />
      <NewTask onTaskCreate={handleCreateTask} />
    </div>
  );
}
