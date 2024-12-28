import type { ClassnameProp, TodoItem } from '@/types';

export interface TodoListItemProps extends ClassnameProp {
  data: TodoItem;
  onStatusChange?: () => void;
  onRowDelete?: () => void;
  onRowEdit?: (newState: TodoItem) => void;
}
