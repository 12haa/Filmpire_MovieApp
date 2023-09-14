import axios from "axios";

const moviesApi = axios.create({
  baseURL: " https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get(`/authentication/token/new`);
    console.log(data, "im dataaaaaaaaaaaaaaaaaaaaaa");
    let token = data.request_token;

    if (data.success) {
      localStorage.setItem("request_token", token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log(" Sorry Your Token Could Not Be Created");
  }
};
