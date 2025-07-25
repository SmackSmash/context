import { useState, type FC } from 'react';
import type { Todo, TodoContextType } from '../types';
import EditTodo from './EditTodo';
import useTodoContext from '../hooks/useTodoContext';

const ShowTodo: FC<{ todo: Todo }> = ({ todo }) => {
  const [showControls, setshowControls] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { deleteTodo } = useTodoContext() as TodoContextType;

  return (
    <div
      onMouseOver={() => setshowControls(true)}
      onMouseLeave={() => setshowControls(false)}
      className='flex items-center rounded-lg bg-indigo-300 py-2 pr-2 pl-4 text-indigo-950'
    >
      {showEdit ? (
        <EditTodo todo={todo} setShowEdit={setShowEdit} />
      ) : (
        <p className='py-2'>{todo.value}</p>
      )}

      {showControls ? (
        <>
          <button
            onClick={() => setShowEdit(!showEdit)}
            className='ml-auto cursor-pointer rounded-lg bg-indigo-800 px-4 py-2 text-indigo-50'
          >
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
