// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const { save, deleteById } = require('../controllers/handleFavorites')

router.post("/", (req, res) => {
    let { id, name, status, species, gender, origin, image } = req.body
    
    let newFav = {
        id: id,
        name: name,
        image: image,
        gender: gender,
        status: status,
        species: species,
        origin: origin
    }

    let values = Object.keys(newFav) // ["id", "name"]
    for(let i = 0; i < values.length; i++) {
        if(!newFav[values[i]]) {
            res.status(404).send("Me mandaste cualquier cosa")
            return
        }
    }

    res.status(200).send(save(newFav))
})

router.delete("/:id", (req, res) => {
    let { id } = req.params

    res.status(200).send(deleteById(id))
})

module.exports = router
