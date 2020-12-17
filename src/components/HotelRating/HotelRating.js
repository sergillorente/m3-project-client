import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';


const HotelRating = (props) => {
    return (
        <div id="rating">
            {[1, 2, 3, 4, 5].map(star => 
            star <= props.category ? 
            <StarRateIcon key={star} style={{ fill: "yellow" }} />
            : <StarRateIcon key={star} color="action" />)}
        </div>
    )
}

export default HotelRating
