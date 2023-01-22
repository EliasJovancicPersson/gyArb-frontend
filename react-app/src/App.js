import "./App.css";
import Nav from "./components/Navigation";
import HomePage from "./components/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
