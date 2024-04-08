import React from 'react'
import { useGenresQuery, usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from "react-bootstrap/Alert"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import "./PopularMovieSlide.style.css"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

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
        <h3>Popular Movies</h3>
        {data && <Carousel
          infinite={true}
          centerMode={true}
          itemClass='movie-slider p-1'
          containerClass='carousel-container'
          responsive={responsive}
          removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
          autoPlaySpeed={5000}
          autoPlay={true}

        //   swipeable={false}
        //   draggable={false}
        //   showDots={true}
        //   responsive={responsive}
        //   ssr={true} // means to render carousel on server-side.
        //   infinite={true}
        //   keyBoardControl={true}
        //   customTransition="all .5"
        //   transitionDuration={500}
        //   containerClass="carousel-container"
        //   deviceType={this.props.deviceType}
        //   dotListClass="custom-dot-list-style"
        //   itemClass="carousel-item-padding-40-px"
        >
          {data?.results.map ((movie, index) => (
            <MovieCard movie={movie} key={index}/>
            ))}
        </Carousel>
        }  
    </div>
  )
}

export default PopularMovieSlide