import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import Unicorn from '../containers/Unicorn'

const App = () => (
  <React.Fragment>
    <Unicorn />
    <div>
      <Header />
      <MainSection />
    </div>
  </React.Fragment>
)

export default App
