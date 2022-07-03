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
import { deleteReview } from "../../../actions/reviews";

const Review = ({ review, setSelectedId }) => {
  const dispatch = useDispatch()
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={review.image}
        title={review.name}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{review.name}</Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {review.score}
      </Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {review.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => setSelectedId(review._id)}>
          <BorderColorIcon fontSize="small" />
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteReview(review._id))}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Review;
