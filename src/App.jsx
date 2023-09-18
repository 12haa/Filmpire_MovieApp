import { Css, Movie } from "@mui/icons-material";
import { CssBaseline } from "@mui/material";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Actors,
  MovieInrofmation,
  Movies,
  Navbar,
  Profile,
} from "./components/index";

import useStyles from "../styles";
import useAlan from "./components/Alan";

const App = () => {
  useAlan();
  const alanBtnContainer = useRef();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" exact element={<MovieInrofmation />} />
          <Route path="/actors/:id" exact element={<Actors />} />
          <Route path="/" exact element={<Movies />} />
          <Route path="/profile/:id" exact element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
