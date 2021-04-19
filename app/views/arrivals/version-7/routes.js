const express = require('express')
const router = express.Router()



router.get('/playlists/:name', function (req, res) {
  var list = req.params.name
  var playlist = require('./playlists/' + list);
  var title = playlist.playlists[0].name;
  if(playlist.name){
    title = playlist.name
  }
  res.render('./playlist', {
    'title': title,
    'playlists': playlist.playlists,
    'playlistDir': playlist.directory
  })
})

router.post('/arrivals-history-search-route', function (req, res) {
  var sessionData = req.session.data;
  let notificationSearch = sessionData.notificationSearch;
  if (notificationSearch != '') {
      res.redirect('arrivals-history-search-results');
  } else {
      res.redirect('arrivals-history-search-error');
  }
})


module.exports = router