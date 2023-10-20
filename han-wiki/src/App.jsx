import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import KoreanPage from "./pages/OtherPage/KoreanPage";
import JepangPage from "./pages/OtherPage/JepangPage";
import CreatePage from "./pages/OtherPage/CreatePage";
import AboutPage from "./pages/OtherPage/AboutPage";
import OpenAI from "./pages/OtherPage/OpenAIPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/korea" element={<KoreanPage />} />
          <Route path="/movie/jepang" element={<JepangPage/>} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/openai" element={<OpenAI />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
