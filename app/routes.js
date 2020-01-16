const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/unloading-remarks/main-seals', require('./views/unloading-remarks/main-seals/routes'));

module.exports = router