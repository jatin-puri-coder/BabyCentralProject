import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOffUser } from '../passportapi'
import { IsAuthenticated, NotAuthenticated } from './Authenticated'

function Nav () {
  return (
    <>
      <div className='nav'>
        <NotAuthenticated>
          <NavLink to='/signin' className='navbutton'>Sign In</NavLink>
        </NotAuthenticated>
        <NotAuthenticated>
          <NavLink to='/register' className='navbutton'>Register</NavLink>
        </NotAuthenticated>
        <IsAuthenticated>
          <NavLink to='/' onClick={logOffUser} className='navbutton'>Log Off</NavLink>
        </IsAuthenticated>
      </div>

    </>
  )
}

export default Nav
