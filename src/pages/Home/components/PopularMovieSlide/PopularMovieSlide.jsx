import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from "react-bootstrap/Alert"
import 'react-multi-carousel/lib/styles.css';
import "./PopularMovieSlide.style.css"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../const/responsive';



const PopularMovieSlide = () => {
    const {data, isLoading, isError, error}= usePopularMoviesQuery();
    // console.log(genresData.data.genres);
    
    if(isLoading) {
        <h1>Loading...</h1>
    }
    if(isError){
        <Alert variant="danger">{error.message}</Alert>
    }



  return (
    <div className='carousel-area'>
        <MovieSlider title="Popular Movies" movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default PopularMovieSlide