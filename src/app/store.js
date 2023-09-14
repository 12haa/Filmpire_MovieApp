import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../sevices/TMDB";
import genreIdOrCategoryName from "../features/currentGenreOrCategory";
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreIdOrCategoryName,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
