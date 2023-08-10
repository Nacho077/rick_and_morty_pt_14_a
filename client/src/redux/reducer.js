import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, FILTERANDORDER} from './actions'

const initialState = {
    favs: [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                favs: payload,
                allCharacters: payload
            }

        case REMOVE_FAV: // No anda
            return {
                ...state,
                allCharacters: payload,
                favs: payload,
            }

        case FILTER:
            return {
                ...state,
                favs: state.allCharacters.filter(character => character.gender == payload)
            }

        case ORDER:
            let orderCharacters = [...state.allCharacters]
            let orderFavs = [...state.favs]

            // [4, 5, 2, 6]
            if(payload == "A") {
                orderCharacters = orderCharacters.sort((a, b) => a.id - b.id)
                orderFavs = orderFavs.sort((a, b) => a.id - b.id)
            } else if(payload == "D") {
                orderCharacters = orderCharacters.sort((a, b) => b.id - a.id)
                orderFavs = orderFavs.sort((a, b) => b.id - a.id)
            }

            return {
                ...state,
                favs: orderFavs,
                allCharacters: orderCharacters
            }

        case FILTERANDORDER:
            let orderAndFilterFavs = [...state.allCharacters]

            if(payload.filter !== "") {
                orderAndFilterFavs =  orderAndFilterFavs.filter(character => character.gender == payload.filter)
            }

            if(payload.order == "A") {
                orderAndFilterFavs = orderAndFilterFavs.sort((a, b) => a.id - b.id)
            } else if(payload.order == "D") {
                orderAndFilterFavs = orderAndFilterFavs.sort((a, b) => b.id - a.id)
            }

            return {
                ...state,
                favs: orderAndFilterFavs
            }

        default:
            return {...state}
    }
}

export default reducer