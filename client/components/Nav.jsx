import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav () {
  return (
    <>
      <div className='nav'>
        <IfNotAuthenticated>
          <NavLink to='/signin' className='navbutton'>Sign In</NavLink>
        </IfNotAuthenticated>
        <IfNotAuthenticated>
          <NavLink to='/register' className='navbutton'>Register</NavLink>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <NavLink to='/' onClick={logOff} className='navbutton'>Log Off</NavLink>
        </IfAuthenticated>
      </div>

    </>
  )
}

export default Nav
