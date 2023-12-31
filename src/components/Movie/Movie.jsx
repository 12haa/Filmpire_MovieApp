import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
const Movie = ({ movie, i }) => {
  const classes = useStyles();
  console.log(movie, "im MOvie");
  console.log(i, "im I");
  return (
    <Grid item xs={12} sm={2} md={3} lg={3} xl={2} className={classes.Movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.Links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.Image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path} `
                : "https://www.fillmurray.com/200/300 "
            }
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
