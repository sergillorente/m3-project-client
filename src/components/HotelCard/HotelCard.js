import React from 'react'
import { Link } from 'react-router-dom'
import HotelRating from '../HotelRating/HotelRating'

import './HotelCard.css'
import '../HotelRating/HotelRating.css'

const HotelCard = (props) => {
    const { image, title, district, category, description, _id } = props.hotel
    
    return (
        <div className="hotel-card">
            <img src={image} alt='hotel information' id='picture' />
            <h3 id='title'>{title}</h3>
            <p id='district'>{district}</p>
            <HotelRating category={category} />
            <p id="description">{`${description.slice(0,100)}...`}</p>
            <Link to={`/hotel-details/${_id}`}>
                <button id='button-share'>Share your opinion</button>
            </Link>
        </div>
    )
}

export default HotelCard;