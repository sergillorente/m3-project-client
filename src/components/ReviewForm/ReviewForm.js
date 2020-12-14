import React from 'react';
import reviewService from '../../lib/review-service';

class ReviewForm extends React.Component {
    state = {
        rating: 1,
        text: "",
        error: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        this.setState({ [name]: value }) 
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        reviewService.createOne(this.props.hotelId, { rating: this.state.rating, text: this.state.text})
            .then(response => this.setState({ error: "" }))
            .catch(error => this.setState({ error: error.response.data.message }))
    }
    
    render() {
        return (
            <div>
                <h3>Leave a review</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Rating:
                            <select name="rating" value={this.state.rating} onChange={this.handleChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <input required type='textarea' name='text' value={this.state.text} onChange={this.handleChange} />
                        <input type="submit" value="Save" />
                    </label>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )

    }
}

export default ReviewForm