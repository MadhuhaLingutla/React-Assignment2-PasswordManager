import './index.css'

const PasswordItem = props => {
  const {item, showpasswords, deletepassword} = props
  const {id, website, username, password} = item

  const triggerdelete = () => {
    deletepassword(id)
  }

  return (
    <li className="password-item-container">
      <div className="password-details-container">
        <button className="website-initial" type="button">
          {website[0].toUpperCase()}
        </button>
        <div className="password-details">
          <p className="website-name">{website}</p>
          <p className="username">{username}</p>
          {showpasswords ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          )}
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={triggerdelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem
