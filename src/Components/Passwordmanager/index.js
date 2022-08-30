import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem/index'

import './index.css'

class Passwordmanager extends Component {
  state = {
    passwordsList: [],
    showpasswords: false,
    website: '',
    username: '',
    password: '',
    searchinput: '',
  }

  recordwebsite = event => {
    this.setState({website: event.target.value})
  }

  recordusername = event => {
    this.setState({username: event.target.value})
  }

  recordpassword = event => {
    this.setState({password: event.target.value})
  }

  addnewpassword = event => {
    console.log('Entering into add password function')
    event.preventDefault()

    const {passwordsList, website, username, password} = this.state
    const updatedpasswordsList = [
      ...passwordsList,
      {id: uuidv4(), website, username, password},
    ]
    this.setState({
      passwordsList: updatedpasswordsList,
      website: '',
      username: '',
      password: '',
    })
  }

  recordsearchinput = event => {
    this.setState({searchinput: event.target.value})
  }

  deletepassword = id => {
    const {passwordsList} = this.state
    const updatedpasswordsList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: updatedpasswordsList})
  }

  showpasswordsfunction = () => {
    this.setState(prevstate => ({showpasswords: !prevstate.showpasswords}))
  }

  render() {
    const {
      passwordsList,
      showpasswords,
      website,
      username,
      password,
      searchinput,
    } = this.state

    const searchresults = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="title-image"
        />
        <div className="password-input-container">
          <form className="password-input-form" onSubmit={this.addnewpassword}>
            <h1 className="add-password-instruction">Add New Password</h1>
            <div className="userinput-field-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-field-image"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Enter Website"
                onChange={this.recordwebsite}
                value={website}
              />
            </div>
            <div className="userinput-field-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-field-image"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Enter Username"
                onChange={this.recordusername}
                value={username}
              />
            </div>
            <div className="userinput-field-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-field-image"
              />
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                onChange={this.recordpassword}
                value={password}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="passwords-display-container">
          <div className="heading-search-container">
            <div className="heading-count-container">
              <h1 className="passwords-heading">Your Passwords</h1>
              <p type="button" className="passwords-count">
                {searchresults.length}
              </p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.recordsearchinput}
              />
            </div>
          </div>
          <hr />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              id="show-password"
              value="checked"
              className="show-password-checkbox"
              onClick={this.showpasswordsfunction}
            />
            <label htmlFor="show-password" className="show-password-label">
              Show Passwords
            </label>
          </div>
          {searchresults.length > 0 ? (
            <ul className="passwords-list-container">
              {searchresults.map(each => (
                <PasswordItem
                  item={each}
                  showpasswords={showpasswords}
                  deletepassword={this.deletepassword}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Passwordmanager
