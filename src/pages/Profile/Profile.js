import React from 'react'
import { withAuth } from './../../context/auth-context';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import './Profile.css'
import userService from '../../lib/user-service'

class Profile extends React.Component {
    state = {
        username: this.props.user.username,
        password: '',
        error: ''
    }

    handleSubmitForm = event => {
        event.preventDefault();
        const { username, password } = this.state;

        userService.updateProfile({ username, password })
            .then(response => {
                this.setState({ error: '' })
                this.props.getMe()
            })
            .catch(error => this.setState({ error: error.response.data.message }))
    };

    handleChange = event => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({ [name]: value });
    };

    render() {
        const { username, password } = this.state;

        return (
            <div>
                <NavBar />

                <h1>PROFILE</h1>
                <img src={this.props.user.picture} alt="default" className="default-pic" />

                <h3>Update user information:</h3>
                <form onSubmit={this.handleSubmitForm}>
                    <label>Username:</label>
                    <input required type="text" name="username" value={username} placeholder="Write..." onChange={this.handleChange} />

                    <label>Email:</label>
                    <input type="email" name="email" placeholder={this.props.user.email} disabled />

                    <label>Password:</label>
                    <input type="password" name="password" value={password} placeholder="*****" onChange={this.handleChange} />

                    <input type="submit" value="Save Changes" />
                </form>

                <div>
                    {this.state.error && <p>{this.state.error}</p>}
                </div>

                <Footer />
            </div>
        )
    }

}

export default withAuth(Profile);