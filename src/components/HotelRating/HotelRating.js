import React from 'react'

const HotelRating = (props) => {
    return [1,2,3,4,5].map(star => {
        if (star <= props.category) return <img id='yellow-star' key={star} alt='star' src='/images/yellow-star.jpeg' />
        return <img id='grey-star' key={star} alt='star' src='/images/grey-star.png' />
        }
    )
}

export default HotelRating