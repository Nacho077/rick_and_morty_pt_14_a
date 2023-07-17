import style from './Card.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions'

export default function Card(props) {
   const {id, name, status, species, gender, origin, image} = props.character
   const dispatch = useDispatch()
   const favs = useSelector(state => state.favs)
   let location = useLocation()
   let [isFav, setIsFav] = useState(false)


   const handleFavorite = () => {
      dispatch(isFav ? removeFav(id) : addFav(props.character))
      setIsFav(!isFav)
   }

   const handleClose = () => {
      props.onClose()
      dispatch(removeFav(id))
   }

   useEffect(() => {
      if(favs.find(character => character.id == id)) {
         setIsFav(true)
      }
   }, [favs])

   return (
      <div className={style.container}>
         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         {props.onClose && <button onClick={handleClose} className={style.btn}>X</button>}
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
