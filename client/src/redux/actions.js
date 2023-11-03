import axios from 'axios'

export const ADD_FAV = "ADD_FAVS"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const FILTERANDORDER = "FILTER_AND_ORDER"

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/favs';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/favs/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};

export const filter = gender => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const order = order => {
    return {
        type: ORDER,
        payload: order
    }
}

export const filterAndOrder = state => {
    return {
        type: FILTERANDORDER,
        payload: state
    }
}