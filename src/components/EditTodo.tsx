import { useState, type Dispatch, type FC, type FormEvent, type SetStateAction } from 'react';
import type { Todo, TodoContextType } from '../types';
import useTodoContext from '../hooks/useTodoContext';

const EditTodo: FC<{ todo: Todo; setShowEdit: Dispatch<SetStateAction<boolean>> }> = ({
  todo: { id, value },
  setShowEdit
}) => {
  const [newValue, setNewValue] = useState(value);

  const { editTodo } = useTodoContext() as TodoContextType;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo({ id, value: newValue });
    setShowEdit(false);
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className='flex grow pr-2'>
      <input
        type='text'
        value={newValue}
        onChange={e => setNewValue(e.target.value)}
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
