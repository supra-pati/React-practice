import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./containers/MovieDetails";
import PopularMovies from "./containers/PopularMovies";
import Layout from "./m-components/Layout";

function MApp() {
  return (
    <div>
      <h4>{"Welcome to React-Movie-project :)"}</h4>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PopularMovies />}></Route>
            <Route path="/movie/:id" element={<MovieDetails />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default MApp;
