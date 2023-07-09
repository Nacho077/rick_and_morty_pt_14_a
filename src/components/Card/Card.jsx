import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
   const {id, name, status, species, gender, origin, image} = props.character
   return (
      <div className={style.container}>
         <button onClick={props.onClose} className={style.btn}>X</button>
         <img className={style.image} src={image} alt='' /> 
         <div className={style.containerData}>
            <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
            <div className={style.detail}>
               <h4>{species}</h4>
               <h4>{gender}</h4>
               <h4>{status}</h4>
               <h4>{origin.name}</h4>
            </div>
         </div>
      </div>
   );
}
