import React from 'react'
import { Link } from 'react-router-dom'
import HotelRating from '../HotelRating/HotelRating'

import './HotelCard.scss'
import '../HotelRating/HotelRating.css'

const HotelCard = (props) => {
    
    const { image, title, district, category, description, _id } = props.hotel
    
    return (
        <div className="hotel-card">
            <div>
                <img src={image} alt='hotel information' id='picture' />
                <h3 id='title'>{title}</h3>
            </div>
            <div>
                <div>
                    <p id='district'>{district}</p>
                    <HotelRating className="rating" category={category} />
                </div>
                <p id="description">{`${description.slice(0,100)}...`}</p>
                <Link to={`/hotel-details/${_id}`}>
                    <button id='button-share'>Share your opinion</button>
                </Link>
            </div>
        </div>
    )
}

export default HotelCard;