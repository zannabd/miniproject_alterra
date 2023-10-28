import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledAddress = styled.div`
  padding: 2rem;
  font-family: "Jost", sans-serif;

  h2 {
    color: #64007b;
    font-weight: 600;
    font-size: 28px;
  }

  h3 {
    color: #64007b;
    font-weight: 700;
    font-size: 16px;
  }
  li {
    list-style-type: none;
    font-size: 14px;
    font-weight: 50;
  }
  #circle {
    height: 36px;
    width: 36px;
  }

  #shape {
    display: flex;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 768px) {
    #address {
      display: flex;
    }
  }
`;
export default function Address() {
  return (
    <StyledAddress>
      <Container>
        <div className="justify-content-evenly py-3" id="address">
          <div>
            <h2>Han-WIKI</h2>
            <p>
              Jl.Mawar <br />
              Kota Bekasi, Jawa Barat <br />
              Indonesia <br />
              <br />
              <b>Phone</b>: +1 5589 55488 55 <br />
              <b>Email</b>: fabdilah234@gmail.com
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
              <li>Search Movie By Title</li>
              <li>Create a Popular Movie</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="carde">
            <h3>Our Social Networks</h3>
            <p>Contact us via linkedin, instagram, and github</p>
            <div id="shape">
              <Link to="https://www.linkedin.com/in/fauzan-abdillah-aa04b2213/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0054db" }} id="circle" />
              </Link>
              <Link to="https://github.com/zannabd" target="_blank">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} id="circle" />
              </Link>
              <Link to="https://www.instagram.com/fawuzan_abd/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000" }} id="circle" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </StyledAddress>
  );
}
