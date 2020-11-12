import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message));

  }

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message));

  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Logo Amazon"
        />
      </Link>


      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className='login_signInButton'
            onClick={signIn}
          >
            Sign in
          </button>

        </form>
        <p>
          By signing-in you agree yo AMAZON FAKE
          CLONE Conditions of Use & Sale. Please
          see our Interest-Based Ads Notice.
        </p>

        <button
          className='login_registerButton'
          onClick={register}
        >Create yout Amazon Account</button>

      </div>

    </div>
  )
}

export default Login
