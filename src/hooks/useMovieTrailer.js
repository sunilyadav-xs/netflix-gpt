import { useDispatch } from "react-redux";
import { API_GET_OPTIONS } from "../utils/constants";
import { addTrailerClip } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieClips = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_GET_OPTIONS);
        const json = await data.json();

        const filterClips = json?.results?.filter(video => video?.name === "Official Trailer");

        const trailer = filterClips.length ? filterClips[0] : json?.results[0];
        dispatch(addTrailerClip(trailer));
        console.log(json)
    };

    useEffect(()=>{
      getMovieClips();
    },[]);
}

export default useMovieTrailer;
