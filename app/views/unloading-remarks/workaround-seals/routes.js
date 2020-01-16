const express = require('express')
const router = express.Router()

/*
    If the user selects "yes" to "unloading complete", then they are taken to "check unloading permission"

    Anything else and the user is taken to "change-id-at-departure"
*/

router.post('/unloading-date', function (req, res) {

    // let stateOfSeals = req.session.data.stateOfSeals;
    let allGoodsUnloaded = req.session.data.allGoodsUnloaded;

    if ( allGoodsUnloaded == ('Yes')) {
        res.redirect('check-unloading-permission');
    } else {
        res.redirect('change-id-at-departure');
    }

})

/*
    If the user selects "yes" to "state of seals", AND "yes" to "unloading complete", then they are taken to "check unloading permission"

    Anything else and the user is taken to "change unloading permission"
*/

// router.post('/unloading-date', function (req, res) {

//     let stateOfSeals = req.session.data.stateOfSeals;
//     let allGoodsUnloaded = req.session.data.allGoodsUnloaded;

//     if (stateOfSeals == ('Yes') && allGoodsUnloaded == ('Yes')) {
//         res.redirect('check-unloading-permission');
//     } else {
//         res.redirect('change-unloading-permission');
//     }

// })

  module.exports = router
