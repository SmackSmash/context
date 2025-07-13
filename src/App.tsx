import { useState, type FC } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import type { Todo } from './types';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='m-4 rounded-xl bg-indigo-900 p-4 font-bold'>
      <h1 className='mb-2 border-b-2 border-b-indigo-500 pb-2 text-3xl'>Todo List</h1>
      {todos.length ? <TodoList todos={todos} deleteTodo={deleteTodo} /> : 'You have nothing to do'}
      <AddTodo createTodo={createTodo} />
    </div>
  );
};

export default App;
