import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'


// 배너 => popular 영화 리스트에서 첫번째 아이템.
// popular movie
// top rated movie
// upcoming movie

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
    </div>
  )
}

export default HomePage