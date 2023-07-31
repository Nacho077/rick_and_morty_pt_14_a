import Card from '../Card/Card';
import ToolBar from '../Toolbar/ToolBar';
import styles from './Cards.module.css'

export default function Cards({onSearch, characters, onClose}) {
   return (
   <div className={styles.container}>
      <ToolBar onSearch={onSearch}/>
      <div className='w-100 m-auto'>
         <div className={styles.galery}>
            {characters.map(character => (
               <Card
                  key={character.id}
                  character={character}
                  onClose={() => onClose(character.id)}
               />
            ))}
         </div>
      </div>
 </div>
)
}
