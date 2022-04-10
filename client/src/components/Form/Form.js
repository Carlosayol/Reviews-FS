import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createInfluencer, updateInfluencer } from '../../actions/influencers';

const Form = ({ selectedId, setSelectedId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const influencer = useSelector((state) =>
    selectedId
      ? state.influencers.find((i) => i._id === selectedId)
      : null
  );
  const [formData, setFormData] = useState({
    name: "",
    locations: "",
    tags: "",
    image: "",
    followerCount: 0,
  });

  useEffect(() => {
    if (influencer) {
      setFormData(influencer);
    }
  }, [influencer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedId) {
      dispatch(updateInfluencer(selectedId, formData));
    } else {
      dispatch(createInfluencer(formData));
    }
    clear();
  };

  const clear = () => {
    console.log('E')
    setSelectedId(null)
    setFormData({
      name: "",
      locations: "",
      tags: "",
      image: "",
      followerCount: 0,
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
        <Typography variant="h6">{selectedId ? 'Update an Influencer' : 'Create a new Influencer'}</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          name="locations"
          variant="outlined"
          label="Location/s"
          fullWidth
          value={formData.locations}
          onChange={(e) =>
            setFormData({ ...formData, locations: e.target.value.split(',') })
          }
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
          name="followerCount"
          variant="outlined"
          label="Followers"
          type="number"
          fullWidth
          value={formData.followerCount}
          onChange={(e) =>
            setFormData({ ...formData, followerCount: e.target.value })
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
