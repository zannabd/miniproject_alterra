import styled from "styled-components";
import OpenAI from "openai";
import { useState } from "react";

const StyledOpenAI = styled.div`
  background-color: #0d004f;
  color: #fff;
  padding: 1rem;
  font-family: "Poppins";

  .title {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 2rem;
  }
  .title h2 {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 20s linear infinite;
  }
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  .search {
    display: flex;
    justify-content: center;
  }
  .typing {
    flex-basis: 40%;
    padding: 0.5rem;
    resize: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  button {
    background-color: #64007b;
    color: #fff;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .result {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  pre {
    margin: 1rem;
    padding: 0 2rem 0 2rem;
    border: 2px solid black;
    border-radius: 15px;
    width: 800px;
    background-color: #d9d9d9;
    color: #000;
    overflow: auto;
    white-space: pre-wrap;
    max-height: auto;
  }
`;

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function OpenAi() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: "list movie and drama popular sesuai negara yang diketik" + prompt,
        max_tokens: 150,
      });
      setResults(response.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <StyledOpenAI>
      <h1 className="my-5 text-center">OpenAI</h1>
      <div className="title">
        <h2>Memberikan jawaban dan list movie dan drama yang kamu cari</h2>
      </div>
      <div className="search">
        <textarea className="typing" type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ketik disini..." />
        <button onClick={handleClick} disabled={loading || prompt.length === 0}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
      <div className="result">
        <pre>{results || "Jawaban disini..."}</pre>
      </div>
    </StyledOpenAI>
  );
}
