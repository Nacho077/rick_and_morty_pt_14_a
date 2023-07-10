import React from 'react'

import styles from './styles.module.css'

import SearchBar from '../SearchBar/SearchBar.jsx'

const ToolBar = ({onSearch}) => {
  return (
    <div className={`flex-row w-100 ${styles.container}`}>
      <SearchBar onSearch ={onSearch}/>
      <button className='btn invert' onClick={() => onSearch(Math.ceil(Math.random() * 285) + 1)}>Random</button>
    </div>
  )
}

export default ToolBar
