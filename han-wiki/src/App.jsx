import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import KoreanPage from "./pages/OtherPage/KoreanPage";
import JepangPage from "./pages/OtherPage/JepangPage";
import CreatePage from "./pages/OtherPage/CreatePage";
import AboutPage from "./pages/OtherPage/AboutPage";
import OpenAI from "./pages/OtherPage/OpenAIPage";
import { useState } from "react";
import DetailPage from "./pages/OtherPage/DetailPage";

function App() {
  const [movies, setMovies] = useState([])
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home movies={movies} setMovies={setMovies}/>} />
          <Route path="/movie/korea" element={<KoreanPage />} />
          <Route path="/movie/jepang" element={<JepangPage/>} />
          <Route path="/create" element={<CreatePage movies={movies} setMovies={setMovies}/>} />
          <Route path="/openai" element={<OpenAI />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
