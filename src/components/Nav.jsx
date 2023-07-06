import React from "react";
import SearchBar from "./SearchBar.jsx";
import { useNavigate } from 'react-router-dom'

const Nav = ({onSearch}) => {
    const navigate = useNavigate()
    
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(Math.ceil(Math.random() * 285) + 1)}>Random</button>
            <button onClick={() => navigate("/home")}>HOME</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate(-1)}>Atras</button>
        </div>
    )
}

export default Nav