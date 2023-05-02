import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Login.css'
import PropTypes from 'prop-types'

async function loginUser (credentials, isGoogleLogin) {
  if (!isGoogleLogin) {
    return fetch('http://localhost:8000/auth/login', { // TODO : change back to api on the web
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: new URLSearchParams({
        email: credentials.email,
        password: credentials.password
      })
    })
  } else {
    return fetch('http://localhost:8000/auth/login', { // TODO : change back to api on the web
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: new URLSearchParams({
        jwt: credentials.jwt
      })
    })
  }
}

function Login (props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({ client_id: '1018800979482-4l8e73ndjgvksei3vu3el632vre3glpd.apps.googleusercontent.com', callback: handleCallbackResponse })
    google.accounts.id.renderButton(
      document.getElementById('signInGoogle'), {
        theme: 'outline', size: 'large'
      }
    )
  }, [])

  function handleCallbackResponse (response) {
    const jwtToken = response.credential
    console.log(jwtToken)
    loginUser({ jwt: jwtToken }, true).then((response) => {
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText)
      } else return response
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.authenticated) {
          localStorage.setItem('user', JSON.stringify(response.user))
          props.func(true)
          navigate('/')
        //    JSON.parse(localStorage.getItem("user"))  to get user object
        } else {
          props.func(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    // TODO : send jwt token to backend to verify and create account with
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser({
      email,
      password
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText)
        } else return response
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.authenticated) {
          localStorage.setItem('user', JSON.stringify(response.user))
          props.func(true)
          navigate('/')
          //    JSON.parse(localStorage.getItem("user"))  to get user object
        } else {
          props.func(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container column-center">
      <div id="login-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            id="email"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="lösenord"
            id="password"
          />
          <input type="submit" value="Login" id="login" />
          <div id='signInGoogle'></div>
          <div className="signup-form">
            <p>Inget Konto?</p>
            <Link to={'/signup'}>Registrera dig</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  func: PropTypes.function
}

export default Login
