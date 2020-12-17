import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from './../../context/auth-context';

import './Signup.css'

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

          <label id="username">Username:</label>
          <input id="input-form" required type="text" name="username" value={username} onChange={this.handleChange} />

          <label id="email">Email:</label>
          <input id="input-form" required type="email" name="email" value={email} onChange={this.handleChange} />

          <label id="password">Password:</label>
          <input id="input-form" required type="password" name="password" value={password} onChange={this.handleChange} />

          <input id="signup-btn" type="submit" value="Signup" />
        </form>

        <div>
        {this.props.error && <p>{this.props.error}</p>} 
        </div>

        <div id="to-login">
          <p>or <Link to="/login"> Log in</Link> if you already have an account</p>
        </div>
       
        
        <Footer />
      </div>
    );
  }
}



export default withAuth(Signup);
