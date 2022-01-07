const axios = require("axios");
const Station = require("../models/station");

const config = {
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

function createStationMap(stationStatuses) {
    return stationStatuses.data.data.stations.reduce((map, status) => {
        const {station_id, ...statusWithoutId} = status
        map[status.station_id] = statusWithoutId
        return map;
    }, {});
}

function createStations(stationInformation, statusMap) {
    return stationInformation.data.data.stations.map((station) => {
        return new Station(station, statusMap[station.station_id])
    })
}

async function getStations() {
    try {
        const [stationInformation, stationStatuses] = await Promise.all([
            getStationInformation(),
            getStationStatuses()]
        );

        const statusMap = createStationMap(stationStatuses);
        return createStations(stationInformation, statusMap)
    } catch (error) {
        console.error(error.message, `url: ${error.config.url}`)
        throw new Error("Klarte ikke hente data fra eksternt API")
    }
}

module.exports = getStations