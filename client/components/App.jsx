import React, {useState, useEffect} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home from './Home'


const App = () => {

  return (
    <Router>
      <div>
      <Link to={'/'}><img src='/images/BabyCentralLogo.png' /></Link>
      </div>
      <div>
        <h2 className='tagline'>-- Your one stop for everything baby related --</h2>
      </div>
    
      <div>
        <Route exact path='/' component={Home} />
      </div>
    
    </Router>
  )
}

export default App
