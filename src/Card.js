import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
})

export default withStyles(styles)(
  class extends Component {
    render() {
      const { classes, card, onClick } = this.props
      const { id, received, delivered, inventory } = card

      return (
        <Grid item sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Stage {id}
              </Typography>
              <Typography gutterBottom>Received {received}</Typography>
              <Typography gutterBottom>Delivered {delivered}</Typography>
              <Typography gutterBottom>Inventory {inventory}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={onClick}>
                Play
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )
    }
  },
)
