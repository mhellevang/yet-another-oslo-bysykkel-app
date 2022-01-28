import {MapContainer, TileLayer} from 'react-leaflet'
import React from "react";

import StationMarker from "./StationMarker";
import {createStyles, makeStyles} from "@material-ui/core";
import LocateUser from "./LocateUser";

const useStyles = makeStyles((theme) =>
    createStyles({
        mapContainer: {
            height: 'calc(100vh - 100px)'
        },
    }),
);

function StationMap(props) {
    const stations = props.stations
    const classes = useStyles();

    return (
        <MapContainer center={[59.911491, 10.757933]}
                      zoom={15}
                      scrollWheelZoom={false}
                      className={classes.mapContainer}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocateUser/>

            {stations.map((it) => (
                <StationMarker key={it.station_id} station={it}></StationMarker>
            ))}

        </MapContainer>
    )
}

export default StationMap;