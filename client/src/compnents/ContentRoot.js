import React from 'react';
import {Container, createStyles, Grid, makeStyles} from '@material-ui/core';
import StationMapContainer from "./station/StationMapContainer";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(10),
    },
  }),
);

function ContentRoot() {
  const classes = useStyles();

  return (
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
              <StationMapContainer />
          </Grid>
        </Grid>
      </Container>
  );
}

export default ContentRoot;