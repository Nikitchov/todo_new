import classNames from 'classnames';

import { TodoCell } from '@/components/tasks/TodoCell/TodoCell';

import type { TodoCellEditableProps } from './TodoCellEditable.types.ts';

import s from './TodoCellEditable.module.scss';

export function TodoCellEditable({ className, value, onChange, isEditing }: TodoCellEditableProps) {
  return (
    <TodoCell className={classNames(s.cell, className)}>
      {isEditing ? (
        <input
          className={s.cell__input}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        value
      )}
    </TodoCell>
  );
}
