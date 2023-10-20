import styled from "styled-components";

const StyledMovie = styled.div`
  margin: 1rem;
  margin-bottom: 1rem;
  h3 {
    font-family: "Poppins";
  }
  p {
    font-family: "Open Sans";
  }
`;

export default function Movie() {
  return (
    <StyledMovie>
      <>
        <div>
          <img className="rounded-4" src="https://picsum.photos/300/400" alt="movie" />
          <div className="my-4 mb-5">
            <h3 className="fs-3xl text-white">Title Movie</h3>
            <p className="text-white">Release Date</p>
          </div>
        </div>
      </>
    </StyledMovie>
  );
}
