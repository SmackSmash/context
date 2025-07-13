import { useState, type FC } from 'react';
import type { Todo } from '../types';

const ShowTodo: FC<{ todo: Todo; deleteTodo: (id: string) => void }> = ({ todo, deleteTodo }) => {
  const [showControls, setshowControls] = useState(false);

  return (
    <div
      onMouseOver={() => setshowControls(true)}
      onMouseLeave={() => setshowControls(false)}
      className='flex items-center rounded-lg bg-indigo-300 py-2 pr-2 pl-4 text-indigo-950'
    >
      <p className='py-2'>{todo.todo}</p>
      {showControls ? (
        <>
          <button className='ml-auto cursor-pointer rounded-lg bg-indigo-800 px-4 py-2 text-indigo-50'>
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className='ml-2 cursor-pointer rounded-lg bg-red-800 px-4 py-2 text-indigo-50'
          >
            Delete
          </button>{' '}
        </>
      ) : null}
    </div>
  );
};

export default ShowTodo;
