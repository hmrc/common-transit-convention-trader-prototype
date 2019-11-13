const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Local reference number to what declaration type
// router.post('/sign-in', function(req, res) {
//   res.redirect('tax-year-selection');
// });

/*
  Routes for trader details
  
*/

//Healthcare occupations list 2 to "Are you ambulance staff on active service?"
router.post('/trader-details/is-eori-known', function (req, res) {
  let healthcareC = req.body.healthcareC
  req.session.data.deduction = 125
  healthcareC === 'yes' ? res.redirect('/alt-journey/sprint-23/employer-contribution') : res.redirect('/alt-journey/sprint-23/healthcare/healthcare-A')
})




module.exports = router
