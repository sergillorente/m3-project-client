import React from 'react'
import NavBar from './../../components/NavBar/Navbar';
import Footer from './../../components/Footer/Footer';
import { withAuth } from '../../context/auth-context';
import hotelService from './../../lib/hotel-service'
import HotelCard from '../../components/HotelCard/HotelCard';


class Hotels extends React.Component {
    state = {
        hotels: [],
        isLoading: true,
        error: false
    }

    componentDidMount() {
        hotelService.getAll()
        .then(response => this.setState({ hotels: response, isLoading: false }))
        .catch(err => this.setState( { error: err.response.data.message, isLoading: false }))

    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.isLoading
                    ? <p>It's loading...</p>
                    : this.state.hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />) 
                }
                {this.state.error && <p>{this.state.error}</p>}
                <Footer />
            </div>
        )
    }
}

export default withAuth(Hotels);