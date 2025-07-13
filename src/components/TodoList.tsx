import type { FC } from 'react';
import type { Todo } from '../types';
import ShowTodo from './ShowTodo';

const TodoList: FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <div className='flex flex-col gap-2 shadow-xl'>
      {todos.map(({ id, todo }) => (
        <ShowTodo key={id} todo={{ id, todo }} />
      ))}
    </div>
  );
};

export default TodoList;
