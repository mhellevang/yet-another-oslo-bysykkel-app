import React from 'react';
import {Container, createStyles, Grid, makeStyles} from '@material-ui/core';
import StationContainer from "./station/StationContainer";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(3),
    },
  }),
);

function ContentRoot(props) {
  const classes = useStyles();

  return (
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
              <StationContainer selectedTab={props.selectedTab} />
          </Grid>
        </Grid>
      </Container>
  );
}

export default ContentRoot;