export type Todo = {
  id: string;
  value: string;
};

export type TodoContextType = {
  todos: Todo[];
  createTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};
