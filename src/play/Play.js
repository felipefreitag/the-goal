import React, { Fragment, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import last from 'lodash/last'
import omit from 'lodash/omit'

import Hero from './Hero'
import Card from './Card'
import RoundResult from './RoundResult'
import Total from './Total'

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
      componentDidUpdate(prevProps) {
        const { cards, actions } = this.props
        const { cards: prevCards } = prevProps
        if (last(cards).delivered > 0 && last(prevCards).delivered === 0) {
          actions.setResult()
        }
      }

      render() {
        const { classes, cards, actions } = this.props
        const heroProps = omit(this.props, ['classes'])

        return (
          <Fragment>
            <Hero {...heroProps} />
            <div className={classNames(classes.layout, classes.cardGrid)}>
              <Grid container spacing={40}>
                {cards.map(card => (
                  <Card
                    key={card.id}
                    card={card}
                    onClick={() => actions.deliver({ id: card.id })}
                  />
                ))}
              </Grid>
              <RoundResult {...this.props} />
              <Total {...this.props} />
            </div>
          </Fragment>
        )
      }
    },
  ),
)
