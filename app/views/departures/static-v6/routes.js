const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line




/*
    Cancel departure (static journey version)
    If the user selects "yes" to cancel departure, take them to "departure cancelled confirmation"
    If the user selects "no" to cancel departure, take them to "departures drafts"
*/

router.post('/cancel-departure', function (req, res) {

    let cancelDepartureStatic = req.session.data.cancelDepartureStatic;

    if (cancelDepartureStatic == 'Yes') {
        res.redirect('cancel-departure-confirmation');
    } else {
        res.redirect('departures-drafts');
    }

})


module.exports = router