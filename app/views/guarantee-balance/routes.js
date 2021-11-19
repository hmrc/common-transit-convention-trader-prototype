const express = require('express');
const session = require('express-session');
const router = express.Router()

router.post('/eori', function (req, res) {
    res.redirect("guarantee-reference");
});

router.post('/guarantee-reference', function (req, res) {
    res.redirect("access-code");
});

router.post('/access-code', function (req, res) {
    res.redirect("check-your-answers");
});

router.post('/check-your-answers', function (req, res) {
    let accessCode = req.session.data.accessCode;

    if (accessCode.endsWith("906")) {
        res.redirect("details-do-not-match");
    } else if (accessCode.endsWith("000")) {
        res.redirect("please-wait");
    } else if (accessCode.endsWith("914")) {
        res.redirect("guarantee-type-not-supported");
    } else {
        res.redirect("balance-confirmation");
    }
});

module.exports = router