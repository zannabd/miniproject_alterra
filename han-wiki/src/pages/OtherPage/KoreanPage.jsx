import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Popular from "../../components/Popular";
import axios from "axios";

export default function KoreanPage() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "6e7471e72afb5cdd6752dd237ce49324";

  useEffect(() => {
    getPopularMoviesKorea();
  }, []);
  async function getPopularMoviesKorea() {
    const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&with_original_language=ko&primary_release_date.gte=2019-01-01`);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Popular country="Popular Movie and Drama Korea" movies={movies} />
    </>
  );
}
