import { render } from '@testing-library/react';
import React from 'react'
import NavBar from './../../components/NavBar/Navbar';
import Footer from './../../components/Footer/Footer';


class Hotels extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Footer />
            </div>
        )
    }
}

export default Hotels;