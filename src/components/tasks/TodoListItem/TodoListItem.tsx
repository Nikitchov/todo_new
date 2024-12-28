import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { TodoCell } from '@/components/tasks/TodoCell/TodoCell';
import { TodoCellEditable } from '@/components/tasks/TodoCellEditable/TodoCellEditable';
import { TodoItem } from '@/types';

import type { TodoListItemProps } from './TodoListItem.types.ts';

import s from './TodoListItem.module.scss';

export function TodoListItem({
  className,
  data,
  onStatusChange,
  onRowDelete,
  onRowEdit,
}: TodoListItemProps) {
  const [innerState, setInnerState] = useState<TodoItem>(data);
  const [isEditing, setIsEditing] = useState(false);

  const status = data.isCompleted ? 'Completed' : 'In progress';
  const displayCreatedAt = new Date(data.createdAt).toLocaleString();

  const changeStatusText = data.isCompleted ? 'Mark progress' : 'Mark completed';

  function changeStatus() {
    if (!onStatusChange) {
      return;
    }
    onStatusChange();
  }

  function deleteRow() {
    if (!onRowDelete) {
      return;
    }
    onRowDelete();
  }

  function editRow() {
    setIsEditing((prevState) => !prevState);
  }

  function saveEdit() {
    if (!onRowEdit) {
      return;
    }
    setIsEditing(false);
    onRowEdit(innerState);
  }

  function cancelEdit() {
    setIsEditing(false);
    setInnerState(data);
  }

  function updateInnerState(key: keyof TodoItem, value: string) {
    setInnerState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  useEffect(() => {
    setInnerState(data);
  }, [data]);

  return (
    <tr className={classNames(s.row, className)}>
      <TodoCell>#{data.id}</TodoCell>
      <TodoCellEditable
        value={innerState.title}
        onChange={(val) => updateInnerState('title', val)}
        isEditing={isEditing}
      />
      <TodoCell>{status}</TodoCell>
      <TodoCellEditable
        value={innerState.description}
        onChange={(val) => updateInnerState('description', val)}
        isEditing={isEditing}
      />
      <TodoCell>{displayCreatedAt}</TodoCell>
      <TodoCell>
        <button className={classNames(s.row__button)} type="button" onClick={changeStatus}>
          {changeStatusText}
        </button>
      </TodoCell>
      <TodoCell>
        <button
          className={classNames(s.row__button, s.row__button_danger)}
          type="button"
          onClick={deleteRow}
        >
          Delete
        </button>
      </TodoCell>
      <TodoCell>
        <div className={s.row__edit}>
          {!isEditing ? (
            <button className={classNames(s.row__button)} type="button" onClick={editRow}>
              Edit
            </button>
          ) : (
            <>
              <button className={classNames(s.row__button)} type="button" onClick={saveEdit}>
                Save
              </button>
              <button
                className={classNames(s.row__button, s.row__button_danger)}
                type="button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </TodoCell>
    </tr>
  );
}
