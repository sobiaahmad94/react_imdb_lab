import React from 'react'

const MovieItem = ({movie}) => {
    return (
        <>
        {/* <h1>This is a movie item</h1> */}

    <li className="movie-item">
        <a href={movie.url}>{movie.name}</a>
    </li>
        </>
    )
}

export default MovieItem