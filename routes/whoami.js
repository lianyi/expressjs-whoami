var express = require('express');
var router = express.Router();

/* GET whoami information */
router.get('/', function (req, res, next) {
    res.json({
        ipaddress: (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split(/[\(\)]/)[1],
        os: req.useragent.os,
        browser: req.useragent.browser
    });

});

module.exports = router;
