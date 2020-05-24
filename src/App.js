import React, { useState } from 'react';
import DisplayMovies from './DisplayMovies';
import Search from './Search';

const movies = [
  {
    id: 1,
    title: "The Godfather",
    imdbScore: 9.2,
    url: "https://www.imdb.com/title/tt0068646/"
  },
  {
    id: 2,
    title: "The Gordfather: Part II",
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

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = event => {
    setSearchText(event.target.value);
  }

  const filteredMovies = movies.filter(movie => {
    return movie.title.includes(searchText) || movie.url.includes(searchText)
  })

  return (
    <div>
      <h1>Movies</h1>
      <hr />
      <Search onSearch={handleSearchInputChange} />
      <DisplayMovies movies={filteredMovies} />
    </div>
  );
}


export default App;
