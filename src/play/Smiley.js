import React from 'react'
import Lottie from 'react-lottie'

import smileyStack from '../smileyStack.json'

export default props => (
  <Lottie
    options={{
      loop: false,
      autoplay: true,
      animationData: smileyStack,
    }}
    height={50}
    width={50}
    isStopped
    isPaused
    style={{ display: 'inline-block' }}
  />
)
