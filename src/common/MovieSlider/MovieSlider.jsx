import React from 'react'
import "./MovieSlider.style.css";
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';
import 'react-multi-carousel/lib/styles.css';

const MovieSlider = ({title, movies, responsive}) => {

  return (
    <div> 
        <h3>{title}</h3>
        {movies && <Carousel
          infinite={true}
          centerMode={true}
          draggable={false}
          itemClass='movie-slider p-1'
          containerClass='carousel-container'
          responsive={responsive}
          removeArrowOnDeviceType={["mobile"]}
          autoPlaySpeed={5000}
          autoPlay={true}
        >
          {movies?.map ((movie, index) => (
            <MovieCard movie={movie} key={index}/>
            ))}
        </Carousel>
        }</div>
  )

}

export default MovieSlider