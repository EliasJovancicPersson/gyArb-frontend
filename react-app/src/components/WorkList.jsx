import "./styles/WorkList.css"
import React, {useState, useEffect} from 'react';

function WorkList() {
	let url = "https://gyarb-backend.azurewebsites.net/wiki"; //ändra url här för att söka med olika querys

	let [data,setData] = useState(null)
	//setData(data.projects)

	useEffect(()=>{
		fetch(url, {
			method: "GET",	
			credentials: "include",
		}).then(response => response.json())
	  	.then((data) => {
			let chunks = []
			for (let index = 0; index < data.projects.length; index += 10) {
				const chunk = data.projects.slice(index,index+10)
				chunks.push(chunk)
			}
			console.log(chunks) //each chunk represents one page
		})
	})

    return (
        <div className="container column-center">
		<div className="gyarb">

			<div id="backwards"></div>

			<div className="work-list">
				{
					data && data.map((element) => 
					<a className="work-link">
						<div className="title">
								<h3>{element.title}</h3>
						</div>
						<div className="author">
								<h3>{element.author}</h3>
								<h3>{element.subject}</h3>
						</div>
					</a>)
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