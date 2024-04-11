import "./MoviePage.style.css"

import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import Alert from "react-bootstrap/Alert"
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import { useGenresQuery } from "../../hooks/useMovieGenre";
import { SORT_ARR } from "../../const/sortLis";

// keyword에 따른 2가지 상태
// 1. keyword가 없는 경우 - navbar에서 이동
//  => popularMovie 보여주기.
// 2. keyword가 있는 경우
//  => keyword와 관련된 영화들 보여주기.

const MoviePage = () => {
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();
  const [filterList, setFilterList] = useState([]);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState();

  const keyword = query.get("q");

  const {data:movieData, isLoading, isError, error }= useSearchMovieQuery({keyword,page});
  const {data:genreData} = useGenresQuery(); 
  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  }

  // console.log(movieData);


  const handleFilterList = (item) => {
    setFilterList([...filterList,{name:item.name, id:item.id}]);
  }

  const handleFilterListDelete = (index) => {
    const filterArr = filterList.filter((el,idx) => idx !== index);
    setFilterList(filterArr);
  }

  const handleMovieListFilter = (genreIdList) => {
    // console.log(genreIdList);
    // console.log(filterList.some(el => genreIdList.includes(el.id)));
    return filterList.some(el => !genreIdList.includes(el.id))
    // const 
  }

  const handleMovieListSort = (dataArr) => {
    // sort function
    if(sortOption?.sort_keyword === "popularity.asc"){
      return dataArr.sort((a,b) => a.popularity - b.popularity);
    } else if(sortOption?.sort_keyword === "popularity.desc") {
      return dataArr.sort((a,b) => b.popularity - a.popularity);
    } else if(sortOption?.sort_keyword === "vote_average.asc") {
      return dataArr.sort((a,b) => a.vote_average - b.vote_average);
    } else if(sortOption?.sort_keyword === "vote_average.desc") {
      return dataArr.sort((a,b) => b.vote_average - a.vote_average);
    } else {
      return dataArr;
    }
  }

  const handleSortOption = (sortItem) => {
    setSortOption(sortItem);
  }


  useEffect(() => {
    setFilterList([]);
  },[query])



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
        {/* Filter */}
        <Col lg={4} xs={12} className="mb-2">
          <div className="movie-option-box">
            {/* Filter Dropdown*/}
            <Dropdown>
              <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                Filter Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {genreData && genreData.map((item, index ) => (
                  <Dropdown.Item 
                    key={index}  
                    onClick={() => handleFilterList(item)} 
                    style={{display: filterList.some(el => el.name === item.name) ? "none" : "block"}}
                    >
                      {item.name}
                    </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Sort Dropdown*/}
            <Dropdown>
              <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
                {sortOption ?  sortOption.name : "Select Sort" }
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {SORT_ARR.map((item, index) => 
                    <Dropdown.Item key={index} onClick={() => handleSortOption(item)}>{item.name}</Dropdown.Item>
                  )
                }
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Stack className="pt-2 d-flex flex-wrap" direction="horizontal" gap={2}>
            {filterList.map((item, index) => (
              <Badge bg="danger" className="justify-content-center align-items-center d-flex" key={index}>
                {item.name}<CloseButton onClick={() => handleFilterListDelete(index)}/>
              </Badge>
            ))}
          </Stack>
        </Col>
        {/* movie contents */}
        <Col lg={8} xs={12} className='movie-contents-area'>
          <Row style={{width:"100%"}}>
          {movieData && handleMovieListSort(movieData.results).map((movie, index) =>
            handleMovieListFilter(movie.genre_ids) ? 
              // <div key={index}></div> :
              "" :
              <Col className={`justify-content-center d-flex`}
                key={index} 
                lg={3} md={4} sm={6} xs={12}
              >
                <MovieCard movie={movie}/>
              </Col>
          )}
          </Row>
          <ReactPaginate
            nextLabel=" >"
            previousLabel="<"

            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={movieData?.total_pages}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1} // 선택한 페이지
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage