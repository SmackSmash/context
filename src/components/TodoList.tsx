import type { FC } from 'react';
import type { Todo } from '../types';

const TodoList: FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <div>
      {todos.map(({ id, todo }) => (
        <div key={id}>{todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
