const express = require('express')
const router = express.Router()

    /*
        If the user selects "yes" to "state of seals", AND "yes" to "unloading complete", then they are taken to "check unloading permission"

        Anything else and the user is taken to "change unloading permission"
    */

    router.post('/are-any-seals-broken', function (req, res) {

        let sealsBroken = req.session.data.sealsBroken;
        let canSealsBeRead = req.session.data.canSealsBeRead;

        if (sealsBroken == ('Yes') || canSealsBeRead == ('No')) {
            res.redirect('seal-damage-details');
        } else {
            res.redirect('unloading-remarks');
        }

    })

module.exports = router