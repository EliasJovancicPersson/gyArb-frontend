import './styles/Signup.css'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'

function Signup () {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

  // eslint-disable-next-line no-unused-vars
  async function SignupUser (credentials) {
    return fetch('https://gyarb-backend.azurewebsites.net/auth/signup', {
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
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignupUser({ email, password, username, name })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText)
        } else {
          return response
        }
      })
      .then(() => {
        Navigate('/login')
      })
  }

  return (
    <div className="container column-center">
      <div id="signup-container">
        <form id="signup-form" onSubmit={handleSubmit}>
          <h1>Skapa Konto</h1>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-post adress"
            id="email"
          />
          <input
            type="text"
            name="username"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Användarnamn"
            id="username"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="lösenord"
            id="password"
          />
          <input type="button" value="Skapa Konto" id="signup" />
          <div className="login">
            <p>Har du redan ett konto?</p>
            <Link to={'/login'}>Logga in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
