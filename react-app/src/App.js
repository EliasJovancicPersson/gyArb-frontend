import "./App.css";
import Nav from "./components/Navigation";
import HomePage from "./components/HomePage";
import WorkList from "./components/WorkList";
import Login from "./components/Login";
import Work from "./components/Work";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

function App() {
	const authenticated = localStorage.getItem("authenticated");
	console.log("check auth");

	return (
		<>
			<Nav />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/work" element={authenticated && <WorkList />} />
				<Route path="/login" element={<Login />} />
				<Route path="/work/:projId" element={<Work />} />
			</Routes>
		</>
	);
}

export default App;
