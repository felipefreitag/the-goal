import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import random from 'lodash/random'
import map from 'lodash/map'

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

const card = { id: 0, received: 0, delivered: 0, inventory: 0 }
const card1 = { ...card, id: 1 }
const card2 = { ...card, id: 2 }
const card3 = { ...card, id: 3 }
const card4 = { ...card, id: 4 }

export default withStyles(styles)(
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        cards: [card1, card2, card3, card4],
      }

      this.receive = this.receive.bind(this)
      this.deliver = this.deliver.bind(this)
    }

    componentDidMount() {
      this.receive(1, random(1, 6))
    }

    receive(id, value) {
      const { cards } = this.state
      const newCards = map(cards, (card, index) => {
        if (card.id !== id) {
          return card
        }

        return {
          ...card,
          received: value,
        }
      })
      this.setState({ cards: newCards })
    }

    deliver(id) {
      const { cards } = this.state
      let delivered

      const newCards = map(cards, (card, index) => {
        if (card.id === id) {
          const { received } = card
          const produced = random(1, 6)
          delivered = produced > received ? received : produced

          return {
            ...card,
            delivered,
            inventory: received - delivered,
          }
        }

        if (card.id === id + 1) {
          return {
            ...card,
            received: delivered,
          }
        }

        return card
      })
      this.setState({ cards: newCards })
    }

    render() {
      const { classes } = this.props
      const { cards } = this.state

      return (
        <Fragment>
          <Header />
          <main>
            <Hero />
            <div className={classNames(classes.layout, classes.cardGrid)}>
              <Grid container spacing={40}>
                {cards.map(card => (
                  <Card
                    key={card.id}
                    card={card}
                    onClick={() => this.deliver(card.id)}
                  />
                ))}
              </Grid>
            </div>
          </main>
          <Footer />
        </Fragment>
      )
    }
  },
)
