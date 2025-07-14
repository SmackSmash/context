import { type FC } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import useTodoContext from './hooks/useTodoContext';
import type { TodoContextType } from './types';

const App: FC = () => {
  const { todos } = useTodoContext() as TodoContextType;

  return (
    <div className='m-4 rounded-xl bg-indigo-900 p-4 font-bold'>
      <h1 className='mb-2 border-b-2 border-b-indigo-500 pb-2 text-3xl'>Todo List</h1>
      {todos.length ? <TodoList todos={todos} /> : 'You have nothing to do'}
      <AddTodo />
    </div>
  );
};

export default App;
