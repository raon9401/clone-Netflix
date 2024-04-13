import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import Spinner from 'react-bootstrap/Spinner';
import Alert from "react-bootstrap/Alert"
import { Button, Col, Container, Row } from 'react-bootstrap';
import DetailInfo from './components/DetailInfo/DetailInfo';
import RecommendMovieSlider from './components/RecommendMovieSlider/RecommendMovieSlider';
import Review from './components/Review/Review';


// ---상단---
// 1. 좌측 이미지 베너 - 상단 좌측에 배치
// poster_path 사용, https://wwww.themoviedb.org/t/p./w300_and_h450_bestv2 사용
// 2. 영화 제목, 장르, 영화 인기도, 영화 줄거리, 예산(, 로 나누기), 개봉일 보여주기
// 4. 예고편 - 모달과 유튜브 결함 => 영화 제목 옆에 배치.

// ---하단---
// 3. 리뷰 | 추쳔영화
// 리뷰 : 더보기, 접기 추가
// 추천영화 - 양이 많지 않으면 캐러셀로 보여주기
const optionValueArr = ["Review", "Recommend Movies"];


const MovieDetailPage = () => {
  const [optionValue, setOptionValue] = useState(optionValueArr[0]);
  const { id } = useParams();
  const { data:movieDetail, isLoading, isError, error } = useMovieDetailQuery({id});

  if(isLoading) {
    <div className="spinner-area">
      <Spinner
        animation='border'
        variant="danger"
        style={{width: "5rem", height:"5rem"}}
        />
    </div>
  }
  if(isError){
      <Alert variant="danger">{error.message}</Alert>
  }

  const handleOptionValue = (value) => {
    setOptionValue(value);
    console.log(value)
  }

  return (
    movieDetail &&
      <Container>
        <Row>
          <Col lg={4} xs={12} className="justify-content-center align-items-center d-flex">
            {/* movie image */}
            {movieDetail?.belongs_to_collection?.poster_path ?
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail?.belongs_to_collection.poster_path}`} alt="movie poster img"/> :
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail?.poster_path}`} alt="movie poster img"/>
            }
          </Col>
          <Col lg={8} xs={12}>
            {/* movie detail info */}
            <DetailInfo id={id} movieDetail={movieDetail}/>
          </Col>
        </Row>
        <div className='d-flex column-gap-2 mt-2 mb-2'>
          {/* review | related movie */}
          {optionValueArr.map((item, index) => 
          <Button variant={optionValue === item ? "warning" : "outline-warning"} key={index} onClick={() => handleOptionValue(item)}>{item}</Button>
          )}
        </div>
        <Row>
          <Col>
          {/* review or related movie component */}
          {optionValue === "Review" ? 
            <Review id={id}/>
          :
            <RecommendMovieSlider id={id}/>
          }
          </Col>
        </Row>
      </Container>
  )
}

export default MovieDetailPage