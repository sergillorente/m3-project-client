import React from 'react'
import { withAuth } from './../../context/auth-context';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search for the hotel" />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
                <div className="dropdown">
                    <button className="dropbtn">District</button>
                    {props.user.district.map((district) => {

                        <div key={district._id} district={district} className="dropdown-content" />
                    })
                    }
                    <button className="dropbtn">Category</button>
                    {props.user.category.map((category) => {

                        <div key={category._id} district={category} className="dropdown-content" />
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default withAuth(SearchBar)
