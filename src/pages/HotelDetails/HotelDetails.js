import React from 'react';
import Footer from '../../components/Footer/Footer';
import HotelRating from '../../components/HotelRating/HotelRating';
import NavBar from '../../components/NavBar/NavBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import { withAuth } from '../../context/auth-context';
import hotelService from './../../lib/hotel-service';
import reviewService from './../../lib/review-service';


class HotelDetails extends React.Component {

    state = {
        hotel: {},
        reviews: [],
        isLoading: true,
        error: false
    }

    componentDidMount() {
        this.getOneHotel()
        this.getAllReviews()
        
    }

    getOneHotel = () => {
        const hotelId = this.props.match.params.hotelId

        hotelService.getOneHotel(hotelId)
            .then(response => this.setState({ hotel: response, isLoading: false }))
            .catch(error => this.setState({ error: error.response.data.message, isLoading: false }))
    }

    getAllReviews = () => {
        const hotelId = this.props.match.params.hotelId

        reviewService.getAll(hotelId)
            .then(response => this.setState({ reviews: response, isLoading: false }))
    }

    handleSubmit = (rating, text) => {
        const pr = reviewService.createOne(this.props.match.params.hotelId, { rating, text})
            .then(createdReview => this.setState({ reviews: [ ...this.state.reviews, createdReview ] }))

        return pr
    }

    handleDelete = (reviewId, index) => {
        reviewService.deleteOne(reviewId)
            .then(response => {
                const newReviews = [ ...this.state.reviews ]
                newReviews.splice(index, 1)
                this.setState( { reviews: [...newReviews] } )
            })
    }

    render() {
        const { hotel } = this.state
        return (
            <div>
                <NavBar />
                <div>
                    <img src={hotel.image} alt={hotel} />
                    <h1>{hotel.title}</h1>
                    <h3>{hotel.district}</h3>
                    <HotelRating category={hotel.category} />
                    <p>{hotel.description}</p>
                </div>

                <ReviewForm handleSubmit={this.handleSubmit} />

                <hr />

                {this.state.reviews.map((review, index) => <ReviewCard key={review._id} index={index} review={review} handleDelete={this.handleDelete} />)}

                <Footer />
            </div>
        )

    }
}

export default withAuth(HotelDetails);