import React from 'react'
import { Link } from 'react-router-dom'


function Nav () {
    return (
        <>
            <div className='nav'>
            <Link className='navbutton'>Log Off</Link>
            <Link to='/register' className='navbutton'>Register</Link>
            <Link to='/signin' className='navbutton'>Sign In</Link>
            </div>

        </>
    )
}

export default Nav

