import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Home/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

// 홈페이지 : '/'
// 영화 리스트 : '/movies'
// 영화 상세 페이지 : '/movies/:id'
// 추천 영화 : '/movies/:id/recommandation'
// 리뷰 : '/movies/:id/reviews'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
