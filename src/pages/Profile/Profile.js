import React from 'react'
import { withAuth } from './../../context/auth-context';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import './Profile.css'

class Profile extends React.Component {

    state ={
        username: this.props.user.username,
        email: this.props.user.email,
        password: this.props.user.password,
        picture: this.props.user.picture
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { username, email, password, picture } = this.state;
    
        // this.props.signup(username, email, password) // picture hauria d'anar aquí, però doesn't make sense perquè el signup 
      };                                             // no té aquesta property, per això volia crear una nova function al context   
                                                     // per a què inclogués la picture                                                       
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
                <img src={picture} alt="default image" className="default-pic" />
                <h3>Change picture</h3>
    
                <form>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} placeholder="Write..." onChange={this.handleChange} />
    
                    <label>Email:</label>
                    <input type="email" name="email" value={email} disabled={email} />
    
                    <label>Password:</label>
                    <input type="password" name="password" value={password} readonly= "******** " />

                </form>

                <form>
                {/*Create the second form for the profile picture */}
                <label>Profile picture:</label>
                    <input type="file" name="picture" className="profile-pic" />
                    {/* The button, when pressed submited, needs to send this information to the backend and updated*/}
                    <button type="submit">SUBMIT</button>
                </form>

                <Footer />
            </div>
        )
    }
    
}

export default withAuth(Profile);