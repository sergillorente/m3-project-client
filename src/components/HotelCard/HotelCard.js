import React from 'react'

class HotelCard extends React.Component {
    state = {
        image: null,
        title: null,
        description: null,
        category: null
    }

    componentDidMount() {
        this.setState()
    }

    render() {
        return (
            <div>
                {/* maping over the state (once the component has mounted) and add each element of the hotel model (without the district) */}
            </div>
        )
    }
}

export default HotelCard;