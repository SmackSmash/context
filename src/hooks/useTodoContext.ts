import { useContext } from 'react';
import { TodoContext } from '../contexts';

const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
