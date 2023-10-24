import { useEffect, useState } from "react";
import Hero from "../components/Hero";

import Popular from "../components/Popular";
import axios from "axios";

export default function Home() {
  const [ movies, setMovies ] = useState([]);


  const API_KEY = "6e7471e72afb5cdd6752dd237ce49324";
  useEffect(() => {
    getPopularMoviesUsa();
  }, []);

  async function getPopularMoviesUsa() {
    // fetch dengan axios
    const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&certification_country=US`);

    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Popular country="Popular Movie" movies={movies} />
    </>
  );
}
