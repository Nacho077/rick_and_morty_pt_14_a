import { useEffect } from "react"
import { useSelector } from "react-redux"
import Card from '../Card/Card'

export default function Favorites() {
    let favs = useSelector(state => state.favs)

    return (
        <div>
            {favs?.map(character => <Card key={character.id} character={character} />)}
        </div>
    )
}