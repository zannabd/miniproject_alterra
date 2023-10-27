/* eslint-disable react/prop-types */
import styled from "styled-components";
import Movie from "../Movie";
import PropTypes from "prop-types";
import SearchMovie from "../SearcMovie/searchMovie";
import { useState } from "react";
// import { useEffect, useState } from "react";

const StyledPopular = styled.div`
  background-color: #370058;
  font-family: "Poppins";
  text-align: center;
  margin-top: 0;
  padding: 0 0 4rem 0;

  #popular {
    color: #118ab2;
  }

  .movie {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    .movie {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;

export default function Popular({ country, movies }) {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearchResult = (searchResult) => {
    setSearchedMovies(searchResult);
  };
  return (
    <StyledPopular>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0D004F"
          d="M0 160l20-16c20-16 60-48 100-58.7C160 75 200 85 240 112s80 69 120 58.7c40-10.7 80-74.7 120-96C520 53 560 75 600 96s80 43 120 26.7C760 107 800 53 840 64s80 85 120 112 80 5 120-26.7c40-32.3 80-74.3 120-53.3s80 107 120 154.7c40 48.3 80 58.3 100 64l20 5.3V0H0z"
        ></path>
      </svg>
      <>
        <div>
          <h1 className="fw-bold text-light">Popular</h1>
          <p className="mt-4 mb-5" id="popular">
            {country}
          </p>
        </div>
        <SearchMovie onSearch={handleSearchResult} />
        <div className="movie">
          {(searchedMovies.length > 0 ? searchedMovies : movies).map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </>
    </StyledPopular>
  );
}

Popular.propTypes = {
  country: PropTypes.string.isRequired,
};
