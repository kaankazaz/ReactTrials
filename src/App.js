import React from 'react';

const movies = [
  {
    id: 1,
    title: "The Godfather",
    imdbScore: 9.2,
    url: "https://www.imdb.com/title/tt0068646/"
  },
  {
    id: 2,
    title: "The Godfather: Part II",
    imdbScore: 9.0,
    url: "https://www.imdb.com/title/tt0071562/"
  },
  {
    id: 3,
    title: "The Godfather: Part III",
    imdbScore: 7.6,
    url: "https://www.imdb.com/title/tt0099674/"
  }
]

function App() {
  return (
    <div>
      <h1>Movies</h1>
      <hr />
      {
        movies.map(function (movie) {
          return (
            <div key={movie.id}>
              <a href={movie.url}>{movie.title} - {movie.imdbScore}</a>
              </div>
          )
        })
      }
    </div>
  );
}

export default App;
