import React from 'react'
import { useRecommendMoviesQuery } from '../../../../hooks/useRecommendMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsiveRecommend } from '../../../../const/responsive';
import { Alert } from 'react-bootstrap';

const RecommendMovieSlider = ({id}) => {
  const {data, isLoading, isError, error} = useRecommendMoviesQuery({id});
  console.log(data);

  if(isLoading) {
    <h1>Loading...</h1>
  }
  if(isError){
      <Alert variant="danger">{error.message}</Alert>
  }


  return (
    <div className='carousel-area'>
      <MovieSlider movies={data?.results} responsive={responsiveRecommend}/>
    </div>
  )
}

export default RecommendMovieSlider