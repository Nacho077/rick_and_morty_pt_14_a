import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map(character => (
         <Card
            key={character.id}
            character={character}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </div>;
}
