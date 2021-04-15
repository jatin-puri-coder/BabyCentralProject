import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

function Home () {
    return (
        <Router>
            <div className='split left'>
                <h1 className='homeheading'>Baby Photography</h1>
                <div>
                    <Link to={'/babyphotography'}><img className='homepic' src='/images/MainBabyPhoto.jpeg' /></Link>
                </div>
            </div>
            <div className='split right'>
                <h1 className='homeheading'>Baby Clothing</h1>
                <div>
                    <Link to={'/babyclothing'}><img className='homepic' src='/images/MainClothingPhoto.png' /></Link>
                </div>
            </div>
        </Router>
    )
}

export default Home