import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from './../../context/auth-context';

import './Login.scss'

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
      <NavBar />
        <h1 id="login-title">Login</h1>

        <form className="login-form" onSubmit={this.handleFormSubmit}>
          
          <label id="email-l">Email:</label>
          <input id="input-form" type="text" name="email" placeholder="example@gmail.com" value={email} onChange={this.handleChange}/>

          <label id="password-l">Password:</label>
          <input id="input-form" type="password" name="password" placeholder="**********" value={password} onChange={this.handleChange} />

          <input id="login-btn" type="submit" value="Login" />

          <div id="error-messages">
            {this.props.error && <p>{this.props.error}</p>} 
          </div>
          
        </form>

        <div id="to-signup">
          <p>or <Link to="/signup"> Sign up</Link> if you don't have an account</p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withAuth(Login);