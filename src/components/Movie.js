import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css'

const Movie = ({movie}) => {
  return (
    <div key={movie.id} className='movie'>
                <img src={movie.medium_cover_image} alt="" className='movie__img'/>
                <h2 className='movie__title'>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </h2>
                <h3 className='movie__year'>{movie.year}</h3>
                <p>{movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
                {/* hasOwnProperty()함수를 이용하여 미리 genres key가 있는지 확인하고
                 없으면 null로 처리하는 과정 */}
                {movie.hasOwnProperty("genres") ? (
                  <ul>
                    {movie.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
  )
}

Movie.propTypes ={
    movie:PropTypes.object.isRequired,
}

export default Movie