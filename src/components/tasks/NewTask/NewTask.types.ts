import type { ClassnameProp } from '@/types';

export interface NewTodoTask {
  title: string;
  description: string;
}

export interface NewTaskProps extends ClassnameProp {
  onTaskCreate: (task: NewTodoTask) => void;
}
