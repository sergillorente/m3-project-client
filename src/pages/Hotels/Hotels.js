import React from 'react'
import NavBar from './../../components/NavBar/Navbar';
import Footer from './../../components/Footer/Footer';
import { withAuth } from '../../context/auth-context';
import hotelService from './../../lib/hotel-service'
import HotelCard from '../../components/HotelCard/HotelCard';


class Hotels extends React.Component {
    state = {
        hotels: [],
        isLoading: true
    }

    componentDidMount() {
        hotelService.getAll()
            .then(response => this.setState({ hotels: response, isLoading: false }))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.isLoading
                    ? <p>Is loading...</p>
                    : this.state.hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)
                }
                <Footer />
            </div>
        )
    }
}

export default withAuth(Hotels);