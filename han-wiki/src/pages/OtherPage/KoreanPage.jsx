import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Popular from "../../components/Popular";
import axios from "axios";
import ENDPOINTS from "../../constant/endpoints";

export default function KoreanPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesKorea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getPopularMoviesKorea() {
    const response = await axios(ENDPOINTS.KOREAN_POPULAR);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Popular country="Popular Movie and Drama Korea" movies={movies} />
    </>
  );
}
