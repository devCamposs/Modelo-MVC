const express = require('express')
const router = express.Router()

const homeControllers = require('../controllers/homeControllers')

router.get('/', homeControllers.index)

module.exports = router
