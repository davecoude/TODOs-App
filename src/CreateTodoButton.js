import React from "react";
import "./css/CreateTodoButton.css";

function CreateTodoButton(props) {
    return(
        <button className="TodoCreateButton">Añadir nota<i class="bi bi-plus-lg"></i></button>
    );
}

export { CreateTodoButton };