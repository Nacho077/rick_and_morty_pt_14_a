import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({data}) => {
                if (!data.name) {
                    window.alert("No existe un personaje con ese id")
                } else {
                    setCharacter(data)
                }
            })
        }, 2000)
    }, [id])

     
    return !character.image ? (
        <div>
            <h1>Cargando su personaje...</h1>
        </div>
        ) : (<div>
            <img src={character?.image} alt='' /> 
            <h2>{character?.name}</h2>
            <div>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.origin?.name}</h2>
            </div>
        </div>)
}

export default Detail