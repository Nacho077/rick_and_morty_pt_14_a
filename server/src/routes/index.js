// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const characterRoutes = require('./characterRoutes')
const favsRoutes = require('./favsRoutes')
const userRoutes = require('./userRoutes')

router.use("/character", characterRoutes)
router.use("/favs", favsRoutes)
router.use("/", userRoutes)


module.exports = router
