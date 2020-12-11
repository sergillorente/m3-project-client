import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';
import './Footer.css'

function Footer(props) {
    
    return props.isLoggedIn ? (
            <div className="footer">
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
        ) : (<div className="footer">
                <Link to='/hotels'>
                    <div>
                        <img src='/images/hotel.png' alt="hotel icon" />
                        <p className="text-color">HOTELS</p>
                    </div>
                </Link>
            </div>
        )
    }

export default withAuth(Footer);

// there will be 2 footers:

// One including only the background color for the pages:
// Hotels (when the user is not logged in), Signup, Login

// Second including the whole footer:
// Hotels( when the user is logged in), HotelDetails, Profile