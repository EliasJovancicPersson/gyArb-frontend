import { useContext } from "react";
import { useState } from "react";
import "./styles/Login.css"

async function loginUser(credentials) {
    return fetch('https://gyarb-backend.azurewebsites.net/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        body: new URLSearchParams({
            email: credentials.email,
            password: credentials.password,
        }),
    })
}

function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    }).then((response) => {
        if (response.status == 200) {
            props.func(true)
        }
        else {
            props.func(false)
    }})
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