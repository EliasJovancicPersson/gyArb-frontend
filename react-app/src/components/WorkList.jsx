import "./styles/WorkList.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function WorkList() {
	let url = "https://gyarb-backend.azurewebsites.net/wiki"; //ändra url här för att söka med olika querys

	let [data,setData] = useState(null)

	let elemPerPage = 9

	const [page,setPage] = useState(1)

	let input = document.getElementById("page")

	useEffect(()=>{
		fetch(url, {
			method: "GET",	
			credentials: "include",
		}).then(response => response.json())
			.then((data) => {
			let chunks = []
			for (let index = 0; index < data.projects.length; index += elemPerPage) {
				const chunk = data.projects.slice(index,index+elemPerPage)
				chunks.push(chunk)
			}
			setData(chunks) //each chunk represents one page
		})
	},[])

    return (
        <div className="container column-center">
		<div className="gyarb">
			<div className="work-list">
				{
					data && data[page - 1].map((element,i) =>  //data && is a if statement to only render if the data is present
					<Link className="work-link" key={i} to={"/work/"+element._id}>
						<div className="title">
								<h3>{element.title}</h3>
						</div>
						<div className="author">
								<h3>{element.author}</h3>
								<h3>{element.subject}</h3>
						</div>
					</Link>)
				}
				<div className="pageController">
					<button onClick={()=>{if(page - 1 > 0){setPage(page - 1); input.value = page-1}}}>-</button>
					<input type="number" name="page" id="page" min="1" defaultValue={1} max={page.length} onChange={e => e.target.value > 0 ? setPage(e.target.value) : false}/>
					<button onClick={()=>{if(page < data.length){setPage(page + 1); input.value = page+1}}}>+</button>
				</div>
			</div>
		</div>
		<a href="/src/html/work-upload.html" className="upload">
			<p>Ladda upp</p>
		</a>
	</div>
    )
}

export default WorkList