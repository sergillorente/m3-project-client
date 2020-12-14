import React from 'react'

const ReviewCard = (props) => {
    return <div>
        <p>{props.review.userId}</p>
        <p>{props.review.created_at}</p>
        <p>{props.review.text}</p>
        <p>{props.review.rating}</p>
    </div>
}

export default ReviewCard