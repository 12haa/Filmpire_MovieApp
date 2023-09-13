import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../sevices/TMDB";
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(tmdbApi),
});
