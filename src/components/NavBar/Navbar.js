import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';
import './NavBar.scss'

class NavBar extends React.Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'}>
          <img src='/images/logo.png' alt="logo icon" className='logo' />
        </Link>
        {isLoggedIn ? (
          <>
            <p className="username-name">{user && user.username}</p>
            <button id='navbar-logout' onClick={logout}>Logout</button>
          </>
        ) : (
          <div className="clickable-buttons">
            <Link to="/signup">
              <button className="navbar-button" id="signup">Sign Up</button>{' '}
            </Link>
            <br />
            <Link to="/login">
              <button className="navbar-button">Log in</button>{' '}
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default withAuth(NavBar);
