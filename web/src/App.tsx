import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./components/layout/Container";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import Hits from "./pages/hits/Hits";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/hits/" element={<Hits />} />
          <Route path="/hits/:id" element={<Hits />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
