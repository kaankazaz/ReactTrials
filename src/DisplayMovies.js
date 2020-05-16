import React from 'react';

// const DisplayMovies = (props) =>
const DisplayMovies = ({ movies }) => {
    //   return props.movies.map(function (movie) {
    return movies.map(movie => {
        return (
            <div key={movie.id}>
                <a href={movie.url}>{movie.title} - {movie.imdbScore}</a>
            </div>
        );
    });
}

export default DisplayMovies;