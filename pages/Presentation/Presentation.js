import React from 'react'
import logo from '../public/logo.png'


function Presentation () {
    return (
        <div>
            <div>
                <img className= "presentation-logo" src={logo} alt= 'logo' />
                <p className="presentation-text">Explanatory text</p>
                <button className="presentation-button">START NOW</button>
                <p>Oh! Review © 2020</p>
            </div>
        </div>
    )
}

export default Presentation