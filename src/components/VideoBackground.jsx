
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

  const trailerClip = useSelector(store => store.movies?.trailerClip);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"  src={"https://www.youtube.com/embed/" + trailerClip?.key + "?&autoplay=1&mute=1&loop=1&playlist="+ trailerClip?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
