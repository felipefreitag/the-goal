import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default ({ goal, output, inventory }) => (
  <Grid container style={{ marginTop: 50 }}>
    <Grid item md={4}>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Goal: {goal}
      </Typography>
    </Grid>
    <Grid item md={4}>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Inventory: {inventory}
      </Typography>
    </Grid>
    <Grid item md={4}>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Current output: {output}
      </Typography>
    </Grid>
  </Grid>
)
