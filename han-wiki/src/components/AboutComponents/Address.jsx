import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledAddress = styled.div`
  padding: 2rem;
  font-family: "Jost", sans-serif;

  h2 {
    color: #64007B;
    font-weight: 600;
    font-size: 28px;
  }

  h3 {
    color: #64007B;
    font-weight: 700;
    font-size: 16px;
  }
  li {
    list-style-type: none;
    font-size: 14px;
    font-weight: 50
  }
  #circle {
    height: 36px;
    width: 36px;
    background-color: #64007B;
    border-radius: 50%;
  }

  #shape {
    display: flex;
    justify-content: space-evenly;
  }
`;
export default function Address() {
  return (
    <StyledAddress>
      <Container>
        <div className="d-flex justify-content-evenly py-3">
          <div>
            <h2>Han-WIKI</h2>
            <p>
              Jl.Mawar <br />
              Kota Bekasi, Jawa Barat <br />
              Indonesia <br />
              <br />
              <b>Phone</b>: +1 5589 55488 55 <br />
              <b>Email</b>: fabilah234@gmail.com
            </p>
          </div>
          <div className="carde">
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>Movie</li>
              <li>Create</li>
              <li>OpenAI</li>
              <li>About</li>
            </ul>
          </div>
          <div className="carde">
            <h3>Our Services</h3>
            <ul>
              <li>Popular Movie In USA</li>
              <li>Popular Movie In Korean</li>
              <li>Popular Movie In Japan</li>
              <li>Create a Popular Movie</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="carde">
            <h3>Our Social Networks</h3>
            <p>Contact us via linkedin, instagram, and github</p>
            <div id="shape">
              <div id="circle"></div>
              <div id="circle"></div>
              <div id="circle"></div>
              <div id="circle"></div>
              <div id="circle"></div>
            </div>
          </div>
        </div>
      </Container>
    </StyledAddress>
  );
}
