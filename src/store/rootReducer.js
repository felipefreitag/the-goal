import { combineReducers } from 'redux'

import play from '../play/reducer'

const reducers = {
  play,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
