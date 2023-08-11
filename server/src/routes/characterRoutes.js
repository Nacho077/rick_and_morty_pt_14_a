// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const getCharacterById = require('../controllers/getCharacterById')

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        let character = await getCharacterById(id)
        
        if(character?.name) {
            res.status(200).json(character)
        } else {
            res.status(404).json({"error": "No se encontro un personaje con ese id"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de coneccion con la api"})
    }
})

module.exports = router
