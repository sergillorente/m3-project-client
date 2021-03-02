import React from 'react';
import { Link } from 'react-router-dom';
import './StartButton';

function Home () {
    return (
        <div>
            <div>
                <img className= "presentation-logo" src="/images/logo.png" alt= 'logo' />
                <div>
                    <p>Welcome to Oh! Review, the place where you will find the most known hotels in Barcelona.</p>
                    <p>Reviews, community and much more...</p>
                </div>
                    <Link to="/hotels">
                        <button>START NOW</button>
                    </Link>
                <p className="project">Oh! Review © 2020</p>
            </div>
        </div>
    )
}

export default Home;