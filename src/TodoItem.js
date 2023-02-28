import React from "react";
import "./css/TodoItem.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TodoItem(props) {
    return(
        <li className="TodoItem">
            <i class="bi bi-check-lg"></i>
            {props.text}
            <i class="bi bi-x-lg"></i>
        </li>
    );
}

export { TodoItem };