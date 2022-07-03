import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Review from './Review/Review'
import useStyles from './styles'

const Reviews = ({ setSelectedId }) => {
  const reviews = useSelector((state) => state.reviews)
  const classes = useStyles()
  
  return (
    !reviews.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {
          reviews.map((review) => (
            <Grid key={review._id} item xs={12} sm={6} >
              <Review review={review} setSelectedId={setSelectedId} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Reviews