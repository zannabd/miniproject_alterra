import styled from "styled-components";
const StyledFooter = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  font-family: "Open Sans";
  align-self: center;

  footer {
    margin: 0 2rem 0 2rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <>
        <footer className="d-flex justify-content-between">
          <div>
            <h2>Han-WIKI</h2>
            <p>Developed By Fauzan Abdillah</p>
          </div>
          <div>
            <p>
              2023 Complete Front- End
              <br />
              Engineer Career with React JS
            </p>
          </div>
        </footer>
      </>
    </StyledFooter>
  );
}
