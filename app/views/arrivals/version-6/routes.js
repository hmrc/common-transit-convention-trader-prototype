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


module.exports = router