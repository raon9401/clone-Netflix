import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useMovies';
import { responsive } from '../../../../const/responsive';
import Alert from "react-bootstrap/Alert"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopRatedMovieSlide = () => {
    const {data, isLoading, isError, error}= useTopRatedMoviesQuery();
    // console.log(genresData.data.genres);
    
    if(isLoading) {
        <h1>Loading...</h1>
    }
    if(isError){
        <Alert variant="danger">{error.message}</Alert>
    }



  return (
    <div className='carousel-area'>
        <MovieSlider title="Top Rated Movies" movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlide