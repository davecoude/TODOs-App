import React from "react";
import "./css/TodoCounter.css";

function TodoCounter({ total, completed }) {
    return(
        <h2 className="TodoCounter">Completados {completed} de {total}</h2>
    );
}


export { TodoCounter };