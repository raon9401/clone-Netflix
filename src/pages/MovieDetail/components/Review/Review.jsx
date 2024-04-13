import "./Review.style.css"
import React from 'react'
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import ReviewText from "./components/ReviewText";

const Review = ({id}) => {
  const { data:movieReview, isLoading, isError, error } = useMovieReviewQuery({id});
  console.log(movieReview)

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

    

  return (
    <Container>
        <Row>
            {movieReview?.map((item,index) => 
                <Col lg={12} key={index} className='review-area p-2 mt-2 mb-2'>
                    <Row className="mx-3 border-bottom border-warning">
                        <Col lg={7} className="p-0">
                            <h5>{item.author_details.username}</h5>
                        </Col>
                        <Col lg={5} className="text-end">
                            {item.updated_at.split("T")[0]}
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <ReviewText content={item.content}/>
                    </Row>
                </Col>
            )}
        </Row>
    </Container>
  )
}

export default Review