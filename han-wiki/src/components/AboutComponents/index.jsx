/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: #0d004f;
  color: #fff;
  padding: 2rem;
  font-family: "Poppins";

  p {
    margin: 0 0.5rem 0 0.5rem;
  }
  @media screen and (min-width: 768px) {
    p {
      margin: 0 8rem 0 8rem;
    }
  }
`;

export default function About() {
  return (
    <StyledAbout>
      <div className="text-center">
        <h1 className="my-5">About</h1>
        <p>
          A web application that provides movie databases by displaying common, Korean, and Japanese popular movies. You can also recommend movies and dramas according to preference by going to the create page and fill in the form
          accordingly. Don't forget to contact us and visit linkedin, github and instagram
        </p>
      </div>
    </StyledAbout>
  );
}
