import React from 'react'
import "./MovieCard.style.css"
import { BANNER_BASE_URL } from '../../const/URL'
import Badge from 'react-bootstrap/Badge';
import AgeIcon from '../../common/icon/AgeIcon/AgeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useGenresQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {
  const {data:genreData} = useGenresQuery();
  
  const showGenre = (genreIdList) =>{
    const genreNameList = genreIdList.map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id)
        return genreObj.name;
    })

    return genreNameList;
  }
  
  return (
    <div 
        style={{backgroundImage:`url("${BANNER_BASE_URL}${movie.poster_path}")`}}
        className='movie-card'>
            <div className='overlay'>
                    <h4>{movie.title}</h4>
                <div className="genre-box">
                    {genreData && showGenre(movie.genre_ids).map((id,index)=> (
                        <Badge bg="danger" key={index}>
                            {id}
                        </Badge>))
                    }

                    {/* {movie.genre_ids.map((id,index)=> (
                        <Badge bg="danger" key={index}>
                            {id}
                        </Badge>))
                    } */}
                </div>
                <div className='movie-info-area'>
                    <div className="movie-info-text-box">
                        <div className="movie-info-text-wrap">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/256px-IMDb_Logo_Square.svg.png?20200218171646" alt="imdb logo" width="16" className="mr-1"/>
                            {movie.vote_average}
                        </div>
                        <div className="movie-info-text-wrap">
                            <FontAwesomeIcon style={{width: "16px"}} icon={faThumbsUp} />
                            {movie.popularity}
                        </div>
                    </div>
                    <div>
                        <AgeIcon isAdult={movie.adult}/>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default MovieCard