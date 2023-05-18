import React from 'react'
import MovieItem from './MovieItem'

const MovieListContainer = ({ movies }) => {
    const movieItems = movies.map((movie) => {
        return (
            <MovieItem movie={movie} key={movie.id} />
        )
    })
    return (
        <div>
            <ul>
                {movieItems}
            </ul>
        </div>
    )
}

export default MovieListContainer