import { Link } from "react-router-dom";

function Navigation() {
    return(
    <nav>
		<ul>
			<li class="logo">
				<img src="" alt="" />
			</li>
			<li>
				<div class="searchWrapper">
                    <input type="search" placeholder="Sök på arbeten"/>
					<span class="material-symbols-outlined" id="search">
						search
					</span>
				</div>
			</li>
			<li class="links">
				<div class="link-container">
						<Link to={"/"}>Hem</Link>
						<Link to={"/work"}>Arbeten</Link>
						<Link to={"/loggin"}>Logga in</Link>
				</div>
			</li>
		</ul>
	</nav>
    )
}

export default Navigation