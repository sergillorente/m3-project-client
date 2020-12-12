import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        search: "",
        district: null,
        category: null
    }

    handleChange = event => {
        const { name, value } = event.target;
        console.log('name ==>', name, 'value==>', value);
        this.setState({ [name]: value })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search, this.state.district, this.state.category)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="Search..." value={this.state.search} onChange={this.handleChange} />
                    <label>
                        Filter by district:
                        <select name="district" value={this.state.district} onChange={this.handleChange}>
                            <option value={null}>All</option>
                            <option value="Sants-Montjuïc">Sants-Montjuïc</option>
                            <option value="Horta-Guinardó">Horta-Guinardó</option>
                            <option value="Ciutat Vella">Ciutat Vella</option>
                            <option value="Eixample">Eixample</option>
                            <option value="Les Corts">Les Corts</option>
                            <option value="Sarrià-Sant Gervasi">Sarrià-Sant Gervasi</option>
                            <option value="Gràcia">Gràcia</option>
                            <option value="Nou Barris">Nou Barris</option>
                            <option value="Sant Martí">Sant Martí</option>
                        </select>
                    </label>
                    <label>
                        Filter by category:
                        <select name="category" value={this.state.category} onChange={this.handleChange}>
                            <option value={null}>All</option>
                            <option value={3}>3-stars</option>
                            <option value={4}>4-stars</option>
                            <option value={5}>5-stars</option>
                        </select>
                    </label>
                    <input type="submit" value="Search" />
                </form>
                <button onClick={this.props.removeFilters}>Remove filters</button>
            </div>
        )
    }
}

export default SearchBar
