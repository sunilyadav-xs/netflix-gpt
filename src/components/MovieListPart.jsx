import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListPart = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className=" bg-black w-screen">
      <div className="relative -mt-64">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>

      </div>
    </div>
  )
}

export default MovieListPart;
