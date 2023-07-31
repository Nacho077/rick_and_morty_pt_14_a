import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from './Favorites.module.css'
import Card from '../Card/Card'
import * as actions from '../../redux/actions'

export default function Favorites() {
    let [state, setState] = useState({
        order: "",
        filter: "",
    })

    let favs = useSelector(state => state.favs)
    let dispatch = useDispatch()

    const handleChange = e => {
        let newState = {
            ...state,
            [e.target.name]: e.target.value
        }

        setState(newState)
        dispatch(actions.filterAndOrder(newState))
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    // const handleChangeFilter = e => {
    //     dispatch(actions.filter(e.target.value))
    // }

    // const handleChangeOrder = e => {
    //     dispatch(actions.order(e.target.value))
    // }

    return (
        <div>
            <div>
                <select name="filter" onChange={handleChange}>
                    <option value="">All genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <select name="order" onChange={handleChange}>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
            </div>
            <div className={styles.container_cards}>
                {favs?.map(character => <Card key={character.id} character={character} />)}
            </div>
        </div>
    )
}