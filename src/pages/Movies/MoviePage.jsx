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

  const keyword = query.get("q");

  const {data, isLoading, isError, error }= useSearchMovieQuery({keyword,page});
  const {data:genreData} = useGenresQuery(); 

  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  }

  const handleFilterList = (item) => {
    setFilterList([...filterList,item.name]);
  }

  const handleFilterListDelete = (index) => {
    const filterArr = filterList.filter((el,idx) => idx !== index);
    setFilterList(filterArr);
  }

  useEffect(() => {
    setFilterList([]);
  },[])

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
        <Col lg={4} xs={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {genreData && genreData.map((item, index ) => (
                <Dropdown.Item 
                  key={index}  
                  onClick={() => handleFilterList(item)} 
                  style={{display: filterList.includes(item.name) ? "none" : "block"}}
                  disabled={filterList.includes(item.name)} 
                  >
                    {item.name}
                  </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Stack className="pt-2 d-flex flex-wrap" direction="horizontal" gap={2}>
            {filterList.map((item, index) => (
              <Badge bg="danger" className="justify-content-center align-items-center d-flex" key={index}>
                {item}<CloseButton onClick={() => handleFilterListDelete(index)}/>
              </Badge>
            ))}
          </Stack>
        </Col>
        {/* movie contents */}
        <Col lg={8} xs={12} className='movie-contents-area'>
          <Row>
          {data?.results.map((movie, index) =>
            <Col className='justify-content-center d-flex' key={index} lg={3} md={4} sm={6} xs={12}>
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
            pageCount={data?.total_pages}
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