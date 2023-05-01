import { useNavigate } from 'react-router-dom'
import './styles/Profile.css'
import WorkList from './WorkList'
import PropTypes from 'prop-types'

function Profile (props) {
  const navigate = useNavigate()

  return (
    <>
      <div className="profile">
        <div className="settings">
          <h2>Konto information</h2>
          <input type="text" defaultValue={props.user.name} />
          <input type="email" defaultValue={props.user.email} />
          <div className="changePass">
            <input type="password" placeholder="old password" />
            <input type="password" placeholder="new password" />
          </div>
          <div className="buttons">
            <button>Uppdatera kontoinformation</button>
            <button
              className="logout"
              onClick={async () => {
                await fetch('https://gyarb-backend.azurewebsites.net/auth/logout', {
                  method: 'POST',
                  credentials: 'include'
                }).then(() => {
                  props.func(false)
                  navigate('/')
                })
              }}>
              Logga ut
            </button>
          </div>
        </div>
        <div className="works">
          <h2>Dina arbeten</h2>
          <WorkList query={'author=' + props.user.name} maxResults={4} />
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  func: PropTypes.function,
  user: PropTypes.object
}

export default Profile
