import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import Movie from "../Movie/Movie";
const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(numberOfMovies).map((movie, i) => (
        <Movie i={i} movie={movie} key={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
