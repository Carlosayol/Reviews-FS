import React, { useEffect, useState } from "react";
import { Container, Typography, Grow, Grid, AppBar } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getInfluencers } from "./actions/influencers";
import Influencers from "./components/Influencers/Influencers";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(getInfluencers());
  }, [selectedId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Influencers
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignContent="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Influencers setSelectedId={setSelectedId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form selectedId={selectedId} setSelectedId={setSelectedId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
