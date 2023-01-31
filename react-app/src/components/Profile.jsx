import "./styles/Profile.css"
import WorkList from "./WorkList"

function Profile(props){
    const user = JSON.parse(localStorage.getItem("user"))


    return(
        <>
        <h1>Hej, {user.name}</h1>
        <div className="works">
            <h2>Dina arbeten</h2>
            <WorkList query={"author="+user.name}/>
        </div>
        <div className="settings">
            <button onClick={async ()=>{
                await fetch("https://gyarb-backend.azurewebsites.net/auth/logout",{
                    method: "POST",	
                    credentials: "include",
                }).then(()=>{
                    props.func(false)
                })
                
                
            }}>Logga ut</button>
        </div>
        </>
    )

}

export default Profile
