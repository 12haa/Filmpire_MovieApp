import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItem,
  ListItemButton,
} from "@mui/material";
import genreIcons from "../../../assets/genres";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import red from "../../../assets/redpng.png";
import blue from "../../../assets/eb2fd3440f8eebff429d66cb44bb4a6a.png";
import { useGetGenresQuery } from "../../sevices/TMDB";
// import action from "../../../assets/genres/action.jpg";

const Sidebar = ({ setMobileOpen }) => {
  const { data, isFetching } = useGetGenresQuery();
  console.log(genreIcons, "Icons");
  genreIcons;
  const categories = [
    {
      label: "Popular ",
      value: "popular",
    },
    {
      label: "Top Rated ",
      value: "top_rated",
    },
    {
      label: "Upcoming ",
      value: "upcoming",
    },
  ];

  console.log(data, "im genres");
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? red : blue}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        <List>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.Links} to="/">
              <ListItemButton onClick={() => {}} button>
                <ListItemIcon>
                  <img
                    src={genreIcons[label]}
                    alt=""
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.Links} to="/">
              <ListItemButton onClick={() => {}} button>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    alt=""
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
