import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import SmileyGroup from './SmileyGroup'

export default ({ goal, output, inventory, roundNumber, totalOutput }) => (
  <Fragment>
    <Grid container style={{ marginTop: 50 }}>
      <Grid item md={4}>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Round: {roundNumber}
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Goal: {goal}
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Current output: {output}
        </Typography>
        <SmileyGroup amount={output} />
      </Grid>
    </Grid>
    <Grid container style={{ marginTop: 50 }} spacing={24}>
      <Grid item md={6}>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Total output: {totalOutput}
        </Typography>
        <SmileyGroup amount={totalOutput} />
      </Grid>
      <Grid item md={6}>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Inventory: {inventory}
        </Typography>
        <SmileyGroup amount={inventory} />
      </Grid>
    </Grid>
  </Fragment>
)
