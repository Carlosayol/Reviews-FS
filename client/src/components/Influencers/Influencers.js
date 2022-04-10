import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Influencer from './Influencer/Influencer'
import useStyles from './styles'

const Influencers = ({ setSelectedId }) => {
  const influencers = useSelector((state) => state.influencers)
  const classes = useStyles()
  
  return (
    !influencers.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {
          influencers.map((influencer) => (
            <Grid key={influencer._id} item xs={12} sm={6} >
              <Influencer influencer={influencer} setSelectedId={setSelectedId} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Influencers