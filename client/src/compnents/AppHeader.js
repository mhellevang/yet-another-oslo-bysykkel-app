import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
    AppBar,
    createStyles,
    IconButton,
    Link,
    makeStyles,
    Toolbar,
    Tooltip,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
            textAlign: 'center'
        },
    }),
);

function AppHeader() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Yet Another Oslo Bysykkel App :)
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
    );
}

export default AppHeader;