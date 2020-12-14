import React from 'react'

const HotelRating = (props) => {
    return [1,2,3,4,5].map(star => {
        if (star <= props.category) return <img key={star} height='40px' alt='star' src='https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png' />
        return <img key={star} height='40px' alt='star' src='https://purepng.com/public/uploads/large/purepng.com-grey-starstargeometricallydecagonconcavestardomclipartblackgrey-1421526502793oblca.png' />
        }
    )
}

export default HotelRating