import React, { useState } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

function Register(props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState('')

  function hideError () {
    setError('')
  }

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    const { username, password } = form
    register({ username, password }, { baseUrl })
      .then(() => {
        // eslint-disable-next-line promise/always-return
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
      .catch(err => {
        if (err.message === 'USERNAME_UNAVAILABLE') {
          setError('Username is not available')
        }
      })
  }
  return (
    <>
      <h1 className='heading'>Register</h1>
      <div onClick={hideError}>
        { error && `Error:${error}`}
      </div>
      <div className='form'>
        <form className='form'>
          <label htmlFor='username'>Username: </label>
          <input type='text'
            id='username'
            name='username'
            placeholder='enter your username'
            value={form.username}
            onChange={handleChange} />

          <label htmlFor='password'> Password: </label>
          <input type='password'
            id='password'
            name='password'
            placeholder='enter your password'
            value={form.password}
            onChange={handleChange} />
          <br></br>
          <button onClick={handleClick}>Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
