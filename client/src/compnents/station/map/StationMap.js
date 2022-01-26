import {MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import React, {useEffect, useState} from "react";

import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
import markerIconShadow from "leaflet/dist/images/marker-shadow.png"

import { Icon } from "leaflet";
import StationDetailsDialog from "../StationDetail";


function UserMarker() {
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            map.flyTo(e.latlng, map.getZoom());
        });
    }, [map]);

    return null;
}

function MapItem(prop) {
    const map = useMap();

    const station = prop.station
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((e) => !e);
    };

    return (
        <Marker position={[station.lat, station.lon]}
                icon={new Icon({iconUrl: markerIconPng, shadowUrl: markerIconShadow, iconSize: [20, 30], iconAnchor: [12, 41]})}
                eventHandlers={{
                    click: (e) => {
                        toggleOpen();
                    }
                }}>
            {open && <StationDetailsDialog station={station} closeDialog={toggleOpen}/>}

        </Marker>
    )
}

function StationMap(props) {
    const [stations, setStations] = useState(props.stations);

    console.log(props)

    return (
        <MapContainer center={[59.911491, 10.757933]}
                      zoom={15}
                      scrollWheelZoom={false}
                      style={{ height: "600px" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <UserMarker />

            {stations.map((it) => (
                <MapItem key={it.station_id} station={it}></MapItem>
            ))}

        </MapContainer>
    )
}

export default StationMap;