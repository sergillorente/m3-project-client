import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

import './Footer.css'

import { IconDesign } from '../../styles/elements'

function Footer(props) {

    return props.isLoggedIn ? (
        <IconDesign>

            <div className="footer">
                <Link id="icon-hotels" to='/hotels'>
                    <div>
                        <img src='/images/hotel.png' alt="hotel icon" />
                        <p className="text-color">HOTELS</p>
                    </div>
                </Link>
                <Link id="icon-profile" to='/profile'>
                    <div>
                        <img src='/images/profile-user.png' alt="profile icon" />
                        <p className="text-color">PROFILE</p>
                    </div>
                </Link>

            </div>
        </IconDesign>
    ) : (<div className="footer">
        <Link id="icon-hotels-logout" to='/hotels'>
            <div>
                <img id="icon-hotel" src='/images/hotel.png' alt="hotel icon" />
                <p id="text-color-logout">HOTELS</p>
            </div>
        </Link>
    </div>
        )

}

export default withAuth(Footer);
