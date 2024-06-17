import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MovieListPart from "./MovieListPart";
import MovieVideoPart from "./MovieVideoPart";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MovieVideoPart />
      <MovieListPart />
    </div>
  )
}

export default Browse;
