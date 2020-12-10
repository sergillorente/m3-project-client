import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/Navbar";
import { withAuth } from './../../context/auth-context';

class Signup extends Component {
  state = { 
    username: "",
    email: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    this.props.signup(username, email, password);
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
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>

        <div>
          <p>or <Link to="/login"> Log in</Link> if you already have an account</p>
        </div>
       
        
        <Footer />
      </div>
    );
  }
}



export default withAuth(Signup);
