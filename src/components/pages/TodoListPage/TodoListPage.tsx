import { DefaultLayout } from '@/components/layouts/DefaultLayout/DefaultLayout';
import { TodoPanel } from '@/components/tasks/TodoPanel/TodoPanel';

import s from './TodoListPage.module.scss';

function TodoListPage() {
  return (
    <DefaultLayout>
      <div className={s.page}>
        <h1>Todo list:</h1>
        <TodoPanel />
      </div>
    </DefaultLayout>
  );
}

export default TodoListPage;
