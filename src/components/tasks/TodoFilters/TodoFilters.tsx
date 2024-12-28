import classNames from 'classnames';

import type { TodoFiltersProps } from './TodoFilters.types.ts';
import s from './TodoFilters.module.scss';

const FILTER_OPTIONS = [
  { value: 'all', label: 'Все' },
  { value: 'in-progress', label: 'В процессе' },
  { value: 'completed', label: 'Завершенные' },
];

export function TodoFilters({
  className,
  filterType,
  onFilterChange,
  sortDirection,
  onSortDirectionChange,
}: TodoFiltersProps) {
  const handleFilterChange = (newFilter: string) => {
    onFilterChange(newFilter);
  };

  const handleSortChange = () => {
    onSortDirectionChange(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className={classNames(s.filters, className)}>
      <div className={s.filterButtons}>
        {FILTER_OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            className={classNames(s.filterButton, { [s.active]: filterType === value })}
            onClick={() => handleFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={s.sorting}>
        <button className={s.sortButton} onClick={handleSortChange}>
          Сортировать по {sortDirection === 'asc' ? 'возрастанию' : 'убыванию'}
        </button>
      </div>

    </div>
  );
}
