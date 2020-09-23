import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Movie from "./components/Movie";
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popluarity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };
  const getMovies = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  return (
    <div className={classes.DisplayColumn}>
      <header>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            className={classes.Search}
            type="search"
            placeholder="search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
      </header>
      <div className={classes.App}>
        {movies.length > 0 &&
          movies.map((movie) => {
            console.log(movie);
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
    </div>
  );
}

export default App;
