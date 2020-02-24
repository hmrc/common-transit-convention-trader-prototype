const express = require('express')
const router = express.Router()

var playlistArrivals = require('./playlists/make-arrival-notification');

function getFileList (dir, filelist, drillDown) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir)
  filelist = filelist || []
  //console.log(filelist);
  files.forEach(function (file) {
    //console.log(file);
    if (file !== '_admin' && fs.statSync(dir + '/' + file).isDirectory()) {
      if (drillDown) {
        filelist = getFileList(dir + '/' + file, filelist, drillDown)
      }
    } else {
      if (file.indexOf('.htm') > 0) {
        //console.log(file)
        filelist.push((dir + '/' + file).replace('./app/views/arrivals/version-3/', ''))
      }
    }
  })
  return filelist
}



router.get('/playlists/pages', function (req, res) {
  //checkSprint(res)
  //var list = getFileList('./' + playlistArrivals.directory, null, false)

  //var list = getFileList('./app/views/arrivals/version-3/', null, false)

  res.render('./arrivals/version-3/playlists/pages', {
    //'pages': list,
    'title': 'Arrivals',
    'playlist': playlistArrivals.playlist,
    'playlistDir': playlistArrivals.directory
  })
})


module.exports = router