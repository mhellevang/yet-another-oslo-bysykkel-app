import React, {useState} from 'react';
import {Box, ButtonBase, Card, CardHeader, createStyles, Grid, makeStyles, Typography,} from '@material-ui/core';

import {formatDistance, parseISO} from "date-fns";
import {nb} from 'date-fns/locale'
import {LocalParking} from "@material-ui/icons";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import StationDetailsDialog from "./StationDetail";


const useStyles = makeStyles((theme) =>
    createStyles({
        cardRoot: {
            position: 'relative',
            width: '100%',
            '&:hover': {
                boxShadow: theme.shadows[5],
            },
            paddingBottom: theme.spacing(2),
        },
        buttonRoot: {
            width: '100%',
            textAlign: 'unset',
        },
        reportedText: {
            position: 'absolute',
            bottom: theme.spacing(1),
            right: theme.spacing(1),
        },
        availableDockingsText: {
            position: 'relative',
            bottom: theme.spacing(1),
            left: theme.spacing(1),
        },
        availableBikesText: {
            position: 'relative',
            bottom: theme.spacing(1),
            left: theme.spacing(1),
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

function Station(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const station = props.station

    const toggleOpen = () => {
        setOpen((e) => !e);
    };

    const {num_docks_available} = station.status;
    return (
        <>
            <Grid item xs={12}>
                <ButtonBase className={classes.buttonRoot} onClick={toggleOpen}>
                    <Card className={classes.cardRoot} onClick={() => {
                    }}>
                        <CardHeader title={`${station.name}`} subheader={`${station.address}`}/>
                        <Box className={classes.reportedText}>
                            <Typography variant="caption" color="textSecondary">
                                Sist oppdatert: {formatDate(station.status.last_reported)}
                            </Typography>
                        </Box>
                        <Grid container spacing={1 }>
                            <Grid item sm={2} xs={4}>
                                <Box className={classes.availableDockingsText}>
                                    <Typography  variant="body1" color="textPrimary">
                                        <DirectionsBikeIcon color="primary" style={{position: 'relative', top: '5px', marginRight: '5px'}} />
                                        {station.status.num_bikes_available} {station.status.num_bikes_available === 1 ? 'sykkel' : 'sykler'}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={2} xs={4}>
                                <Box className={classes.availableDockingsText}>
                                    <Typography variant="body1" color="textPrimary">
                                        <LocalParking color="primary" style={{position: 'relative', top: 'px'}} />
                                        {num_docks_available} {station.status.num_docks_available === 1 ? 'tilgjengelig' : 'tilgjengelige'}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </ButtonBase>
            </Grid>
            {open && <StationDetailsDialog station={station} closeDialog={toggleOpen}/>}
        </>
    );
}


function formatDate(dateString) {
    return formatDistance(parseISO(dateString), new Date(), {addSuffix: true, locale: nb})
}

export default Station;
