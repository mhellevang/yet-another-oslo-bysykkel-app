import {Marker} from "react-leaflet";
import React, {useState} from "react";
import {Icon} from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
import markerIconShadow from "leaflet/dist/images/marker-shadow.png"
import StationDetails from "./StationDetails";

function StationMarker(prop) {
    const station = prop.station
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((e) => !e);
    };

    return (
        <Marker position={[station.lat, station.lon]}
                icon={new Icon({iconUrl: markerIconPng, shadowUrl: markerIconShadow, iconSize: [15, 25], iconAnchor: [12, 41]})}
                eventHandlers={{
                    click: () => {
                        toggleOpen();
                    }
                }}>
            {open && <StationDetails station={station} closeDialog={toggleOpen}/>}

        </Marker>
    )
}

export default StationMarker