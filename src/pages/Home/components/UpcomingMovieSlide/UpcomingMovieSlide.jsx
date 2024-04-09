import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useMovies';
import { responsive } from '../../../../const/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import Alert from "react-bootstrap/Alert"

const UpcomingMovieSlide = () => {
    const {data, isLoading, isError, error}= useUpcomingMoviesQuery();
    // console.log(genresData.data.genres);
    
    if(isLoading) {
        <h1>Loading...</h1>
    }
    if(isError){
        <Alert variant="danger">{error.message}</Alert>
    }



  return (
    <div className='carousel-area'>
        <MovieSlider title="Upcoming Movies" movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default UpcomingMovieSlide