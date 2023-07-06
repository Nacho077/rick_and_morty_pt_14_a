import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
   const {id, name, status, species, gender, origin, image} = props.character
   return (
      <div className={style.container}>
         <button onClick={props.onClose} className={style.btn}>X</button>
         <img src={image} alt='' /> 
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <div className={style.containerData}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{status}</h2>
            <h2>{origin.name}</h2>
         </div>
      </div>
   );
}
