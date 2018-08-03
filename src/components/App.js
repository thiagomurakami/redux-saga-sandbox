import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import Unicorn from '../containers/Unicorn'
import Confirmation from '../containers/Confirmation'

const App = () => (
  <React.Fragment>
    <Confirmation />
    <Unicorn />
    <div>
      <Header />
      <MainSection />
    </div>
  </React.Fragment>
)

export default App
