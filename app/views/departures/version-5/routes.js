const express = require('express');
const session = require('express-session');
const router = express.Router()

// Add your routes here - above the module.exports line


/*
    Cancel departure
    If the user selects "yes" to cancel departure, take them to "departure cancelled confirmation"
    If the user selects "no" to cancel departure, take them to "departures drafts"
*/

router.post('/cancel-departure', function (req, res) {

    let cancelDeparture = req.session.data.cancelDeparture;

    if (cancelDeparture == 'Yes') {
        res.redirect('cancel-departure-confirmation');
    } else {
        res.redirect('departures-drafts');
    }

})

/*
    If Adding safety and security details is needed
    transite arrival date of transit office will be added
*/

router.post('/route/added-transit-offices-route', function (req, res) {
    let securityVal = req.session.data.securityProcess;
    if (securityVal == 'Yes') {
        res.redirect('arrival-times-at-office-of-transit');
    } else {
        res.redirect('added-transit-offices');
    }
})

/*
    Movement details routing
*/



/*
    Inland mode
    If the user selects 5,50,7,70 or has answered yes to "have you used containers?", take them to nationality at departure
    If the user selects 2,20 take them to "add nationality at departure?"
*/

router.post('/transport/inland-mode', function (req, res) {

    let inlandMode = req.session.data.inlandMode;
    let containersUsed = req.session.data.containersUsed;

    if ((inlandMode == '(5) Postal Consignment' ||
            inlandMode == '(50) Postal Consignment' ||
            inlandMode == '(7) Fixed transport installations' ||
            inlandMode == '(70) Fixed transport installations' ||
            (containersUsed == 'Yes ')
        )) {
        res.redirect('nationality-at-departure');
    } else if ((inlandMode == '(2) Rail transport' ||
            inlandMode == '(20) Rail transport'
        )) {
        res.redirect('change-at-border');
    } else {
        res.redirect('add-id-at-departure')
    }

})

/*
    Add ID at departure
    If the user selects "Yes" to "Add ID at departure?", take them to "What is the ID at departure?"
    If the user selects "No" to "Add ID at departure?", take them to "Add ID at departure later"
*/

router.post('/transport/add-id-at-departure', function (req, res) {

    let addIDAtDeparture = req.session.data.addIDAtDeparture;

    if (addIDAtDeparture == 'Yes') {
        res.redirect('id-at-departure');
    } else {
        res.redirect('add-id-at-departure-later');
    }

})

//ID at departure to change at border
router.post('/transport/id-at-departure', function(req, res) {
    res.redirect('nationality-at-departure');
  });

//Add ID at departure later to change at border
router.post('/transport/add-id-at-departure-later', function(req, res) {
    res.redirect('nationality-at-departure');
  });

//Nationality at departure to change at border
router.post('/transport/nationality-at-departure', function(req, res) {
    res.redirect('change-at-border');
  });

/*
    Change at border
    If the user selects "Yes" to "Do these details change at the border?", take them to "mode at border"
    If the user selects "No" to "Do these details change at the border?", take them to "check your answers"
*/

router.post('/transport/change-at-border', function (req, res) {

    let changeAtBorder = req.session.data.changeAtBorder;

    if (changeAtBorder == 'No') {
        res.redirect('check-your-answers');
    } else {
        res.redirect('mode-at-border');
    }

})

//Check your answers to confirm your employer
router.post('/transport/mode-at-border', function(req, res) {
    res.redirect('id-crossing-border');
  });

//Check your answers to confirm your employer
router.post('/transport/id-crossing-border', function(req, res) {
    res.redirect('mode-crossing-border');
  });

/* 
    Mode crossing the border
    If the user selects 2,20,5,50,7,70 take them to check your answers
    If the user selects anything else take them to "nationality crossing the border"
*/

router.post('/transport/mode-crossing-border', function (req, res) {

    let modeCrossingBorder = req.session.data.modeCrossingBorder;

    if ((modeCrossingBorder == '(5) Postal Consignment' ||
            modeCrossingBorder == '(50) Postal Consignment' ||
            modeCrossingBorder == '(7) Fixed transport installations' ||
            modeCrossingBorder == '(70) Fixed transport installations' ||
            modeCrossingBorder == '(2) Rail transport' ||
            modeCrossingBorder == '(20) Rail transport'
        )) {
        res.redirect('check-your-answers');
    } else {
        res.redirect('nationality-crossing-border')
    }

})

/* 
    Goods summary routes
*/

//Total packages to total gross mass
router.post('/goods-summary/total-packages', function(req, res) {
    res.redirect('total-gross-mass');
  });

/*
    Total gross mass
    If the user selects Yes for "safety and security details", take them to "loading place"
    Else take them to "add customs sub place" (normal) or "authorised location code simplified"
        If the user has selected "normal procedure" take them to "add customs sub place"
        If the user has selected "simplified procedure" take them to "authorised location code"
*/

router.post('/goods-summary/total-gross-mass', function (req, res) {

    let securityProcess = req.session.data.securityProcess;
    let departuresProcedureType = req.session.data.departuresProcedureType;

    if (securityProcess == 'Yes') {
        res.redirect('loading-place');
    } else {

        if (departuresProcedureType == 'Normal') {
            res.redirect('add-customs-approved-location');
        } else {
            res.redirect('authorised-location-code');

        }
    }

})



/*
    Mode crossing the border
    If the user selects normal procedure type, take them to "Do you want to add a customs approved location?"
    If the user selects simplified procedure type, take them to "Authorised location code"
*/

router.post('/goods-summary/loading-place', function (req, res) {

    let departuresProcedureType = req.session.data.departuresProcedureType;

    if (departuresProcedureType == 'Normal') {
        res.redirect('add-customs-approved-location');
    } else {
        res.redirect('authorised-location-code');
    }

})

/**
 * Liability Amount
 */
router.post('/guarantee/check-libaility-amount', function (req, res) {
    var sessionData=req.session.data;
    let liabilityAmount = sessionData.liabilityAmount;
    if (String(liabilityAmount).length > 0) {
        sessionData.liabilityDefaultAmount="";
        res.redirect('access-code');
    } else {
        res.redirect('default-amount');
    }
})




module.exports = router