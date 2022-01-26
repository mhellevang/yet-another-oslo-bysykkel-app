import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@material-ui/core";
import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import {LocalParking} from "@material-ui/icons";

function StationDetailsDialog(props) {
    const station = props.station;
    const isRenting = station.status.is_renting === 1;

    return (
        <Dialog
            open
            aria-labelledby="station-details-title"
            aria-describedby="station-details-description"
            scroll="body"
            maxWidth="md"
            onClose={props.closeDialog}
        >
            <DialogTitle id="station-details-title">
                {station.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="station-details-description">
                    <Typography component={'span'} variant="body1">{station.address}</Typography>
                    <Box marginTop={2}>
                        <Typography component={'span'} variant="body1" color="textPrimary">
                            <DirectionsBikeIcon color="primary"
                                                style={{position: 'relative', top: '5px', marginRight: '5px'}}/>
                            {station.status.num_bikes_available} {station.status.num_bikes_available === 1 ? 'ledig sykkel' : 'ledige sykler'}
                        </Typography>
                    </Box>

                    <Box marginTop={0.5}>
                        <Typography component={'span'} variant="body1" color="textPrimary">
                            <LocalParking color="primary" style={{position: 'relative', top: '5px'}} />
                            {station.status.num_docks_available} {station.status.num_docks_available === 1 ? 'tilgjengelig' : 'tilgjengelige'}
                        </Typography>
                    </Box>

                    {isRenting &&
                    <Box marginTop={2}>
                        <Typography component={'span'} variant="body1" color="textPrimary">
                            <CheckCircleIcon color="primary"
                                             style={{position: 'relative', top: '5px', marginRight: '5px'}}/>
                            Stasjonen er åpen!
                        </Typography>
                    </Box>}

                    {!isRenting &&
                    <Box marginTop={2}>
                        <Typography component={'span'} variant="body1" color="textSecondary">
                            <NotInterestedIcon color="error"
                                             style={{position: 'relative', top: '5px', marginRight: '5px'}}/>
                            Beklager, stasjonen er stengt
                        </Typography>
                    </Box>}

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeDialog} color="primary">
                    Lukk
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default StationDetailsDialog