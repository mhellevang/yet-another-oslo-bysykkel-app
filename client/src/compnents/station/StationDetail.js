import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@material-ui/core";
import React from "react";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

function StationDetailsDialog(props) {
    const station = props.station

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
                    <Typography noWrap={true} variant="body1" color="textPrimary">
                        {station.address}
                        <br/>
                        <DirectionsBikeIcon color="primary"
                                            style={{position: 'relative', top: '5px', marginRight: '5px'}}/>
                        {station.status.num_bikes_available} av {station.capacity} sykler tilgjengelig
                    </Typography>
                    TODO: Kart her
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