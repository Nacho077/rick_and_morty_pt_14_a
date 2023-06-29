import style from './Card.module.css'

export default function Card(props) {
   const {id, name, status, species, gender, origin, image} = props.character
   return (
      <div className={style.container}>
         <button onClick={props.onClose} className={style.btn}>X</button>
         <img src={image} alt='' /> 
         <h2>{name}</h2>
         <div className={style.containerData}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{status}</h2>
            <h2>{origin.name}</h2>
         </div>
      </div>
   );
}
