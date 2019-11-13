const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Routes for Departures

router.use('/departures/version-1', require('./views/departures/version-1/routes'));

module.exports = router
