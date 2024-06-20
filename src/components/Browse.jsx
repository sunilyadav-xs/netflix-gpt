import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MovieListPart from "./MovieListPart";
import MovieVideoPart from "./MovieVideoPart";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="box-content">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MovieVideoPart />
          <MovieListPart />
        </>
      )}
    </div>
  );
};

export default Browse;
