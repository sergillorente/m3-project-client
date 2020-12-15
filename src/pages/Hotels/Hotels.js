import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import { withAuth } from '../../context/auth-context';
import hotelService from './../../lib/hotel-service'
import HotelCard from '../../components/HotelCard/HotelCard';
import SearchBar from '../../components/SearchBar/SearchBar'


class Hotels extends React.Component {
    state = {
        hotels: [],
        filteredHotels: [],
        isLoading: true,
        error: false
    }

    componentDidMount() {
        hotelService.getAll()
            .then(response => this.setState({ hotels: response, filteredHotels: response, isLoading: false }))
            .catch(err => this.setState({ error: err.response.data.message, isLoading: false }))

    }

    handleSearch = (search, district, category) => {

        const filteredHotels = this.state.hotels.filter((hotel) => {
            if (search && !hotel.title.toLowerCase().includes(search.toLowerCase())) {
                return false
            }
            if (district && hotel.district !== district) {
                return false
            }
            if (category && hotel.category !== +category) {
                return false
            }
            return true
        })

        this.setState({ filteredHotels: filteredHotels })
    }

    removeFilters = () => {
        this.setState({ filteredHotels: this.state.hotels })
        console.log(this.state.filtredHotels);
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.isLoading
                    ? <p>It's loading...</p>
                    : <div>
                        {this.props.isLoggedIn ? 
                            <SearchBar
                            handleSearch={this.handleSearch}
                            removeFilters={this.removeFilters}
                        />
                        : null}
                        <div>
                            {this.state.filteredHotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
                        </div>
                    </div>
                }
                {this.state.error && <p>{this.state.error}</p>}
                <Footer />
            </div>
        )
    }
}

export default withAuth(Hotels);