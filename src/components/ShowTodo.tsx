import type { FC } from 'react';
import type { Todo } from '../types';

const ShowTodo: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div className='flex items-center rounded-lg bg-indigo-300 py-2 pr-2 pl-4 text-indigo-950'>
      <p>{todo.todo}</p>
      <button className='ml-auto cursor-pointer rounded-lg bg-indigo-800 px-4 py-2 text-indigo-50'>
        Edit
      </button>
      <button className='ml-2 cursor-pointer rounded-lg bg-red-800 px-4 py-2 text-indigo-50'>
        Delete
      </button>
    </div>
  );
};

export default ShowTodo;
