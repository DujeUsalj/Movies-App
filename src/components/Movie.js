import React from "react";
import classes from "./Movie.module.css";
const IMAGES_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return classes.green;
  } else if (vote >= 6) {
    return classes.orange;
  } else {
    return classes.red;
  }
};
function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className={classes.Movie}>
      <img
        src={
          poster_path
            ? IMAGES_API + poster_path
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx3iQT_xe_Lxpq1F9vzYlik6aF0NGROShbrg&usqp=CAU"
        }
        alt={title}
      />
      <div className={classes.Info}>
        <h3>{title} </h3>
        <span className={classes.tag + `${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className={classes.Over}>
        <h2>Overview</h2>
        <p>{overview} </p>
      </div>
    </div>
  );
}

export default Movie;
