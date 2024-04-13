import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/useMovies'
import Alert from "react-bootstrap/Alert"
import { BANNER_BASE_URL } from '../../../../const/URL';
import "./Banner.style.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    const navigate = useNavigate();
    console.log(data);
    if(isLoading) {
        <h1>Loading...</h1>
    }
    if(isError){
        <Alert variant="danger">{error.message}</Alert>
    }

    return (
      <div 
        style={{backgroundImage:`url("${BANNER_BASE_URL}${data?.results[0].poster_path}")`}}
        className='banner'    
      >
        <div className='text-white banner-text-area'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
            <Button onClick={() => navigate(`/movies/${data?.results[0].id}`)} style={{width:"100px"}}>Detail</Button>
        </div>
      </div>
    )
}

export default Banner