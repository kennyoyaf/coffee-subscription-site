import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./components/Global";
import Subscribe from "./Pages/Subscribe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/About" element={<About />} exact />
        <Route path="/Subscribe" element={<Subscribe />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
