// Code MovieReviews Here
// my key= zcO4F4c401JoBtrsqYvhdiuImZAtNAW2
import React from 'react'

const MovieReviews = (props) => {
    // console.log('props', props.movies)
    let allReviews= []
    if(props.reviews && props.reviews.map){
        allReviews= props.reviews.map( movie => {
            // console.log('movie',movie.display_title)
                return(
                    <div className='review'>
                        <h1>{movie.display_title}</h1>
                        <p>{movie.summary_short}</p>
                    </div>
                )
        })
    }

    return(
    <div className='review-list'> 
        {allReviews}
        {/* {props.movies}
        {props.reviews} */}
    </div>
    )}


export default MovieReviews;