import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zcO4F4c401JoBtrsqYvhdiuImZAtNAW2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// ------Code SearchableMovieReviewsContainer Here------
//<SearchableMovieReviewsContainer>, will provide a searchable interface allowing the user to 
//enter a search term and then receive a list of reviews that match the search term(s)

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm:''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(response => response.json())
        .then(movieData => this.setState({
            reviews: movieData.results.display_title.searchTerm
        }))

    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        Movie Title
                        <input id='searchBar'
                        onChange={event => this.handleChange(event)}
                        />
                    </label>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer