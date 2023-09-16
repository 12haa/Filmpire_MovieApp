import React from "react";
import { Typography, Button } from "@mui/material";

import useStyles from "./styles";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();
  //   const currentPage = 1;
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="container"
        color="primary"
        type="button"
        onClick={handlePrev}
      >
        Previous
      </Button>
      <Typography className={classes.pageNumber} variant="h4">
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant="container"
        color="primary"
        type="button"
        onClick={handleNext}
      >
        Next
      </Button>
      <br />
    </div>
  );
};

export default Pagination;
