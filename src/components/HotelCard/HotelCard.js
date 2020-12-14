import React from 'react'
import { Link } from 'react-router-dom'
import HotelRating from '../HotelRating/HotelRating'

const HotelCard = (props) => {
    const { image, title, district, category, description, _id } = props.hotel
    return (
        <div>
            <img src={image} alt='hotel information' />
            <h3>{title}</h3>
            <p>{district}</p>
            <HotelRating category={category} />
            <p>{`${description.slice(0,100)}...`}</p>
            <Link to={`/hotel-details/${_id}`}>
                <button>Share your opinion</button>
            </Link>
        </div>
    )
}

export default HotelCard;