import React from "react";
import {
  Card,
  CardActions,
  Button,
  CardMedia,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deleteInfluencer } from "../../../actions/influencers";

const Influencer = ({ influencer, setSelectedId }) => {
  const dispatch = useDispatch()
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={influencer.image}
        title={influencer.name}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{influencer.name}</Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {influencer.followerCount} Follower/s
      </Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {influencer.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {influencer.locations.map((location) => `${location} `)}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => setSelectedId(influencer._id)}>
          <BorderColorIcon fontSize="small" />
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteInfluencer(influencer._id))}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Influencer;
