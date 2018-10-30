import identity from 'lodash/identity'
import map from 'lodash/map'
import random from 'lodash/random'

import prefixedReducer, { sufix } from '../store/prefixedReducer'

const card = { id: 0, received: 0, delivered: 0, inventory: 0 }
const card1 = { ...card, id: 1 }
const card2 = { ...card, id: 2 }
const card3 = { ...card, id: 3 }
const card4 = { ...card, id: 4 }

const initialState = {
  cards: [card1, card2, card3, card4],
}

const reducers = {
  RESET: () => initialState,
  RECEIVE: (state, action) => {
    const newCards = map(state.cards, (card, index) => {
      if (card.id !== action.id) {
        return card
      }
      return {
        ...card,
        received: action.value,
      }
    })
    return {
      ...state,
      cards: newCards,
    }
  },
  DELIVER: (state, action) => {
    let delivered
    const newCards = map(state.cards, (card, index) => {
      if (card.id === action.id) {
        const { received } = card
        const produced = random(1, 6)
        delivered = produced > received ? received : produced

        return {
          ...card,
          delivered,
          inventory: received - delivered,
        }
      }
      if (card.id === action.id + 1) {
        return {
          ...card,
          received: delivered,
        }
      }
      return card
    })
    return {
      ...state,
      cards: newCards,
    }
  },
}

const reducer = (state = initialState, action = {}) =>
  (reducers[sufix(action.type)] || identity)(state, action)

export default prefixedReducer({
  prefix: '@play',
  reducer,
})