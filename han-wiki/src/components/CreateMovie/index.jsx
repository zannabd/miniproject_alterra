/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const StyledAddMovie = styled.div`
  background-color: #0d004f;
  padding: 2rem;
  font-family: "Poppins";
  color: #fff;
  margin-top: 0;

  .movieForm {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 2rem 1rem 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  input {
    background-color: #d9d9d9;
    outline: none;
    padding: 0.3rem;
    border-radius: 8px;
    border: 2px solid #5800ba;
    width: 100%;
    margin: 0.3rem 0 0.5rem 0;
  }
  input:focus {
    border: 2px solid #7800ff;
  }

  .dateGenre {
    display: flex;
    justify-content: space-between;
  }

  .labelDate {
    width: 50%;
    margin-right: 1rem;
  }
  .labelGenre {
    width: 50%;
    justify-content: end;
  }
  button {
    background-color: #64007b;
    color: #fff;
    padding: 7px;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  button:hover {
    background-color: #470057;
  }
  @media screen and (min-width: 768px) {
    .movieForm {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 992px) {
    .movieForm {
      flex-direction: row;
    }

    .left {
      flex-basis: 60%;
      padding: 1rem;
      align-self: center;
    }
    .right {
      flex-basis: 40%;
      padding: 1rem;
    }
  }
`;

export default function AddMovieForm({ onAddMovie }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    poster: "",
    release_date: "",
    genre: "",
  });
  const [formError, setFormError] = useState({
    title: false,
    poster: false,
    release_date: false,
    genre: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, genre, release_date, poster } = movieData;

    const errors = {
      title: !title,
      genre: !genre,
      release_date: !release_date,
      poster: !poster,
    };

    if (Object.values(errors).some((error) => error)) {
      setFormError(errors);
      return;
    }
    try {
      if (id) {
        await axios.put(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/movies/${id}`, {
          title: title,
          poster: poster,
          release_date: release_date,
          genre: genre,
        });
        navigate("/create");
      } else {
        const response = await axios.post("https://6524e7f8ea560a22a4ea3f65.mockapi.io/movies", {
          id: uuidv4(),
          title: title,
          poster: poster,
          release_date: release_date,
          genre: genre,
        });

        onAddMovie(response.data);
      }

      setMovieData({
        title: "",
        poster: "",
        release_date: "",
        genre: "",
      });

      setFormError({
        title: false,
        poster: false,
        release_date: false,
        genre: false,
      });
    } catch (error) {
      console.log("Gagal Menambah Movie", error);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchMovieData = async () => {
        try {
          const response = await axios.get(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/movies/${id}`);
          const { title, poster, release_date, genre } = response.data;
          setMovieData({ title, poster, release_date, genre });
        } catch (error) {
          console.error("Gagal memuat data film untuk diedit", error);
        }
      };
      fetchMovieData();
    }
  }, [id]);

  return (
    <StyledAddMovie>
      <div className="movieForm">
        <div className="left">
          <img className="rounded-4" src="https://picsum.photos/id/1/500/400" alt="addMovie" />
        </div>
        <div className="right">
          <h1 className="my-3 mb-5 text-center fw-bold">Add Movie Form</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title :</span>
              <br />
              <input type="text" id="inputTitle" name="title" value={movieData.title} onChange={handleChange} />
              {formError.title && <div className="error">{formError.title}</div>}
            </label>

            <label>
              <span>Poster Link :</span>
              <br />
              <input type="text" id="inputPoster" name="poster" value={movieData.poster} onChange={handleChange} />
              {formError.poster && <div className="error">{formError.poster}</div>}
            </label>

            <div className="dateGenre">
              <label className="labelDate">
                <span>Release Date :</span>
                <br />
                <input type="date" id="inputDate" name="release_date" value={movieData.release_date} onChange={handleChange} />
                {formError.release_date && <div className="error">{formError.release_date}</div>}
              </label>
              <label className="labelGenre">
                <span>Genre :</span>
                <br />
                <input type="text" id="inputGenre" name="genre" value={movieData.genre} onChange={handleChange} />
                {formError.genre && <div className="error">{formError.genre}</div>}
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </StyledAddMovie>
  );
}
