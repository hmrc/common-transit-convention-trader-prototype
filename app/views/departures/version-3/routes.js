const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// router.post('add-transport-details', function(req, res, next) {

//     if (req.body.addTransportDetails) {
//       var temp = req.body.addTransportDetails;
//       if (temp === "No ") {
//         return res.redirect("check-your-answers");
//       } else {
//         return res.redirect("transport-details/transport-details");
//       }
//     } else {
//       next();
//     }
//   })

router.post('/transport/add-transport-details', function (req, res) {

    let addTransportDetails = req.session.data.addTransportDetails;

    if (addTransportDetails == 'No') {
        res.redirect('../task-list');
    } else {
        res.redirect('transport-details');
    }

})


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
        res.redirect('add-nationality-at-departure');
    } else {
        res.redirect('id-at-departure')
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




module.exports = router