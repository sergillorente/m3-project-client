import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = (props) => {
    const { hotel } = props
    return (
        <div>
            <img src={hotel.image} alt='hotel information' />
            <h3>{hotel.title}</h3>
            <p>{hotel.district}</p>
            <p>{hotel.category}</p> {/* Pending to know if it's a text or an image. Check the npm package for stars of REACT*/}
            <p>{hotel.description}</p>
            <Link to={`/hotel-details/${hotel._id}`}>
                <button>Share your opinion</button>
            </Link>
        </div>
    )
}

export default HotelCard;