import {ADD_FAV, REMOVE_FAV} from './actions'

const initialState = {
    favs: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                favs: [...state.favs, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                favs: state.favs.filter(character => character.id != payload)
            }

        default:
            return {...state}
    }
}

export default reducer