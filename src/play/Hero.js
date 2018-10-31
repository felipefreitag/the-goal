import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { LOWER_BOUND, UPPER_BOUND } from './constants'

import rollDice from './rollDice'

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
})

export default withStyles(styles)(props => {
  const { classes, actions } = props

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          The Goal
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Start with 1 - 6 pieces in stage 1. Each stage rolls a D6 and moves
          that many pieces forward. A stage can't move more pieces than it
          currently has. Your goal is to get an output equal to or higher than
          your average stage capacity: 3.5.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  actions.reset()
                  actions.setGoal((LOWER_BOUND + UPPER_BOUND) / 2)
                  actions.receive({ id: 1, value: rollDice() })
                }}
              >
                Play the game
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() =>
                  (window.location.href =
                    'https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884270610')
                }
              >
                Read more
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
})
