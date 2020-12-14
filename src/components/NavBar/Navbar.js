import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';
import './NavBar.css'

class Navbar extends React.Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'}>
          <img src='/images/logo.png' alt="logo icon" className='logo' />
        </Link>
        {isLoggedIn ? (
          <>
            <p>{user && user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
            <br />
            <Link to="/login">
              <button className="navbar-button">Log in</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
