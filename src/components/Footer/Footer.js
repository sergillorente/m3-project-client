import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

import './Footer.css'

import { IconDesign } from '../../styles/elements'

function Footer(props) {

    return (
        
        <IconDesign>
        {props.isLoggedIn ? (
            <div>
                <Link to='/hotels'>
                    <div>
                        <img src='/images/hotel.png' alt="hotel icon" />
                        <p className="text-color">HOTELS</p>
                    </div>
                </Link>
                <Link to='/profile'>
                    <div>
                        <img src='/images/profile-user.png' alt="profile icon" />
                        <p className="text-color">PROFILE</p>
                    </div>
                </Link>

            </div>

        ) : (<div>
                <Link to='/hotels'>
                    <div>
                        <img src='/images/hotel.png' alt="hotel icon" />
                        <p className="text-color">HOTELS</p>
                    </div>
                </Link>
            </div>
            )}
        </IconDesign>

        
    )
}

export default withAuth(Footer);
