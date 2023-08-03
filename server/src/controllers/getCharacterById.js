const axios = require('axios')
// const data = require('../utils/data')

const getCharacterById = async (id) => {
    // return data.find(char => char.id == id)
    let res = await axios(`https://rickandmortyapi.com/api/cer/${id}`)
    console.log(res.status)

    let char = {
        id: res.data.id,
        name: res.data.name,
        image: res.data.image,
        gender: res.data.gender,
        status: res.data.status,
        species: res.data.species,
        origin: res.data.origin.name
    }

    return char

    // return response.then((res) => {
    //     console.log(res)
    //     let char = {
    //         id: res.data.id,
    //         name: res.data.name,
    //         image: res.data.image,
    //         gender: res.data.gender,
    //         status: res.data.status,
    //         species: res.data.species,
    //         origin: res.data.origin.name
    //     }

    //     return char
    // })
}

function getCharById(res, id) {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        const character = {
          id: id,
          name: response.data.name,
          gender: response.data.gender,
          species: response.data.species,
          origin: response.data.origin.name,
          image: response.data.image,
          status: response.data.status,
        };
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(character));
      })
      .catch((error) => {
          res.writeHead(500,{"content-type":"text/plain"});
          res.end(error.message)
      });
  }
  

module.exports = getCharacterById
