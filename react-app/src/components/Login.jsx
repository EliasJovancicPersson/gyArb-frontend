import { useState } from "react";
import "./styles/Login.css"

async function loginUser(credentials) {
 return fetch('https://gyarb-backend.azurewebsites.net/login', {
   method: 'POST',
   headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
   credentials:"include",
   body: new URLSearchParams({
      email: credentials.email,
      password: credentials.password,
    }),
 })
   .then(data => data.status == "200" ? localStorage.setItem("authenticated", true):localStorage.setItem("authenticated",false))
}

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
    e.preventDefault();
    loginUser({
      email,
      password
    })
    }

    return (
        <div className="container column-center">
        <div id="login-container">
            <form id="login-form" onSubmit={handleSubmit}> 
                <h1>Logga In</h1>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="email" id="email" defaultValue="test@gmail.com"/>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="lösenord" id="password" defaultValue="password" />
                <input type="submit" value="Login" id="login" />
                <div className="signup-form">
                    <p>Inget Konto?</p>
                    <a href="signup.html">Registrera dig</a>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login