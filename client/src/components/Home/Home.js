import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getInfluencers } from "../../actions/influencers";
import Influencers from "../Influencers/Influencers";
import Form from "../Form/Form";
import { Container, Grow, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(getInfluencers());
  }, [selectedId, dispatch]);

  return (
    <Grow in>
    <Container>
      <Grid
        className={classes.mainContainer}
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
  )
}

export default Home