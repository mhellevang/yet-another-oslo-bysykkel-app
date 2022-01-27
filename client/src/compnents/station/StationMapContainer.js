import React, {useEffect, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Box, Grid} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import StationMap from "./StationMap";

function StationMapContainer() {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/stations')
            .then(response => {
                if (response.status > 400) {
                    throw new Error(`An error occured when fetching stations: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsLoaded(true);
            }).catch(error => {
            setError("Oopps! Noe gikk galt ved henting av stasjonsdata. Vi er på saken!");
        })
    }, [])


    if (!isLoaded && !error) {
        return (
            <Box margin={2}>
                <LinearProgress/>
            </Box>
        );
    }

    if (error) {
        return <Alert severity="warning">{error}</Alert>
    }

    return (
        <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
                <StationMap stations={data ?? []}></StationMap>
            </Grid>
        </Grid>
    )
}

export default StationMapContainer