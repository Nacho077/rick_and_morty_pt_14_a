// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const characterRoutes = require('./characterRoutes')
const favsRoutes = require('./favsRoutes')

router.use("/character", characterRoutes)
router.use("/favs", favsRoutes)


module.exports = router
