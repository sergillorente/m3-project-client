import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Search for the hotel" />
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;