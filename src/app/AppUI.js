import { CompletionChart } from '../components/CompletionChart';
import { Context } from '../context';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoForm } from '../components/TodoForm';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import React from 'react';
import './App.css';

function AppUI() {
  const { 
    loading,
    error,
    searchedTodos,
    markTodo,
    deleteTodo,
    completedTodos,  
    totalTodos,
    openModal,
    setOpenModal,       
  } = React.useContext(Context);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <div className="main-container">
        <div className="todo-list-container">
            <TodoList>
            {loading && <SkeletonLoader count={searchedTodos.length} />}
            {error && <p>Error loading todos</p>}
            {(!loading && searchedTodos.length === 0) && (
              <p className="no-tasks-message">Empty list</p>
            )}
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
                onComplete={() => markTodo(todo.text)} 
                onDelete={() => deleteTodo(todo.text)} 
              />
            ))}
            </TodoList>
          <CreateTodoButton setOpenModal={setOpenModal}/>
          {openModal && 
            <Modal>
              <TodoForm />
            </Modal>          
          }
        </div>
        <div className="chart-container">
            <CompletionChart completed={completedTodos} total={totalTodos} loading={loading} />
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUI };





