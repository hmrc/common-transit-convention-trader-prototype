const express = require('express')
const router = express.Router()

//router.use('/arrivals/version-3', require('./views/arrivals/version-3/routes'))

router.use('/arrivals/version-:routeVersion', (req, res, next) => {
  var routeVersion = req.params.routeVersion
  require('./views/arrivals/version-' + routeVersion + '/routes')(req, res, next)
})
router.use('/unloading-remarks/version-:routeVersion', (req, res, next) => {
  var routeVersion = req.params.routeVersion
  require('./views/unloading-remarks/version-' + routeVersion + '/routes')(req, res, next)
})

router.use('/departures/version-:routeVersion', (req, res, next) => {
  var routeVersion = req.params.routeVersion
  require('./views/departures/version-' + routeVersion + '/routes')(req, res, next)
})

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

router.use('/unloading-remarks/version-5/seals-included', require('./views/unloading-remarks/version-5/seals-included/routes'));

//Standard departures routing

// //router.use('/departures/version-3', require('./views/departures/version-3/routes'));

// //router.use('/departures/version-4', require('./views/departures/version-4/routes'));

// //router.use('/departures/version-5', require('./views/departures/version-5/routes'));

// router.use('/departures/version-6', require('./views/departures/version-6/routes'));

// router.use('/departures/version-7', require('./views/departures/version-7/routes'));

//Departures static version routing

router.use('/departures/static-v4', require('./views/departures/static-v4/routes'));

router.use('/departures/static-v6', require('./views/departures/static-v6/routes'));

router.use('/departures/static-v7', require('./views/departures/static-v7/routes'));


router.use('/iterations/', require('./views/iterations/routes'));


module.exports = router