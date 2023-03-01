import React from "react";
import "./css/TodoItem.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TodoItem(props) {
    return(
        <li className="TodoItem">
            <i className={`bi bi-check-lg ${props.completed && 'TodoItem-check'}`}></i>
            <p className={`${props.completed && 'texto-marcado'}`}>
                {props.text}
            </p>
            <i className='bi bi-x-lg'></i>
        </li>
    );
}

export { TodoItem };