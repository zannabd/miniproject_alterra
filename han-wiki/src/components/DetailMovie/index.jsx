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

  @media screen and (min-width: 768px) {
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

export default function Detail() {
  return (
    <StyledDetail>
      <>
        <div className="d-flex mx-5" id="contain">
          <div className="left">
            <img className="rounded-4" src="https://picsum.photos/300/400" alt="gambar1"></img>
          </div>
          <div className="right">
            <h1 className="mb-3">Movie Title</h1>
            <div className="d-flex" id="blue">
              <p className="me-4">Release date</p>
              <p>Genre</p>
            </div>
            <p className="my-4">
              lorem Nostrud laboris nostrud occaecat proident consequat occaecat ullamco mollit. Voluptate dolore tempor officia nostrud cillum nulla ullamco ullamco fugiat exercitation et non minim. Sunt anim excepteur aliqua deserunt
              aliquip eu ea. Ad irure occaecat nulla laborum sit aute reprehenderit. Sit sunt anim amet sint ad do dolore laboris id non eu ea ut ut. Deserunt nisi aliquip nisi proident id eiusmod cupidatat ea ad irure qui ex cillum
              nostrud.
            </p>
            <button className="rounded-3">Watch Trailer</button>
          </div>
        </div>
      </>
    </StyledDetail>
  );
}
