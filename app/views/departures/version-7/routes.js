const express = require('express');
const router = express.Router()

router.use('/GB', require('./GB/routes'));

router.use('/NI', require('./NI/routes'));

module.exports = router