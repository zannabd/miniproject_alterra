// Buat Variabel API_KEY
const API_KEY = import.meta.env.VITE_API_KEY;

// Membuat variable URL API: BASE_URL
const BASE_URL = "https://api.themoviedb.org/3";
const MOCK_API = "https://6524e7f8ea560a22a4ea3f65.mockapi.io";
// Membuat variable Endpoints (object)
const ENDPOINTS = {
  GENERAL_POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}&certification_country=US`,
  KOREAN_POPULAR: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&primary_release_date.gte=2020-12-01&adult=false`,
  JAPAN_POPULAR: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ja&primary_release_date.gte=2019-01-01`,
  GET_DETAIL(id) {
    return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
  },
  GET_TRENDING: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  SEARCH_MOVIE(query) {
    return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  },
  MOVIES(id) {
    return `${MOCK_API}/movies/${id}`;
  },
  ADD_MOVIE: `${MOCK_API}/movies`,
  
};

// eslint-disable-next-line react-refresh/only-export-components
export default ENDPOINTS;
