import './styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Signup () {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  const [fName, setFname] = useState()
  const [lName, setlname] = useState()
  const navigate = useNavigate()

  async function SignupUser (credentials) { // TODO : try catch
    return fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: new URLSearchParams({
        email: credentials.email,
        password: credentials.password,
        username: credentials.username,
        fullName: credentials.fName + ' ' + credentials.lName
      })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignupUser({ email, password, fName, lName, username })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText)
        } else {
          navigate('/login')
        }
      })
  }

  return (
    <div className="container column-center">
      <div id="signup-container">
        <form id="signup-form" onSubmit={handleSubmit}>
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
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Användarnamn"
            id="username"
          />
          <div className='form-name'>
            <input
              type="text"
              name="fName"
              onChange={(e) => setFname(e.target.value)}
              placeholder="Förnamn"
              id="fName"
            />
            <input
              type="text"
              name="lName"
              onChange={(e) => setlname(e.target.value)}
              placeholder="Efternamn"
              id="lName"
            />
          </div>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="lösenord"
            id="password"
          />
          <input type="submit" value="Skapa Konto" id="signup" />
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
