import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const Context = React.createContext();

function Provider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false); 
  
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
      }
    );
  
    const markTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(todo => todo.text === text);
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(todo => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      })
      saveTodos(newTodos);
    }

    return(
        <Context.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            markTodo,
            deleteTodo,
            openModal, 
            setOpenModal,
            addTodo 
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
