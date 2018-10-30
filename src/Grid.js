import React, { Fragment } from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import Footer from './Footer'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
})

const cards = [1, 2, 3, 4]

export default withStyles(styles)(props => {
  const { classes } = props

  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {cards.map(card => (
              <Card card={card} />
            ))}
          </Grid>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
})
