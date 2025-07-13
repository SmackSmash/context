import type { FC } from 'react';
import type { Todo } from '../types';
import ShowTodo from './ShowTodo';

const TodoList: FC<{ todos: Todo[]; deleteTodo: (id: string) => void }> = ({
  todos,
  deleteTodo
}) => {
  return (
    <div className='flex flex-col gap-2 shadow-xl'>
      {todos.map(({ id, todo }) => (
        <ShowTodo key={id} todo={{ id, todo }} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
