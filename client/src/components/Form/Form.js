import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createReview, updateReview } from '../../actions/reviews';

const Form = ({ selectedId, setSelectedId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const review = useSelector((state) =>
    selectedId
      ? state.reviews.find((i) => i._id === selectedId)
      : null
  );
  const [formData, setFormData] = useState({
    name: "",
    tags: "",
    image: "",
    score: 0,
  });

  useEffect(() => {
    if (review) {
      setFormData(review);
    }
  }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedId) {
      dispatch(updateReview(selectedId, formData));
    } else {
      dispatch(createReview(formData));
    }
    clear();
  };

  const clear = () => {
    console.log('E')
    setSelectedId(null)
    setFormData({
      name: "",
      tags: "",
      image: "",
      score: 0,
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{selectedId ? 'Update a Review' : 'Create a new Review'}</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tag/s"
          fullWidth
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',') })}
        />
        <TextField
          name="score"
          variant="outlined"
          label="Score"
          type="number"
          fullWidth
          value={formData.score}
          onChange={(e) =>
            setFormData({ ...formData, score: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
        </div>
        <Button
          color="primary"
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          SUBMIT
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
