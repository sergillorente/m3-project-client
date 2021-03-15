import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from './../../context/auth-context';

import './Signup.scss'

class Signup extends Component {
  state = { 
    username: "",
    email: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    this.props.signup(username, email, password)
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    
    return (
      <div>
        <NavBar />
        <h1 id="signup-title">Sign Up</h1>

        <form className="signup-form" onSubmit={this.handleFormSubmit}>

          <label id="username-s">Username:</label>
          <input id="input-form" type="text" name="username" value={username} onChange={this.handleChange} />

          <label id="email-s">Email:</label>
          <input id="input-form" type="text" name="email" value={email} onChange={this.handleChange} />

          <label id="password-s">Password:</label>
          <input id="input-form" type="password" name="password" value={password} onChange={this.handleChange} />

          <input id="signup-btn" type="submit" value="Signup" />

          <div id="error-messages">
            {this.props.error && <p>{this.props.error}</p>} 
          </div>

        </form>
        
        <div id="to-login">
          <p>or <Link to="/login"> Log in</Link> if you already have an account</p>
        </div>
       
        
        <Footer />
      </div>
    );
  }
}



export default withAuth(Signup);
