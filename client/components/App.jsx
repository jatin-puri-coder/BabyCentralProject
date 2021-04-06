import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Clicks from './Clicks'
import Navbar from './Navbar'

const App = (props) => {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route path='/clicks/:startingClicks' component={Clicks} />
        <Route path='/about'>I am the about page</Route>
        <Route path='/'>I am the home page</Route>
      </Switch>
    </Router>
  )
}

export default App
