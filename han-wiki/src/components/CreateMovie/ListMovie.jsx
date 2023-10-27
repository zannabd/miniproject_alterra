/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledListMovie = styled.div`
  background-color: #370058;
  font-family: "Poppins";
  padding-bottom: 4rem;

  .judul {
    text-align: center;
    margin: 0 0 4rem 0;

    color: #fff;
  }
  p {
    text-align: center;
    color: #118ab2;
    margin-top: 1rem;
  }

  img {
    width: 290px;
    height: 410px;
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(0.9);
  }
  h3 {
    color: #fff;
  }
  .genre {
    font-family: "Open Sans";
  }

  #movie {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 3rem;
    flex-wrap: wrap;
  }
  button {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 768px) {
    #movie {
      flex-basis: 50%;
    }
  }

  @media screen and (min-width: 992px) {
    #movie {
      flex-direction: row;
      justify-content: space-evenly;
      flex-basis: 25%;
    }
  }
`;

export default function ListMovie(props) {
  const { movies, setMovies } = props;
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("https://6524e7f8ea560a22a4ea3f65.mockapi.io/movies");

        setMovies(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getMovies();
  }, []);

  const handleDeleteMovie = async (id) => {
    const confirmDelete = window.confirm("Kamu yakin akan menghapus ini?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/movies/${id}`);
        const updated = movies.filter((movies) => movies.id !== id);
        setMovies(updated);
        console.log(`Movies dengan ID ${movies.id} telah dihapus`);
      } catch (error) {
        console.error("menghapus movie error", error);
      }
    }
  };

  return (
    <StyledListMovie>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d004f"
          opacity="1"
          d="M0,192L0,288L80,288L80,224L160,224L160,192L240,192L240,160L320,160L320,192L400,192L400,128L480,128L480,32L560,32L560,32L640,32L640,96L720,96L720,64L800,64L800,160L880,160L880,160L960,160L960,128L1040,128L1040,96L1120,96L1120,128L1200,128L1200,288L1280,288L1280,224L1360,224L1360,224L1440,224L1440,0L1360,0L1360,0L1280,0L1280,0L1200,0L1200,0L1120,0L1120,0L1040,0L1040,0L960,0L960,0L880,0L880,0L800,0L800,0L720,0L720,0L640,0L640,0L560,0L560,0L480,0L480,0L400,0L400,0L320,0L320,0L240,0L240,0L160,0L160,0L80,0L80,0L0,0L0,0Z"
        ></path>
      </svg>
      <>
        <div className="judul">
          <h1>List Movie</h1>
          <p>Create Movie Result</p>
        </div>
        <div className="mb-3" id="movie">
          {movies.map((movie, index) => (
            <div key={index}>
              <Link to={`/detail/${movie.id}`} className="link">
                <img className="rounded-4" src={movie.poster} alt={movie.title} />
                <h3 className="my-2 mt-3 text-center">{movie.title}</h3>
                <div className="d-flex justify-content-center" id="cardMovie">
                  <p className="mx-2">{movie.release_date}</p>
                  <p className="genre">{movie.genre}</p>
                </div>
              </Link>
              <div className="d-flex justify-content-around text-center">
                <button className="btn btn-danger" onClick={() => handleDeleteMovie(movie.id)}>
                  Delete
                </button>
                <Link to={`/edit/${movie.id}`} className="text-decoration-none color-white">
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </StyledListMovie>
  );
}
