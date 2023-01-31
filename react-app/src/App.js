import "./App.css";
import Nav from "./components/Navigation";
import HomePage from "./components/HomePage";
import WorkList from "./components/WorkList";
import Login from "./components/Login";
import Work from "./components/Work";
import Profile from "./components/Profile";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  function SetLoggedIn(bool) {
    //function is passed to login component
    setSignedIn(bool);
    localStorage.setItem("authenticated", bool);
	  navigate("/")
  }

  function CheckLoggedIn() {
    if (localStorage.getItem("authenticated") === "true") {
      setSignedIn(true);
    }
  }

  useEffect(() => {
    CheckLoggedIn();
  }, []);

  return (
    <>
      <Nav
        isLoggedIn={signedIn}
        user={JSON.parse(localStorage.getItem("user"))}
      />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/work" element={<WorkList />} />
        <Route path="/login" element={<Login func={SetLoggedIn} />} />
        <Route path="/work/:projId" element={<Work />} />
        <Route
          path="/profile/:profileId"
          element={<Profile func={SetLoggedIn} />}
        />
      </Routes>
    </>
  );
}

export default App;
