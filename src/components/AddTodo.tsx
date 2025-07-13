import { useState, type FC, type FormEvent } from 'react';
import { v4 as uuid } from 'uuid';
import type { Todo } from '../types';

const AddTodo: FC<{ createTodo: (todo: Todo) => void }> = ({ createTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({ id: uuid(), todo });
    setTodo('');
  };

  return (
    <form className='mt-4 flex' onSubmit={e => handleSubmit(e)}>
      <input
        type='text'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        className='flex-grow rounded-l-lg bg-indigo-50 p-2 text-black outline-0'
      />
      <button
        type='submit'
        className='cursor-pointer rounded-r-lg bg-amber-500 px-4 py-2 text-indigo-50 transition-all text-shadow-md hover:bg-amber-400'
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
