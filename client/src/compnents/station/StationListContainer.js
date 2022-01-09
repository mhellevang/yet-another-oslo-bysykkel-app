import React, {useEffect, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Box} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import StationList from "./StationList";

function StationListContainer() {
    return <Box pb={12}><StationListPage/></Box>;
}

function StationListPage() {
    let [data, setData] = useState([])
    let [isLoaded, setIsLoaded] = useState(false);
    let [error, setError] = useState(null);

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

    return <StationList stations={data ?? []}/>;
}


export default StationListContainer;
