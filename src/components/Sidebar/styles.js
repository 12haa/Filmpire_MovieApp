import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justify: "center",
    padding: "10% 0",
  },
  image: {
    width: "70%",
    marginLeft: "20px",
  },
  Links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },

  genreImages: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },
}));
