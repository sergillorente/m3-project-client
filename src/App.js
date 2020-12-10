import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Import pages
// import HotelDetails from './pages/HotelDetails/HotelDetails';
// import Hotels from './pages/Hotels/Hotels';
import Login from './pages/Login/Login';
import Presentation from './pages/Presentation/Presentation'
// import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';

// import components
// import Footer from './components/Footer/Footer';
// import HotelCard from './components/HotelCard/HotelCard';
import Navbar from './components/NavBar/Navbar';

// import routes
import AnonRoute from './components/AnonRoute';
// import PrivateRoute from './components/PrivateRoute';




class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Presentation} />
          <Navbar />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          {/* <AnonRoute exact path="/hotels" component={Hotels} />

          <PrivateRoute exact path="/hotels" component={Hotels} />
          <PrivateRoute exact path="/hoteldetail" component={HotelDetail} />
          <PrivateRoute exact path="/profile" component={Profile} /> */}

          {/* <PrivateRoute exact path="/private" component={Private} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
