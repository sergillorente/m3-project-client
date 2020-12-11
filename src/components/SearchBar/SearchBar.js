import React from 'react'
import { Link } from 'react-router-dom';
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
                {/* The links needs to be showing, only, the hotels which accomplish the filter options*/}

                <div className="dropdown">
                    <button className="dropbtn">District</button>
                    {props.user.district.map((district) => {

                        <Link to='' key={district._id} district={district} className="dropdown-content" />
                    })
                    }
                    <button className="dropbtn">Category</button>
                    {props.user.category.map((category) => {

                        <Link to='' key={category._id} district={category} className="dropdown-content" />
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default withAuth(SearchBar)
