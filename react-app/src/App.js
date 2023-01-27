import "./App.css";
import Nav from "./components/Navigation";
import HomePage from "./components/HomePage";
import WorkList from "./components/WorkList";
import Login from "./components/Login";
import Work from "./components/Work";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { createContext, useState } from "react";

function App() {
	const [signedIn, setSignedIn] = useState(false);

	function SetLoggedIn(bool) {
		setSignedIn(bool);
	}

	return (
		<>
			<Nav isLoggedIn={signedIn} />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/work" element={<WorkList />} />
				<Route path="/login" element={<Login func={SetLoggedIn} />} />
				<Route path="/work/:projId" element={<Work />} />
			</Routes>
		</>
	);
}

export default App;
