import "./styles/Signup.css"

function Signup(){
    return(
    <div class="container column-center">
        <div id="signup-container">
            <form id="signup-form">
                <h1>Skapa Konto</h1>
                <div className="fullname">
                    <input type="text" name="firstname" placeholder="Namn" id="firstname"/>
                    <input type="text" name="lastname" placeholder="Efternamn" id="lastname"/>
                </div>
                <input type="text" name="email" placeholder="E-post adress" id="email" />
                <input type="text" name="username" placeholder="Användarnamn" id="username"/>
                <input type="password" name="password" placeholder="lösenord" id="password"/>
                <input type="button" value="Skapa Konto" id="signup" />
                <div className="login">
                    <p>Har du redan ett konto?</p>
                    <a href="login.html">Logga in</a>
                </div>
               
            </form>
        </div>
    </div>
    )
}

export default Signup