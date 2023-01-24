function Login() {
    return (
        <div class="container column-center">
        <div id="login-container">
            <form id="login-form"> 
                <h1>Logga In</h1>
                <input type="email" name="email" placeholder="email" id="email" />
                <input type="password" name="password" placeholder="lösenord" id="password" />
                <input type="button" value="Login" id="login" />
                <div class="signup-form">
                    <p>Inget Konto?</p>
                    <a href="signup.html">Registrera dig</a>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login