const express = require('express')
const router = express.Router()

var playlistConfig = require('./playlists/unloading-remarks');

router.get('/playlists/unloading-remarks', function (req, res) {
  res.render('./playlist', {
    'title': 'Unloading remarks',
    'playlists': playlistConfig.playlists,
    'playlistDir': playlistConfig.directory
  })
})


module.exports = router