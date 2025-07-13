import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState<[string]>(['First todo']);
  return <div className='m-4 p-2 font-bold'>App works</div>;
};

export default App;
