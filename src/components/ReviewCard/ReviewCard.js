import React from 'react'
import { withAuth } from '../../context/auth-context'

const ReviewCard = (props) => {
    const { userId, created_at, text, rating, _id } = props.review
    const { _id: currentUserId } = props.user

    return (<div>
        <p>{userId}</p>
        <p>{created_at}</p>
        <p>{text}</p>
        <p>{rating}</p>
        {userId === currentUserId && <button onClick={() => {}} >Delete</button>}
    </div>
    )
}

export default withAuth(ReviewCard)