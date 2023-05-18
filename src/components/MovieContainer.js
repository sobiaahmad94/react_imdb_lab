import { React, useState } from 'react'
import MovieListContainer from './MovieListContainer'
import UpcomingReleasesContainer from './UpcomingReleasesContainer'
import './MovieContainer.css'


const MovieContainer = () => {

    // movies is the original state
    // setMovies is the function so the state changes
    // There is an array of objects with ids, name and url

    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            name: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id: 3,
            name: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
            id: 4,
            name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
            id: 5,
            name: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
    ])


    return (
        <>
            {/* <h1>I'm the MovieContainer</h1> */}
            {/* This is the heading */}
            <h1>Movie Maze: Upcoming Movie Releases for the UK</h1>
            <hr></hr>

            {/* Contains the movie list component */}
            {/* {movies} refers to state from useState's first parameter, movies is the prop coming from the MovieItem component like this:
            onst MovieItem = ({movie}) => { /}*/}

            {/* Following the diagram, MovieListContainer component should be inside MovieContainer component */}
            <MovieListContainer movies={movies} />

            {/* Contains the upcoming releases component */}
            <hr></hr>
            <UpcomingReleasesContainer />
        </>

    )
}

export default MovieContainer