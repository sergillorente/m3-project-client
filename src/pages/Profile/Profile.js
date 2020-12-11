import React from 'react'
import { withAuth } from './../../context/auth-context';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import './Profile.css'

class Profile extends React.Component {

    state ={
        username: props.user.username,
        email: props.user.email,
        password: props.user.password,
        picture: props.user.picture
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { username, email, password, picture } = this.state;
    
        this.props.signup(username, email, password)
      };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render() {
        const { username, email, password, picture } = this.state;

        return (
            <div>
                <NavBar />

                <h1>PROFILE</h1>
                <img src="/images/default-profile.jpg" alt="default image" className="default-pic" />
                <h3>Change picture</h3>
    
                <form>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} placeholder="Write..." onChange={this.handleChange} />
    
                    <label>Email:</label>
                    <input type="email" name="email" value={email} readonly={email} />
    
                    <label>Password:</label>
                    <input type="password" name="password" value={password} readonly= "******** " />

                    <label>Profile picture:</label>
                    <input type="file" name="picture" className="profile-pic" />
    
                    <input type="submit" value="Profile" />
                </form>

                <Footer />
            </div>
        )
    }
    
}

export default withAuth(Profile);