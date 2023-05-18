import Home from "./Pages/Home";
import About from "./Pages/About";
import Subscribe from "./Pages/Subscribe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./components/Global";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/subscribe" element={<Subscribe />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
