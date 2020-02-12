const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
function getData(res){
    var dummyData = require('./data/data.js')
    res.locals['CTCData'] = dummyData
    // console.log(dummyData.officesOfDeparture)
}

// Route index page
router.get('/', function (req, res) {
    res.render('index', {  })
  })


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

router.use('/unloading-remarks/version-1/main-seals', require('./views/unloading-remarks/version-1/main-seals/routes'));

router.use('/unloading-remarks/version-1/workaround-seals', require('./views/unloading-remarks/version-1/workaround-seals/routes'));

router.use('/unloading-remarks/version-2/seals-included', require('./views/unloading-remarks/version-2/seals-included/routes'));

router.use('/unloading-remarks/version-3/seals-included', require('./views/unloading-remarks/version-3/seals-included/routes'));

router.use('/unloading-remarks/version-4/seals-included', require('./views/unloading-remarks/version-4/seals-included/routes'));

module.exports = router