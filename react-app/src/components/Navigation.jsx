/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li className="logo">
          <h1>Gymnasiearbeten.se</h1>
        </li>
        <li>
          <div className="searchWrapper">
            <input type="search" placeholder="Sök på arbeten" />
            <span className="material-symbols-outlined" id="search">
              search
            </span>
          </div>
        </li>
        <li className="links">
          <div className="link-container">
            <Link to={'/'}>Hem</Link>
            {props.isLoggedIn && <Link to={'/work'}>Arbeten</Link>}
            {props.isLoggedIn && <Link to={'/profile/' + props.user.id}>Profil</Link>}
            {!props.isLoggedIn && <Link to={'/login'}>Logga in</Link>}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
