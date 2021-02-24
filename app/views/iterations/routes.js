const express = require('express')
const router = express.Router()

router.post('/movement-search/arrivals-v1/arrivals-history-search-route', function (req, res) {
  var sessionData = req.session.data;
  let notificationSearch = sessionData.notificationSearch;
  if (notificationSearch != '') {
      res.redirect('arrivals-history-search-results');
  } else {
      res.redirect('arrivals-history-search-error');
  }
})


module.exports = router