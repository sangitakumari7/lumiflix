import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store => store.movies);
  return (
    //
    <div className='bg-black'>
      <div className='-mt-52 pl-10 relative z-20'>

       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
    </div>
    )
  
}

export default SecondaryContainer
