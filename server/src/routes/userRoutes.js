const express = require('express')
const router = express.Router()
const { getUserByEmailAndPassword } = require('../controllers/handleUsers')

// rickandmorty/login?email=miemail&password=miPassword
// rickandmorty/login
router.get("/login", (req, res) => {
    const {email, password} = req.query
    if(!email || !password) {
        res.status(400).json({"Error": "Faltan datos"})
        return
    }

    const user = getUserByEmailAndPassword(email, password)

    if(user) {
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
})

module.exports = router