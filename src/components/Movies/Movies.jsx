import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../sevices/TMDB";
import MovieList from "../MovieList/MovieList";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery()
  console.log(data, "im Data");
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4"> No Movies That Match That Name.</Typography>
        <br />
        Please Search For Something Else
      </Box>
    );
  }

  if (error) "An Error Has Occoured";

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
