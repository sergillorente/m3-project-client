import React from 'react'
import { withAuth } from '../../context/auth-context'

import './ReviewCard.css'

const ReviewCard = (props) => {
    
    const handleDelete = (event, reviewId, index) => {
        event.preventDefault()
        props.handleDelete(reviewId, index)
            
    }

    const { userId, created_at, text, rating, _id: reviewId } = props.review
    const { index } = props
    const { _id: currentUserId } = props.user

    return (
    <div className="review">
        <img id="picture" src={userId.picture} alt='user' />
        <p>{userId.username}</p>
        <p>{created_at}</p>
        <p>{text}</p>
        <p>{rating}</p>
        {userId === currentUserId && <button id="delete-btn" onClick={(event) => handleDelete(event, reviewId, index)} >Delete</button>}
    </div>
    )
}

export default withAuth(ReviewCard)