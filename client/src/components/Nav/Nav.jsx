import React from "react";
import { useNavigate } from 'react-router-dom'

import styles from './nav.module.css'
import Logo from '../Logo/Logo.jsx';

const Nav = ({logOut}) => {
    const navigate = useNavigate()
    return (
        <nav className={styles.nav}>
            <div className='flex-row h-100'>
                <Logo height = '60px'/>
                <h3>PT-14A</h3>
            </div> 
            <div className='flex-row'>
                <button className='btn invert radius' onClick={() => navigate("/home")}>Home</button>
                <button className='btn invert radius' onClick={() => navigate("/about")}>About</button>
                <button className='btn invert radius' onClick={() => navigate(-1)}>Back</button>
                <button className='btn invert radius' onClick={() => logOut()}>LogOut</button>
                <button className='btn invert radius' onClick={() => navigate("/favorites")}>Favorites</button>
            </div>
        </nav>
    )
}

export default Nav