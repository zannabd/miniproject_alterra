import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledHero = styled.div`
  background-color: #0d004f;
  color: #fff;
  font-family: "Poppins";
  padding: 2rem;
  padding-top: 6rem;

  .right {
    text-align: center;
    margin: 2rem;
  }
  #contain {
    margin-left: 2rem;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  #blue {
    color: #118ab2;
  }
  button {
    padding: 0.9%;
    background-color: #64007b;
    color: white;
    border: none;
    margin-top: 2rem;
    width: 100%;
  }

  button:hover {
    background-color: #470057;
  }

  @media screen and (min-width: 992px) {
    #contain {
      flex-direction: row;
    }
    .left {
      flex-basis: 60%;
      text-align: left;
      align-self: center;
    }

    .right {
      flex-basis: 40%;
      text-align: center;
      margin-top: 0;
    }
    button {
      width: 30%;
    }
  }
`;
export default function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const genre = movie && movie.genres.map((genre) => genre.name).join(",\n");
  const trailer = movie && movie.videos.results[0].key;

  useEffect(() => {
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mendapatkan satu data dari trending movies
  async function getTrendingMovies() {
    const response = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);

    return response.data.results[0];
  }

  // Fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    // ambil id dari trending movie
    const trending = await getTrendingMovies();
    const id = trending.id;

    // fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  return (
    <StyledHero>
      <>
        <div className="d-flex mx-5" id="contain">
          <div className="left">
            <h1 className="mb-3">{movie.title}</h1>
            <div className="d-flex" id="blue">
              <p className="me-4">{movie.release_date}</p>
              <p>{genre}</p>
            </div>
            <p className="my-4">{movie.overview}</p>
            <button className="rounded-3">
              <a className="text-white text-decoration-none" href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank" rel="noopener noreferrer">
                Watch Trailer
              </a>
            </button>
          </div>
          <div className="right">
            <img className="rounded-4" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title}></img>
          </div>
        </div>
      </>
    </StyledHero>
  );
}
