import "./App.css";
import Nav from "./components/Navigation";
import HomePage from "./components/HomePage";
import WorkList from "./components/WorkList";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/work" element={<WorkList />} />
			</Routes>
		</>
	);
}

export default App;
