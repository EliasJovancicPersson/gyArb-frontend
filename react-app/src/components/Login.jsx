import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('https://gyarb-backend.azurewebsites.net/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include',
    body: new URLSearchParams({
      email: credentials.email,
      password: credentials.password
    })
  });
}

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      email,
      password
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText);
        } else return response;
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.authenticated) {
          props.func(true);
          localStorage.setItem('user', JSON.stringify(response.user));
          //    JSON.parse(localStorage.getItem("user"))  to get user object
        } else {
          props.func(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            defaultValue="test@gmail.com"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="lösenord"
            id="password"
            defaultValue="password"
          />
          <input type="submit" value="Login" id="login" />
          <div className="signup-form">
            <p>Inget Konto?</p>
            <Link to={'/signup'}>Registrera dig</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  func: PropTypes.function
};

export default Login;
