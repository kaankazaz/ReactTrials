import React from 'react';

function DisplayMovies(props)
{
  return props.movies.map(function (movie) {
    return (
      <div key={movie.id}>
        <a href={movie.url}>{movie.title} - {movie.imdbScore}</a>
        </div>
    )
  })
}

export default DisplayMovies;