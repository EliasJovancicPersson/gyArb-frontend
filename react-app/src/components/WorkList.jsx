function WorkList() {
	let url = "https://gyarb-backend.azurewebsites.net/wiki"; //ändra url här för att söka med olika querys
	let responseArray = []
	let responseVar = fetch(url, {
		method: "GET",
		credentials: "include",
	  }).then(response => response.json())
	  .then(response => {
	  
		  console.log(response)	//gets response
	  
	  })
    return (
        <div className="container column-center">
		<div className="gyarb">

			<div id="backwards"></div>

			<div className="work-list">
				{
					
				}
				<input type="number" name="page" id="page" defaultValue="1" min="1"/>
			</div>

			<div id="forwards"></div>

		</div>
		<a href="/src/html/work-upload.html" className="upload">
			<p>Ladda upp</p>
		</a>
	</div>
    )
}

export default WorkList