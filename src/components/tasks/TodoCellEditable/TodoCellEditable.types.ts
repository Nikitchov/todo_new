import type { ClassnameProp } from '@/types';

export interface TodoCellEditableProps extends ClassnameProp {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
}
