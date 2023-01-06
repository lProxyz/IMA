import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexLayout from "./Layouts/indexLayout";
import Home from "./pages/Private/Public/Principal/Home";
import Carrusel from "./Components/Principal/Carrusel";
import Ejemplo from "./Components/Principal/ejemplo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="carrusel" element={<Carrusel />} />
          <Route path="ejemplo" element={<Ejemplo />} />
          {/* <Route path="carrusel" element={<Carrusel />} /> */}
          {/* <Route path="about" element={<About />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
