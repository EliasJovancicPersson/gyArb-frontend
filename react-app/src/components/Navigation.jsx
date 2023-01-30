import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navigation.css"



function Navigation(props) {
	console.log(props.user)
    return(
    <nav>
		<ul>
			<li className="logo">
				<img src="" alt="" />
			</li>
			<li>
				<div className="searchWrapper">
                    <input type="search" placeholder="Sök på arbeten"/>
					<span className="material-symbols-outlined" id="search">
						search
					</span>
				</div>
			</li>
			<li className="links">
				<div className="link-container">
						<Link to={"/"}>Hem</Link>
						{props.isLoggedIn && <Link to={"/work"}>Arbeten</Link>}
						{props.isLoggedIn && <Link to={"/profile/"+props.user.id}>Profil</Link>}
						{!props.isLoggedIn && <Link to={"/login"}>Logga in</Link>}
				</div>
			</li>
		</ul>
	</nav>
    )
}

export default Navigation