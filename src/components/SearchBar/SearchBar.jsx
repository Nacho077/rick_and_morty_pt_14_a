import styles from './styles.module.css'
import { useState } from 'react'

export default function SearchBar(props) {
   let [input, setInput] = useState("")

   const handleChange = (event) => {
      setInput(event.target.value)
   } 

   const handleSearch = (event) => {
      // event.preventDefault()

      props.onSearch(input)
      setInput("")
   }
   return (
      <div style={styles.container}>
            <input className={styles.input} onChange={handleChange} value={input} type='search' placeholder="Id"/>
            <button className={styles.btn} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
