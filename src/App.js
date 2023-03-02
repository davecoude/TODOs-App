import React from "react";

import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const defaultTodos = [
  { text: 'Cumpleaños juan', completed: true },
  { text: 'Compras verduras', completed: false },
  { text: 'intro curso reactJs', completed: false }
]

// componente
function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
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
