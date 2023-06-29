import style from './searchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.container}>
         <div className={style.containerInput}>
            <input className={style.input} type='search' placeholder="Id"/>
            <button className={style.btn} onClick={() => props.onSearch(1)}>Agregar</button>
         </div>
      </div>
   );
}
