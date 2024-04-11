import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>MovieDetailPage</div>
  )
}

export default MovieDetailPage