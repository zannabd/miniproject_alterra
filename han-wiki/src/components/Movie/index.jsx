/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMovie = styled.div`
  margin: 1rem;
  margin-bottom: 1rem;
  h3 {
    font-family: "Poppins";
  }
  p {
    font-family: "Open Sans";
    color: #118ab2;
  }
  .link {
    text-decoration: none;
  }
  #link #movie #title:hover {
    color: grey;
  }
  img {
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(0.9);
  }

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }
  @media screen and (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default function Movie(props) {
  // eslint-disable-next-line react/prop-types
  const { movie } = props;

  return (
    <StyledMovie>
      <>
        <div>
          <Link to={`/detail/${movie.id}`} className="link">
            <img className="rounded-4" src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie" />
            <div className="my-4 mb-5" id="movie">
              <h3 className="fs-3xl text-white" id="title">
                {movie.title}
              </h3>
              <p id="date">
                {movie.year || movie.release_date}
              </p>
            </div>
          </Link>
        </div>
      </>
    </StyledMovie>
  );
}
