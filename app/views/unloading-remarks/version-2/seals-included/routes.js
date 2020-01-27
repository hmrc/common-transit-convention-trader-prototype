const express = require('express')
const router = express.Router()

/*
    If the user selects "Yes" to "Do you need to change the vehicle name, registration or reference?", then they are taken to "new-id-at-departure"

    If the user selects "No", then they are taken to "change-transport-nationality-at-departure"
*/

    router.post('/change-id-at-departure', function (req, res) {

        let changeIdAtDeparture = req.session.data.changeIdAtDeparture;

        if ( changeIdAtDeparture == ('Yes')) {
            res.redirect('new-id-at-departure');
        } else {
            res.redirect('change-transport-nationality-at-departure');
        }

    })



  module.exports = router
