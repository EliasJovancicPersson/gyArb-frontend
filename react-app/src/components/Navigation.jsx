import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles/Navigation.css'
import Search from '../images/Icons/Search.svg'
import pfp from '../images/Icons/placeholdePfpPic.jpg'

function Navigation (props) {
  return (
    <nav>
      <ul>
        <li className="logo">
          <h1>Gymnasiearbeten.se</h1>
        </li>
        {props.isLoggedIn &&
        <li className='search'>
          <div className="searchWrapper">
            <input type="search" placeholder="Sök på arbeten" />
            <img src={Search} alt="Search icon" className="search-img" />
          </div>
        </li>}
        <li className="links">
          <div className="link-container">
            <Link to={'/'}>Hem</Link>
            {props.isLoggedIn && <Link to={'/work'}>Arbeten</Link>}
            {props.isLoggedIn && <Link to={'/work/upload'}>Ladda up</Link>}
            {props.isLoggedIn && <Link className='profilePic' to={'/profile/' + props.user.id}><img src={pfp}></img></Link>}
            {!props.isLoggedIn && <Link to={'/login'}>Logga in</Link>}
          </div>
        </li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object
}

export default Navigation
