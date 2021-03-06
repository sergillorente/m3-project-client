import React from 'react'
import { withAuth } from '../../context/auth-context'
import moment from 'moment'

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
        <img className="picture" src='/images/default-profile.jpg' alt='user' /> {/* Backlog --- Add the picture of every single user who updates its picture profile // userId.picture */}
        <p>{userId.username}</p>
        <p>{moment(created_at).format('YYYY-MM-DD hh:mm:ss a')}</p>
        <p>{text}</p>
        <p>{rating}</p>
        {userId === currentUserId && <button id="delete-btn" onClick={(event) => handleDelete(event, reviewId, index)} >Delete</button>}
    </div>
    )
}

export default withAuth(ReviewCard)