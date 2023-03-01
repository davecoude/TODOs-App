import React from "react";
import "./css/TodoSearch.css";
import "bootstrap-icons/font/bootstrap-icons.css"

function TodoSearch() {

    const [search, setSearch] = React.useState('');

    const searchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    return(
        <div className="TodoSearch-container">
            <i className="bi bi-search"></i>
            <input
                className="TodoSearch"
                placeholder="Buscar..."
                onChange={searchValueChange}
                value={search}
            ></input>
            <p>Tú busqueda: {search}</p>
        </div>
    );
}

export { TodoSearch };