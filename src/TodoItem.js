import React from "react";

function TodoItem(props) {
    return(
        <li>
            <span>C</span>
            {props.text}
            <span>x</span>
        </li>
    );
}

export { TodoItem };