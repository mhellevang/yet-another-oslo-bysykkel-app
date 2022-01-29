import {range} from "rambda";

const createTestStation  = () => {
    return {
        station_id: '123',
        name: 'Bysykkelstasjon',
        address: 'Karl Johans gate 1',
        capacity: '99',
        lat: 59.911491,
        lon: 10.757933,
        status: {
            is_installed: 1,
            is_renting: 1,
            is_returning: 1,
            last_reported: "2022-01-29T19:35:56.000Z",
            num_bikes_available: 1,
            num_docks_available: 1
        }
    }};

const createTestStationList  = (limit) => {
    let end = limit || 10
    let bigStationList = range(0, end).map((it) => {
        let station = createTestStation();
        station.name = `${station.name} ${it+1}`
        station.station_id = it+1
        return station
    });
    return bigStationList
};

export {createTestStation, createTestStationList};