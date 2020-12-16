import React from 'react';

import './ReviewForm.css'

class ReviewForm extends React.Component {
    state = {
        rating: 1,
        text: "",
        error: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value }) 
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.rating, this.state.text)
            .then(response => this.setState({ text: "", rating: 1, error: "" }))
            .catch(error => this.setState({ error: error.response.data.message }))
        
    }

    render() {
        return (
            <div className="detail-review">
                <h3 id="title-review">Leave a review</h3>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Rating:
                            <select id="rating-num" name="rating" value={this.state.rating} onChange={this.handleChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <textarea id="text" required value={this.state.text} name='text' onChange={this.handleChange} />
                        <input id="submit-btn" type="submit" value="Save" />
                    </label>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )

    }
}

export default ReviewForm