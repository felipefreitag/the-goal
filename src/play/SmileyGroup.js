import React from 'react'
import range from 'lodash/range'

import Smiley from './Smiley'

export default ({ amount }) =>
  range(amount).map(value => <Smiley key={value} />)
