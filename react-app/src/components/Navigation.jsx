import { Link } from "react-router-dom";
import "./styles/Navigation.css"

function Navigation() {
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
						<Link to={"/work"}>Arbeten</Link>
						<Link to={"/login"}>Logga in</Link>
				</div>
			</li>
		</ul>
	</nav>
    )
}

export default Navigation