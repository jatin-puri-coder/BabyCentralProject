import React, {useState, useEffect} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BabyPhotography from './BabyPhotography'
import Home from './Home'
import BabyClothing from './BabyClothing'


const App = () => {

  return (
    <Router>
      <div>
        <Link to={'/'}><img className='logo' src='/images/BabyCentralLogo.png' /></Link>
      </div>
      <div>
        <h2 className='tagline'>-- Your one stop for everything baby related --</h2>
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/babyphotography' component={BabyPhotography} />
        <Route exact path='/babyclothing' component={BabyClothing} />
      </div>
      
    
    </Router>
  )
}

export default App
