import React, { Fragment } from 'react'

import Header from './Header'
import Hero from './Hero'
import Play from './play/Play'
import Footer from './Footer'

export default props => (
  <Fragment>
    <Header />
    <main>
      <Hero />
      <Play />
    </main>
    <Footer />
  </Fragment>
)
