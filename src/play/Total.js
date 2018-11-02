import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default ({ roundNumber, totalOutput, totalInventory }) => (
  <Grid container style={{ marginTop: 50 }}>
    <Grid item md={4}>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Total output: {totalOutput}
      </Typography>
    </Grid>
    <Grid item md={4}>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Accumulated inventory: {totalInventory}
      </Typography>
    </Grid>
    <Grid item md={4}>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Round: {roundNumber}
      </Typography>
    </Grid>
  </Grid>
)
