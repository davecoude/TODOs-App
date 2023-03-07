import React from "react";

import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

// const defaultTodos = [
//   { text: 'Cumpleaños juan', completed: true },
//   { text: 'Compras verduras', completed: false },
//   { text: 'intro curso reactJs', completed: false }
// ]


// custom hook
function useLocalStorage(itemName, initialValue) {
  // persistencia con LocalStorage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;

  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  // persistencia de datos con saveItem()
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

// componente
function App(props) {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = React.useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter( todo => todo.completed === true).length;

  // filtrar todos por busqueda

  let todosSearch = [];

  if (search.length >= 0) {

    todosSearch = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase().trim();

      return todoText.includes(searchText);
    });
  } else {
    todosSearch = todos;
  }

  // marcar como completado o eliminar TODO
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }


  // elementos JSX
  return (
    <React.Fragment>
       <TodoCounter
        total={totalTodos}
        completed={completedTodos}
       />

      <TodoSearch
        search={search}
        setSearch={setSearch}
      />

      <TodoList>
        {todosSearch.map( todo => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={ () => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}
          />

        ))}

      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export { App };
