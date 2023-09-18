import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useGetListQuery } from "../../sevices/TMDB";
import { RatedCards } from "..";
const Profile = () => {
  const { user } = useSelector(userSelector);
  console.log(user, "user");

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  // *Getting data
  const { data: favotieMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlist();
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favotieMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">Add Favorites</Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favotieMovies} />
          <RatedCards title="Watchlist" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
