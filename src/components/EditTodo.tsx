import type { FC } from 'react';
import type { Todo } from '../types';

const EditTodo: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <form className='flex grow pr-2'>
      <input
        type='text'
        value={todo.todo}
        className='grow rounded-lg bg-indigo-50 px-4 py-2 outline-0'
      />
      <input
        type='submit'
        value='Submit'
        className='ml-2 cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-indigo-50'
      />
    </form>
  );
};

export default EditTodo;
