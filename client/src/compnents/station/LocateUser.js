import {useMap} from "react-leaflet";
import {useEffect} from "react";

/**
 * Update map location based on users position
 */
function LocateUser() {
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            map.flyTo(e.latlng, map.getZoom());
        });
    }, [map]);

    return null;
}

export default LocateUser