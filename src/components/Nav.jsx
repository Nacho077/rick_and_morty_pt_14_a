import React from "react";
import SearchBar from "./SearchBar.jsx";

const Nav = ({onSearch}) => {
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(Math.ceil(Math.random() * 285) + 1)}>Random</button>
        </div>
    )
}

export default Nav