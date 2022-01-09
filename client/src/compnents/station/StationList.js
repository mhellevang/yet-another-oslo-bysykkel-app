import React, {useState} from 'react';
import {sortBy} from 'rambda';
import {Box, createStyles, Grid, IconButton, InputAdornment, InputBase, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Station from "./Station";

const useStyles = makeStyles(() =>
    createStyles({
        adornedEnd: {
            margin: 0
        }
    }),
);

function StationList(props) {

    const [stations, setStations] = useState(props.stations)
    let filterValue = "";

    const setSearchFilter = function (event) {
        filterValue = event.target.value;
    }
    const onSubmit = function (event) {
        event.preventDefault();
        let stations = props.stations.filter((it) => {
            return it.name.toLowerCase().includes(filterValue.toLowerCase());
        })
        setStations(stations)
    }
    const clearSearch = function () {
        filterValue = "";
        setStations(props.stations);
    }

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box margin={2}>
                    <form onSubmit={(event) => {
                        onSubmit(event);
                    }}>
                        <InputBase
                            placeholder="Finn sykkel..."
                            onChange={(e) => {
                                setSearchFilter(e);
                            }}
                            inputProps={{'aria-label': 'search'}}
                            endAdornment={
                                <>
                                    <InputAdornment position={"start"} className={classes.adornedEnd}>
                                        <IconButton type="submit" size={"small"}>
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                    <InputAdornment position={"start"} className={classes.adornedEnd}>
                                        <IconButton size={"small"} onClick={() => {
                                            clearSearch();
                                        }}>
                                            <ClearIcon/> Nullstill søk
                                        </IconButton>
                                    </InputAdornment>
                                </>
                            }
                        />
                    </form>
                </Box>
            </Grid>
            {sortBy((it) => it.name ?? '', stations).map((it) => (
                <Station key={it.station_id} station={it}/>
            ))}
        </Grid>
    );
}

export default StationList;
