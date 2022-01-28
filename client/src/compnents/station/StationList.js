import React, {useCallback, useState} from 'react';
import {sortBy} from 'rambda';
import {Box, Grid} from '@material-ui/core';
import Station from "./Station";
import StationFilter from "./StationFilter";

function StationList(props) {

    const [stations, setStations] = useState(() =>{
        const stations = props.stations
        return stations;
    });

    const updateSearchFilter = useCallback((value) => {
        setStations(props.stations.filter((it) => {
            return it.name.toLowerCase().includes(value.toLowerCase());
        }));
    }, [props.stations])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box margin={2}>
                    <StationFilter updateFilter={updateSearchFilter}></StationFilter>
                </Box>
            </Grid>
            {sortBy((it) => it.name ?? '', stations).map((it) => (
                <Station key={it.station_id} station={it}/>
            ))}
        </Grid>
    );
}

export default StationList;