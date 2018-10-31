import random from 'lodash/random'
import { LOWER_BOUND, UPPER_BOUND } from './constants'

export default () => random(LOWER_BOUND, UPPER_BOUND)
