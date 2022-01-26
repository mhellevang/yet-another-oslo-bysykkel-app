function Station(station, status) {
    this.station_id = station.station_id;
    this.name = station.name;
    this.address = station.address
    this.capacity = station.capacity;
    this.lat = station.lat
    this.lon = station.lon
    this.status = status
}

module.exports = Station