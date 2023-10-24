import styled from "styled-components";
import logo from "../../images/Han-Wiki.png";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.div`
  background-color: #0d004f;
  color: white;
  padding: 1rem;
  font-family: "Poppins";

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #brand {
    flex-shrink: 0;
  }

  ul li {
    list-style-type: none;
    cursor: pointer;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  #list {
    color: #fff;
    transition: color 0.2s;
  }
  #list:hover {
    color: gray;
  }

  .dropbtn {
    background-color: #0d004f;
    border: none;
    color: #fff;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 100px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .dropdown-menu .dropdown-item {
    color: #000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-menu .dropdown-item:hover {
    background-color: #d9d9d9;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      margin: 2rem 2rem;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <>
        <nav>
          <div className="ms-5" id="brand">
            <img src={logo}></img>
            {/* <span className="fs-1 fw-bold">Han-WIKI</span> */}
          </div>

          <ul className="d-flex ">
            <li>
              <NavLink className="text-decoration-none" id="list" exact="true" to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="dropdown">
              <button className="dropbtn">Movie</button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="movie/korea" activeclassname="active">
                    Korea
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="movie/jepang" activeclassname="active">
                    Jepang
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink className="text-decoration-none" id="list" to="create">
                Create
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="text-decoration-none" id="list" to="openai" activeclassname="active">
                OpenAI
              </NavLink>
            </li>
            <li>
              <NavLink className="text-decoration-none" id="list" to="about" activeclassname="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    </StyledNavbar>
  );
}
