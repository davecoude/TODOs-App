import React from "react";
import "./css/TodoItem.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TodoItem(props) {

    const onClick = () => {
        alert('Aqui el check se marcaria verde✅');
    }

    const onDelete = () => {
        alert('Se borro la nota✖️')
    }

    return(
        <li className="TodoItem">
            <i
                className={`bi bi-check-lg ${props.completed && 'TodoItem-check'}`}
                onClick={onClick}
            >
            </i>
            <p className={`${props.completed && 'texto-marcado'}`}>
                {props.text}
            </p>
            <i
                className='bi bi-x-lg'
                onClick={onDelete}
            >
            </i>
        </li>
    );
}

export { TodoItem };