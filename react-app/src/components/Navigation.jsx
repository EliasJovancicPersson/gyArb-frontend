function Navigation(){
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
					<a href="/index.html">Hem</a>
					<a href="/src/html/work-list.html">Utforska</a>
					<a href="/src/html/login.html" id="loggin">Logga in</a>
				</div>
			</li>
		</ul>
	</nav>
    )
}

export default Navigation