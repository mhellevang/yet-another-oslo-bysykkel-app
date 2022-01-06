const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', function (req, res, next) {

    let config = {
        headers: {
            'Client-Identifier': 'mhellevang-yet-another-oslo-bysykkel-app'
        }
    };

    function getStationInformation() {
        return axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json', config)
    }

    function getStationStatuses() {
        return axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json', config)
    }

    (async () => {
        try {
            await Promise.all([
                getStationInformation(),
                getStationStatuses()]
            ).then(function (values) {
                res.send(values[1].data)
            })
        } catch (error) {
            console.log(error);
        }
    })();

});

module.exports = router;
