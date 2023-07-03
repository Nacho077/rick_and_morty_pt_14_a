import Card from './Card';
import sytle from './Cards.module.css'

export default function Cards(props) {
   return <div className={sytle.container}>
      {props.characters.map(character => (
         <Card
            key={character.id}
            character={character}
            onClose={() => props.onClose(character.id)}
         />
      ))}
   </div>;
}
