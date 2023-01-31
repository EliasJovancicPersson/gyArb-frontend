import "./styles/WorkList.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function WorkList(props) {
	let url = "https://gyarb-backend.azurewebsites.net/wiki/search?"+props.query; //ändra url här för att söka med olika querys <search?author=123>

	let [data,setData] = useState(null)

	let elemPerPage = 9

	const [page,setPage] = useState(1)

	const [input,setInput] = useState()

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
			if(
				chunks.length>0
			){
			setData(chunks) //each chunk represents one page
			}
			else{

			}
		})
	},[])

    return (
        <>
		<div className="gyarb">
			<div className="work-list">
				{
					data ? data[page - 1].map((element,i) =>  //data && is a if statement to only render if the data is present
					<Link className="work-link" key={i} to={"/work/"+element._id}>
						<div className="title">
								<h3>{element.title}</h3>
						</div>
						<div className="author">
								<h3>{element.author}</h3>
								<h3>{element.subject}</h3>
						</div>
					</Link>):
					
					<Link className="work-link" key={1} >
						<div className="title">
								<h3>Inga arbeten hittades</h3>
						</div>
						<div className="author">
								<h3>Författare</h3>
								<h3>Ämne</h3>
						</div>
					</Link>
					
				}

				{data && <div className="pageController">
					<button onClick={()=>{if(page - 1 > 0){setPage(page - 1); }}}>-</button>
					<input type="number" name="page" id="page" min="1" value={page} max={page.length} readOnly/>
					<button onClick={()=>{if(page < data.length){setPage(page + 1); }}}>+</button>
				</div>}
			</div>
		</div>
		<a href="/src/html/work-upload.html" className="upload">
			<p>Ladda upp</p>
		</a>
	</>
    )
}

export default WorkList