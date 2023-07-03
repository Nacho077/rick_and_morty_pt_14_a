import style from './searchBar.module.css'
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
      <div className={style.container}>
         <div className={style.containerInput}>
            <input className={style.input} onChange={handleChange} value={input} type='search' placeholder="Id"/>
            <button className={style.btn} onClick={handleSearch}>Agregar</button>
         </div>
      </div>
   );
}
