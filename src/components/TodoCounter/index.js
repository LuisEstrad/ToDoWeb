import React from 'react';
import './TodoCounter.css';
import { Context } from '../../context';

function TodoCounter() {
  const { 
    completedTodos,
    totalTodos,
    loading
   } = React.useContext(Context);
  
  return (
    <h1 className="todo-counter">
      {loading ? 'Loading...' : `You have completed ${completedTodos} of ${totalTodos} tasks`}
    </h1>
  );
}

export { TodoCounter };
