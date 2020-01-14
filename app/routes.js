const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
function getData(res){
    var dummyData = require('./data/data.js')
    res.locals['CTCData'] = dummyData
    // console.log(dummyData.officesOfDeparture)
}


/* catch-all routes */
router.get('*', function (req, res, next) {
    getData(res)
    res.render('./' + req._parsedUrl.pathname)
    return
  })

  router.post('*', function(req, res, next) {
    getData(res)

    //standard route from main routes file
    if (req.body['next-page']) {
      res.redirect(req.body['next-page']);
    } else if (req.body){
      for (var propName in req.body) {
        if (req.body.hasOwnProperty(propName) ) {
          req.session[propName] = req.body[propName]
          //eval("req.session." + propName + " = req.body." + propName);
        }}
          next();
    } else {
      next();
    }

  })

module.exports = router
