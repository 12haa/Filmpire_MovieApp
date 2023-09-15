import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../sevices/TMDB";
import genreIdOrCategoryName from "../features/currentGenreOrCategory";
import userReducer from "../features/auth";
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreIdOrCategoryName,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
