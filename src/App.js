import React from "react";

import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const listaTodos = [
  { text: 'Cumpleaños juan', completed: false },
  { text: 'Compras verduras', completed: false },
  { text: 'intro curso reactJs', completed: false }
]

// componente
function App(props) {
  // elementos JSX
  return (
    <React.Fragment>
       <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {listaTodos.map( todo => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />

        ))}

      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export { App };
