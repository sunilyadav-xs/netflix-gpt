import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MovieVideoPart = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  console.log(movies)
  if(!movies) return;
  const mainMovie = movies[0];

  const {title, overview, id } = mainMovie;

  return (
    <div className="w-screen overflow-x-hidden">
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MovieVideoPart;
