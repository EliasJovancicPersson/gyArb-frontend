import './styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Signup () {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [fName, setFname] = useState()
  const [lName, setlname] = useState()
  const navigate = useNavigate()

  async function SignupUser (credentials) { // TODO: try catch
    return fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: new URLSearchParams({
        email: credentials.email,
        password: credentials.password,
        fullName: credentials.fName + ' ' + credentials.lName
      })
    }).then(response => response.json()).then((response) => {
      // TODO: get response.value[0] to get what field that is not unique
      return response
    }).catch((err) => { console.log(err) })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignupUser({ email, password, fName, lName })
      .then((response) => { // response is defined now due to two return statements in SignupUser()
        console.log(response)
        if (!response.ok) { // need way to see if response is valid or error
          console.log(response)
        } else {
          setPassword('') // remove password from state after
          navigate('/login')
        }
      }).catch((err) => { console.log(err) })
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
          <div className='form-name'>
            <input
              type="text"
              name="fName"
              onChange={(e) => setFname(e.target.value)}
              placeholder="Förnamn"
              id="fName"
              maxLength={20}
            />
            <input
              type="text"
              name="lName"
              onChange={(e) => setlname(e.target.value)}
              placeholder="Efternamn"
              id="lName"
              maxLength={30}
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
