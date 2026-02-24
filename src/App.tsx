import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Accueil from "./pages/Accueil";
import Innovation from "./pages/Innovation";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Accueil />} />
        
          <Route path="actualites" element={<div>COUCOU TEST</div>} />
          <Route path="innovation" element={<Innovation />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
