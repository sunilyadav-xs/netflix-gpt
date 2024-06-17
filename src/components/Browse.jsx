import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MovieListPart from "./MovieListPart";
import MovieVideoPart from "./MovieVideoPart";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="bg-black">
      <Header />
      <MovieVideoPart />
      <MovieListPart />
    </div>
  )
}

export default Browse;
