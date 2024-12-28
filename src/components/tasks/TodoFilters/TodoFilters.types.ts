import type { ClassnameProp, TodoItem } from '@/types';

export type TodoFilterType = 'all' | 'in-progress' | 'completed';

export type TodoSortDirection = 'asc' | 'desc';

export type TodoSortField = keyof TodoItem;

export interface TodoFiltersProps extends ClassnameProp {
  filterType: TodoFilterType;
  onFilterChange: (filterType: TodoFilterType) => void;

  sortDirection: TodoSortDirection;
  onSortDirectionChange: (sortDirection: TodoSortDirection) => void;
}
