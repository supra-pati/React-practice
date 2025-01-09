import axios from "axios";

export default class TheMovieDbApi {
  apiBaseUrl = "https://api.themoviedb.org/3";
  apiKey;
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  searchMovies = async (query) => {
    const response = await axios.get(
      `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );
    return response;
  };

  getGenres = async () => {
    const response = await axios.get(
      `${this.apiBaseUrl}/genre/search/movie?api_key=${this.apiKey}`
    );
    return response;
  };
}
