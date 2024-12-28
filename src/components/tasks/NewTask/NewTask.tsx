import type { FormEvent } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

import { useValidateTodo } from '@/hooks/useValidateTodo';

import type { NewTaskProps } from './NewTask.types';

import s from './NewTask.module.scss';

export function NewTask({ className, onTaskCreate }: NewTaskProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { validateTodo } = useValidateTodo();

  const inputs = [
    {
      id: 'new-task-title',
      label: 'Title',
      value: title,
      onChange: setTitle,
    },
    {
      id: 'new-task-description',
      label: 'Description',
      value: description,
      onChange: setDescription,
    },
  ];

  const isSubmitDisabled = !title || !description;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!onTaskCreate) {
      return;
    }

    const newTodo = {
      title,
      description,
    };

    const isValid = validateTodo(newTodo);

    if (!isValid) {
      return;
    }

    onTaskCreate(newTodo);

    setTitle('');
    setDescription('');
  }

  return (
    <form className={classNames(s.form, className)} onSubmit={onSubmit}>
      <h2>Create Task</h2>
      {inputs.map((input) => (
        <div key={input.label} className={s.form__field}>
          <label className={s.field__label} htmlFor={input.id}>
            {input.label}
          </label>
          <input
            className={s.form__input}
            id={input.id}
            type="text"
            value={input.value}
            onChange={(e) => input.onChange(e.target.value)}
          />
        </div>
      ))}
      <button disabled={isSubmitDisabled} className={s.form__button} type="submit">
        Create Task
      </button>
    </form>
  );
}
