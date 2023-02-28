import React from "react";
import "./css/TodoSearch.css";
import "bootstrap-icons/font/bootstrap-icons.css"

function TodoSearch() {
    return(
        <div className="TodoSearch-container">
            <i className="bi bi-search"></i>
            <input className="TodoSearch" placeholder="Buscar..."></input>
        </div>
    );
}

export { TodoSearch };