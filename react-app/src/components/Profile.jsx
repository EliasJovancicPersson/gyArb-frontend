import './styles/Profile.css'
import WorkList from './WorkList'
import PropTypes from 'prop-types'

function Profile (props) {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <div className="profile">
        <div className="settings">
          <h2>Konto information</h2>
          <input type="text" defaultValue={user.name} />
          <input type="email" defaultValue={user.email} />
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
                })
              }}>
              Logga ut
            </button>
          </div>
        </div>
        <div className="works">
          <h2>Dina arbeten</h2>
          <WorkList query={'author=' + user.name} maxResults={4} />
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  func: PropTypes.function
}

export default Profile
