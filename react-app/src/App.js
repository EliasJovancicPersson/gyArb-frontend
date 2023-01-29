import "./App.css";
import Nav from "./components/Navigation";
import HomePage from "./components/HomePage";
import WorkList from "./components/WorkList";
import Login from "./components/Login";
import Work from "./components/Work";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [signedIn, setSignedIn] = useState(false);

	function SetLoggedIn(bool) {	//function is passed to login component
		setSignedIn(bool);
	}

	function CheckLoggedIn(){
		if(localStorage.getItem("loggedIn") === "true")
		{
			setSignedIn(true)
		}
	}

	useEffect(()=>{
		CheckLoggedIn();
	},[])

	//CheckLoggedIn()

	return (
		<>
			<Nav isLoggedIn={signedIn} />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/work" element={<WorkList />} />
				<Route path="/login" element={<Login func={SetLoggedIn} />} />
				<Route path="/work/:projId" element={<Work />} />
				<Route path="/profile:profileId" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;