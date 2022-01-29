import React, {useCallback, useState} from 'react';
import {range} from 'rambda';
import {Box, Grid} from '@material-ui/core';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Station from "./Station";
import StationFilter from "./StationFilter";

function EndlessLoadingStationList(props) {
    const [stations, setStations] = useState(props.stations)
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(25)

    const numPages = Math.abs(props.stations.length / pageSize)

    const addPage = () => setCurrentPage((p) => p + 1);

    const updateSearchFilter = useCallback((value) => {
        setStations(props.stations.filter((it) => {
            return it.name.toLowerCase().includes(value.toLowerCase());
        }));
        setPageSize(Math.max(25, stations.length));
    }, [props.stations])

    console.log(currentPage)

    const handleOnBottom = () => {
        console.log("hello")
        if (currentPage < numPages) {
            addPage();
        }
    };

    useBottomScrollListener(handleOnBottom, { debounce: 500 , offset: 300});

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box margin={2}>
                        <StationFilter updateFilter={updateSearchFilter}></StationFilter>
                    </Box>
                </Grid>
                {range(0, currentPage).map((it) => (
                    <StationList key={it} page={it} pageSize={pageSize} stations={stations} />
                ))}
            </Grid>
        </>
    );
}

function StationList(props) {
    const page = props.page;

    const pageSize = props.pageSize;
    const stations = props.stations;

    function slicePage() {
        const start = page * pageSize;
        const end = (page+1) * pageSize;

        const slice = stations.slice(start, end)
        return slice
    }

    return (
        <>
            {
                slicePage().map((it) => (
                    <Station key={it.station_id} station={it}/>
                ))
            }
        </>
    );
}

export default EndlessLoadingStationList;