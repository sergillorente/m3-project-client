import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div id="home">
            <img className= "presentation-logo" src="/images/logo.png" alt= 'logo' />
            <div className="p-comments">
                <div id="welcome">Welcome to Oh! Review, the place where you will find the most known hotels in Barcelona.</div>
                <div id="more">Reviews, community and much more...</div>
            </div>
                <Link to="/hotels">
                    <button className="ui primary button update">START NOW</button>
                </Link>
            <p className="project">Oh! Review © 2020</p>
        </div>
    )
}

export default Home;