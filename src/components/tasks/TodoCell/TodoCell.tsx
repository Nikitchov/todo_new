import classNames from 'classnames';

import type { TodoCellProps } from './TodoCell.types.ts';

import s from './TodoCell.module.scss';

export function TodoCell({ className, children, style }: TodoCellProps) {
  return (
    <td className={classNames(s.cell, className)} style={style}>
      {children}
    </td>
  );
}
