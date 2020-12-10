import React from 'react'
import { Link } from 'react-router-dom'

function Presentation () {
    return (
        <div>
            <div>
                <img className= "presentation-logo" src="../../../public/logo.png" alt= 'logo' />
                <p className="presentation-text">Explanatory text</p>
                <Link to="/hotels">
                    <button className="presentation-button">START NOW</button>
                </Link>
                <p>Oh! Review © 2020</p>
            </div>
        </div>
    )
}

export default Presentation