import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import random from 'lodash/random'

import Card from './Card'

import * as actions from './actions'

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

export default connect(
  state => ({ ...state.play }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(
  withStyles(styles)(
    class extends Component {
      componentDidMount() {
        this.props.actions.receive({ id: 1, value: random(1, 6) })
      }

      render() {
        const { classes, cards } = this.props

        return (
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {cards.map(card => (
                <Card
                  key={card.id}
                  card={card}
                  onClick={() => this.props.actions.deliver({ id: card.id })}
                />
              ))}
            </Grid>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
              style={{ marginTop: 50 }}
            >
              Current output: {cards[3].delivered}
            </Typography>
          </div>
        )
      }
    },
  ),
)
