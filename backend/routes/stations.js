const express = require('express');
const getStations = require("../controllers/stationController");
const router = express.Router();

router.get('/', function (req, res, next) {

    getStations().then((value => {
        res.send(value);
    })).catch(next)

});

module.exports = router;
