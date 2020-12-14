import React from 'react'
import { withAuth } from '../../context/auth-context'

const ReviewCard = (props) => {
    
    const handleDelete = (event, reviewId, index) => {
        event.preventDefault()
        props.handleDelete(reviewId, index)
            
    }

    const { userId, created_at, text, rating, _id: reviewId } = props.review
    const { index } = props
    const { _id: currentUserId } = props.user

    console.log(userId);
    return (<div>
        <img src={userId.picture} alt='user' height='30px' />
        <p>{userId.username}</p>
        <p>{created_at}</p>
        <p>{text}</p>
        <p>{rating}</p>
        {userId === currentUserId && <button onClick={(event) => handleDelete(event, reviewId, index)} >Delete</button>}
    </div>
    )
}

export default withAuth(ReviewCard)