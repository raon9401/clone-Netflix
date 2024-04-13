import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import Spinner from 'react-bootstrap/Spinner';
import Alert from "react-bootstrap/Alert"

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError, error } = useMovieDetailQuery({id});
  console.log(data);

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
    <div>MovieDetailPage{id}</div>
  )
}

export default MovieDetailPage