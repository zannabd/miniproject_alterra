import styled from "styled-components";

const StyledOpenAI = styled.div`
  background-color: #0d004f;
  color: #fff;
  padding: 2rem;
  font-family: "Poppins";
`;


export default function OpenAI() {
  return (
    <StyledOpenAI>
      <div className="text-center">
        <h1 className="my-5">OpenAI</h1>
        <p>This is the AI page.</p>
      </div>
      <div></div>
    </StyledOpenAI>
  );
}
