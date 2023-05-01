import './App.css'
import Nav from './components/Navigation'
import HomePage from './components/HomePage'
import WorkList from './components/WorkList'
import Login from './components/Login'
import Work from './components/Work'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Upload from './components/Upload'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App () {
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState()
  const navigate = useNavigate()

  function SetLoggedIn (bool) {
    //  function is passed to login component
    setSignedIn(bool)
    if (bool === false) {
      localStorage.removeItem('user')
      localStorage.removeItem('authenticated')
    } else {
      localStorage.setItem('authenticated', true)
      setUser(JSON.parse(localStorage.getItem('user')))
      console.log(user)
    }
  }

  function CheckLoggedIn () {
    if (localStorage.getItem('authenticated') === 'true' && localStorage.getItem('user') !== null) {
      setSignedIn(true)
      setUser(JSON.parse(localStorage.getItem('user')))
    } else {
      setSignedIn(false)
      SetLoggedIn(false)
      navigate('/')
    }
  }

  useEffect(() => {
    CheckLoggedIn()
  }, [])

  return (
    <>
      <Nav isLoggedIn={signedIn} user={user} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/work" element={<WorkList maxResults={9} />} />
        <Route exact path="/work/upload" element={<Upload user={user}/>} />
        <Route path="/login" element={<Login func={SetLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/work/:projId" element={<Work />} />
        <Route path="/profile/:profileId" element={<Profile func={SetLoggedIn} user={user} />} />
      </Routes>
    </>
  )
}

export default App
