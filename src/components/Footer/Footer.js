import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

function Footer () {
    return (
        <div className="footer">
            <Link to='/hotels'>
                <div>
                    <img src='../../../public/hotel.png' alt="hotel icon" />
                    <p className="text-color">HOTELS</p>              
                </div>
            </Link>
            <Link to='/profile'>
                <div>
                    <img src='../../../public/profile-user.png' alt="profile icon" />
                    <p className="text-color">PROFILE</p>
                </div>
            </Link>

        </div>
    )
}

export default Footer;

// there will be 2 footers:

// One including only the background color for the pages:
// Hotels (when the user is not logged in), Signup, Login

// Second including the whole footer:
// Hotels( when the user is logged in), HotelDetails, Profile