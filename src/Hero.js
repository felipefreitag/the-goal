import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

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
  const { classes } = props

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
          Dependency and variance kill productivity, take a look!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Play the game
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Read more
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
})
