import { useState, type FC, type ReactNode } from 'react';
import { TodoContext } from '.';
import type { Todo } from '../types';

const TodoContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (todo: Todo) => {
    setTodos(todos.map(current => (current.id === todo.id ? todo : current)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
