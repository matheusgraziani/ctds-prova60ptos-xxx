import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sobre from "./pages/sobre/page";
import Contato from "./pages/contato/page";
import Home from "./pages/Home/page";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;