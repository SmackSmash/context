import type { FC } from 'react';
import type { Todo } from '../types';
import ShowTodo from './ShowTodo';

const TodoList: FC<{
  todos: Todo[];
  deleteTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
}> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className='flex flex-col gap-2 shadow-xl'>
      {todos.map(({ id, value }) => (
        <ShowTodo key={id} todo={{ id, value }} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  );
};

export default TodoList;
