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

  router.post('/overview/add-transport-details', function (req, res) {

    let addTransportDetails = req.session.data.addTransportDetails;

    if (addTransportDetails == 'No') {
        res.redirect('check-your-answers');
    } else {
        res.redirect('transport-details/transport-details');
    }

})



module.exports = router
