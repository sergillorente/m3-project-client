import React from 'react'
import axios from 'axios'

class HotelCard extends React.Component {
    state = {
        hotels: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
            .then((response) => {
                this.setState(response)
            })
        
    }

    render() {
        return (
            <div className="hotel-card">
                {this.state.hotels.map((hotel) => {
                    return(
                        <div key={hotel.id}>
                            <img src={hotel.image} />
                            <h3>{hotel.title}</h3>
                            <p>{hotel.district}</p>
                            <p>{hotel.category}</p> {/* Pending to know if it's a text or an image. Check the npm package for stars of REACT*/}
                            <p>{hotel.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default HotelCard;