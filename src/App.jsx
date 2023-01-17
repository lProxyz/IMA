import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Components/Principal/Services";
import IndexLayout from "./Layouts/indexLayout";
import Home from "./pages/Private/Public/Principal/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
