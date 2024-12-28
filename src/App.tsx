import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from 'const';
import TodoListPage from '@/components/pages/TodoListPage/TodoListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={APP_ROUTES.todos} element={<TodoListPage />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to={APP_ROUTES.todos} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
