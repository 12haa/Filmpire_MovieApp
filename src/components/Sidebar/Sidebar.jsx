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
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import red from "../../../assets/redpng.png";
import blue from "../../../assets/eb2fd3440f8eebff429d66cb44bb4a6a.png";
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
const demoCategories = [
  {
    label: "Comdey ",
    value: "comdey",
  },
  {
    label: "Action ",
    value: "action ",
  },
  {
    label: "Horror ",
    value: "horror",
  },
  {
    label: "Animation ",
    value: "animation",
  },
];
const Sidebar = ({ setMobileOpen }) => {
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
        {categories.map(({ label, value }) => {
          return (
            <Link key={value} className={classes.Links} to="/">
              <ListItemButton onClick={() => {}} button>
                <ListItemIcon>
                  {/* <img
                    src={red}
                    alt=""
                    className={classes.genreImages}
                    height={30}
                  /> */}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => {
          return (
            <Link key={value} className={classes.Links} to="/">
              <ListItemButton onClick={() => {}} button>
                <ListItemIcon>
                  {/* <img
                    src={red}
                    alt=""
                    className={classes.genreImages}
                    height={30}
                  /> */}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </>
  );
};

export default Sidebar;
