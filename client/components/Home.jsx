import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Home () {
  return (
    <Router>
      <IfAuthenticated>
        <div className='split left'>
          <h1 className='homeheading'>Baby Photography</h1>
          <div className='position'>
            <Link to={'/babyphotography'}><img className='homepic' src='/images/MainBabyPhoto.jpeg' /></Link>
            <div className='textoverimg'>Lisa Quirk Photography</div>
          </div>
        </div>
        <div className='split right'>
          <h1 className='homeheading'>Baby Clothing</h1>
          <div className='position'>
            <Link to={'/babyclothing'}><img className='homepic' src='/images/MainClothingPhoto.png' /></Link>
            <div className='textoverimg'>Nature Baby</div>
          </div>
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <br></br>
        <div><h1 className='title'>Please Sign In or Register to view website</h1></div>
      </IfNotAuthenticated>
    </Router>
  )
}

export default Home
