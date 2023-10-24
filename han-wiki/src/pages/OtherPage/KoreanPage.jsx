import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Popular from "../../components/Popular";
import axios from "axios";

export default function KoreanPage() {
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getPopularMoviesKorea();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getPopularMoviesKorea() {
    const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_original_language=ko&primary_release_date.gte=2020-12-01&adult=false`);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Popular country="Popular Movie and Drama Korea" movies={movies} />
    </>
  );
}
