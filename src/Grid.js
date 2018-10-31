import React, { Fragment } from 'react'

import Header from './Header'
import Play from './play/Play'
import Footer from './Footer'

export default props => (
  <Fragment>
    <Header />
    <main>
      <Play />
    </main>
    <Footer />
  </Fragment>
)
