import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledDetail = styled.div`
  background-color: #0d004f;
  color: #fff;
  font-family: "Poppins";
  padding: 2rem;
  padding-top: 6rem;

  .left img {
    text-align: center;
  }

  .right {
    margin: 2rem;
  }
  #contain {
    margin-left: 2rem;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  h2 {
    color: #808080;
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
  a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (min-width: 992px) {
    #contain {
      flex-direction: row;
    }
    .left {
      flex-basis: 40%;
      text-align: left;
      align-self: center;
    }

    .right {
      flex-basis: 60%;
      margin-top: 0;
    }
    button {
      width: 30%;
    }
  }
`;

// eslint-disable-next-line react/prop-types
export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(",\n");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie?.videos?.results[0].key}`;
  const API_KEY = "6e7471e72afb5cdd6752dd237ce49324";

  async function fetchDetailMovie() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie data: ", error);
    }
  }

  useEffect(() => {
    fetchDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <StyledDetail>
      <>
        <div className="d-flex mx-5" id="contain">
          <div className="left">
            <img className="rounded-4" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}></img>
          </div>
          <div className="right">
            <h1 className="mb-3">{movie.title}</h1>
            {movie.original_title !== movie.title && <h2>{movie.original_title}</h2>}
            <div className="d-flex" id="blue">
              <p className="me-4">{movie.release_date}</p>
              <p>{genres}</p>
            </div>
            <p className="my-4">{movie.overview}</p>
            <button className="rounded-3">
              <a href={trailer} target="_blank" rel="noopener noreferrer">
                Watch Trailer
              </a>
            </button>
          </div>
        </div>
      </>
    </StyledDetail>
  );
}
