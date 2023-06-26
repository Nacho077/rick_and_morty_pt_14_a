export default function Card(props) {
   const {id, name, status, species, gender, origin, image} = props.character
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}
