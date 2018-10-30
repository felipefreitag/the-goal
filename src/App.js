import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/store'
import './App.css'

import Grid from './Grid'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grid />
      </Provider>
    )
  }
}
