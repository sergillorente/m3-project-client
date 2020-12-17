import React from 'react';
import { Link } from 'react-router-dom'
import './Presentation.css'

import { StyledPresentationButton } from './../../styles/elements'
import { TextPresentation } from './../../styles/elements'


function Presentation () {
    return (
        <div>
            <div>
                <img className= "presentation-logo" src="/images/logo.png" alt= 'logo' />
                <TextPresentation>
                    <p>Welcome to Oh! Review, the place where you will find the most known hotels in Barcelona.</p>
                    <p>Reviews, community and much more...</p>
                </TextPresentation>
                    <Link to="/hotels">
                        <StyledPresentationButton>START NOW</StyledPresentationButton>
                    </Link>
                <p className="project">Oh! Review © 2020</p>
            </div>
        </div>
    )
}

export default Presentation