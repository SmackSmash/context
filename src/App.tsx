import { useState, type FC } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: FC = () => {
  const [todos, setTodos] = useState(['First todo']);

  const createTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className='m-4 rounded-xl bg-indigo-900 p-4 font-bold'>
      <h1 className='mb-2 border-b-2 border-b-indigo-500 pb-2 text-3xl'>Todo List</h1>
      {todos.length ? <TodoList todos={todos} /> : 'You have nothing to do'}
      <AddTodo createTodo={createTodo} />
    </div>
  );
};

export default App;
