import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

class Navbar extends React.Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'} className='logo'>
          <h4><img src='../../../public/logo.png' alt="logo icon" /></h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
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