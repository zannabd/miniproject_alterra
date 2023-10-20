import styled from "styled-components";

const StyledAddMovie = styled.div`
  background-color: #0d004f;
  padding: 2rem;
  font-family: "Poppins";
  color: #fff;

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

export default function AddMovieForm() {
  return (
    <StyledAddMovie>
      <>
        <div className="movieForm">
          <div className="left">
            <img className="rounded-4" src="https://picsum.photos/id/1/500/400" alt="addMovie" />
          </div>
          <div className="right">
            <h1 className="my-3 mb-5 text-center fw-bold">Add Movie Form</h1>
            <form>
              <label>
                <span>Title :</span>
                <br />
                <input type="text" id="inputTitle" />
              </label>

              <label>
                <span>Poster Link :</span>
                <br />
                <input type="text" id="inputPoster" />
              </label>

              <div className="dateGenre">
                <label className="labelDate">
                  <span>Release Date :</span>
                  <br />
                  <input type="date" id="inputDate" />
                </label>
                <label className="labelGenre">
                  <span>Genre :</span>
                  <br />
                  <input type="text" id="inputGenre" />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    </StyledAddMovie>
  );
}
