import React from 'react'
import { withAuth } from '../../context/auth-context'

const ReviewCard = (props) => {
    
    handleSubmitWhenDeleted = (event) => {
        event.preventDefault()
        this.props.handleSubmitWhenDeleted(props.review)
            .then(response => this.setState({ text: "", rating: 1, error: "" }))
            .catch(error => this.setState({ error: error.response.data.message }))
    }

    const { userId, created_at, text, rating, _id } = props.review
    const { _id: currentUserId } = props.user

    return (<div>
        <p>{userId}</p>
        <p>{created_at}</p>
        <p>{text}</p>
        <p>{rating}</p>
        {userId === currentUserId && <button onClick={this.handleSubmitWhenDeleted} >Delete</button>}
    </div>
    )
}

export default withAuth(ReviewCard)