import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/Navbar";
import { withAuth } from './../../context/auth-context';

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    // Call funciton coming from AuthProvider ( via withAuth )
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
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Email:</label>
          <input required type="email" name="email" value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input required type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>

        <div>
          {this.props.error && <p>{this.props.error}</p>}
        </div>

        <div>
          <p>or <Link to="/signup"> Sign up</Link> if you don't have an account</p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withAuth(Login);