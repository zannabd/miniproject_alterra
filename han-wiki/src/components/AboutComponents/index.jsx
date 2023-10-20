import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: #0d004f;
  color: #fff;
  padding: 2rem;
  font-family: "Poppins";
`;

export default function About() {
  return (
    <StyledAbout>
      <div className="text-center">
        <h1 className="my-5">About</h1>
        <p>This is the about page.</p>
      </div>
      <div>
        
      </div>
    </StyledAbout>
  );
}
