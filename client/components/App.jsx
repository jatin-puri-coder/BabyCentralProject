import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import BabyPhotography from './BabyPhotography'
import Home from './Home'
import BabyClothing from './BabyClothing'
import Photographers from './Photographers'
import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Nav} />
      <div className='container'>
        <Link to={'/'}><img className='logo' src='/images/BabyCentralLogo.png' /></Link>
      </div>
      <div>
        <h2 className='tagline'>-- Your one stop for everything baby related --</h2>
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/babyphotography' component={BabyPhotography} />
        <Route exact path='/babyclothing' component={BabyClothing} />
        <Route exact path={'/photographers/:name'} component={Photographers} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />

      </div>
    </Router>
  )
}

export default App
