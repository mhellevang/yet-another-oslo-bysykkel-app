import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
    AppBar, Box,
    createStyles, createTheme,
    IconButton,
    Link,
    makeStyles,
    Toolbar,
    Tooltip,
    Typography
} from '@material-ui/core';
import Menubar from "./Menubar";

const theme = createTheme();

theme.typography.h5 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
        fontSize: '8rem',
    }
};

const useStyles = makeStyles(() =>
    createStyles({
        toolbar: {
            minHeight: '48px'
        },
        title: {
            flexGrow: 1,
            textAlign: 'left',
            marginLeft: '1em'
        },
        menubar: {
            textAlign: 'left'
        }
    }),
);

function AppHeader(props) {
    const classes = useStyles();
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.menubar}>
                        <Menubar onTabChange={props.onTabChange}></Menubar>
                    </div>
                    <Typography variant="h5" className={classes.title}>
                        YAOB
                    </Typography>
                    <Tooltip title="Source code">
                        <IconButton
                            component={Link}
                            href="https://github.com/mhellevang/yet-another-oslo-bysykkel-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon color="action"/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default AppHeader;