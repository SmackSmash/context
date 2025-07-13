import { useState, type FC, type FormEvent } from 'react';

const AddTodo: FC<{ createTodo: (todo: string) => void }> = ({ createTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todo);
    setTodo('');
  };

  return (
    <form className='flex' onSubmit={e => handleSubmit(e)}>
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
