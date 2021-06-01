import React, { useState } from 'react'
import { registerUser, getUser } from '../passportapi'

const initialForm = {
  username: '',
  password: ''
}

function Register(props) {
  const [form, setForm] = useState(initialForm)
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
    registerUser(form)
      .then(result => {
        setForm(initialForm)
        if (result === 'User Created') {
          props.history.push('/')
          return getUser()
        } else {
          setError(result)
          return null
        }
      })
      .catch(err =>
        console.log('user not sent for registeration' + err.message))
  }

  //   const { username, password } = form
  //   register({ username, password }, { baseUrl })
  //     .then(() => {
  //       // eslint-disable-next-line promise/always-return
  //       if (isAuthenticated()) {
  //         props.history.push('/')
  //       }
  //     })
  //     .catch(err => {
  //       if (err.message === 'USERNAME_UNAVAILABLE') {
  //         setError('Username is not available')
  //       }
  //     })
  // }
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
