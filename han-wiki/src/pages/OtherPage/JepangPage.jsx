import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Popular from "../../components/Popular";
import axios from "axios";
import ENDPOINTS from "../../constant/endpoints";

export default function JepangPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesKorea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getPopularMoviesKorea() {
    const response = await axios(ENDPOINTS.JAPAN_POPULAR);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Popular country="Popular Movie Japanese" movies={movies} />
      
    </>
  );
}
