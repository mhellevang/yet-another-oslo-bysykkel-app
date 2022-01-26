import React from 'react';
import {Container, createStyles, Grid, makeStyles, Typography} from '@material-ui/core';
import StationListContainer from "./station/StationListContainer";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(12),
    },
  }),
);

function ContentRoot() {
  const classes = useStyles();

  return (
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
              <StationListContainer />
          </Grid>
        </Grid>
      </Container>
  );
}

export default ContentRoot;
