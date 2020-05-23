import React, { useState } from 'react';
import DisplayMovies from './DisplayMovies';

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
    //console.log(event.target.value);
    setSearchText(event.target.value);
  }

  //  const handleSearchInputKeyPress = event => {
  //    if (event.key === 'Enter')
  //      console.log("Enter key pressed. Search value: " + event.target.value);
  //  }

  const filteredMovies = movies.filter(movie => {
    return movie.title.includes(searchText) || movie.url.includes(searchText)
  })

  return (
    <div>
      <h1>Movies</h1>
      <hr />
      <label htmlFor="searchInput">Search: </label>
      <input id="searchInput" type="text" onChange={handleSearchInputChange} />
      <DisplayMovies movies={filteredMovies} />
    </div>
  );
}


export default App;
