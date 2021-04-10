import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

function Home () {
    return (
        <Router>
            <div className='split left'>
                <h1 className='homeheading'>Baby Photography</h1>
            </div>
            <div className='split right'>
                <h1 className='homeheading'>Baby Clothing</h1>
            </div>
        </Router>
    )
}

export default Home