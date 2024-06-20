import {API_IMG_CDN} from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 '>
      <img src={API_IMG_CDN + posterPath} alt="movie poster" />
    </div>
  )
}

export default MovieCard;
