import React from 'react'
import Footer from '../../components/Footer/Footer';
import HotelRating from '../../components/HotelRating/HotelRating';
import NavBar from '../../components/NavBar/NavBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import { withAuth } from '../../context/auth-context';
import hotelService from './../../lib/hotel-service'


class HotelDetails extends React.Component {

    state = {
        hotel: {},
        isLoading: true,
        error: false
    }

    componentDidMount() {
        const hotelId = this.props.match.params.hotelId

        hotelService.getOneHotel(hotelId)
            .then(response => this.setState({ hotel: response, isLoading: false }))
            .catch(error => this.setState({ error: error.response.data.message, isLoading: false }))

    }

    render() {
        const { hotel } = this.state
        return (
            <div>
                <NavBar />
                <div>
                    <img src={hotel.image} />
                    <h1>{hotel.title}</h1>
                    <h3>{hotel.district}</h3>
                    <HotelRating category={hotel.category} />
                    <p>{hotel.description}</p>
                </div>

                <ReviewForm />

                <hr/>

                <ReviewCard />
                                
                <Footer />
            </div>
        )

    }
}

export default withAuth(HotelDetails);