import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import axios from "axios";
import ENDPOINTS from "../constant/endpoints";
import ScrollToTopButton from "../components/ScrolledUp";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesUsa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPopularMoviesUsa() {
    // fetch dengan axios
    const response = await axios(ENDPOINTS.GENERAL_POPULAR);

    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Popular country="Popular Movie" movies={movies} />
      <ScrollToTopButton />
    </>
  );
}
