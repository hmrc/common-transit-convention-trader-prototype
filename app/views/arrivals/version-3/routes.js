const express = require('express')
const router = express.Router()

var playlistArrivals = require('./playlists/make-arrival-notification');

router.get('/playlists/arrivals', function (req, res) {
  res.render('./playlist', {
    'title': 'Arrivals',
    'playlists': playlistArrivals.playlists,
    'playlistDir': playlistArrivals.directory
  })
})


module.exports = router