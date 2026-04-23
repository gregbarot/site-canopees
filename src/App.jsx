//import Outils
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Composants
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//import Pages
import Accueil from "./pages/Accueil";
import QuiSommesNous from "./pages/QuiSommesNous";
import Prestations from "./pages/Prestations";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import CGU from "./pages/CGU";

//import Styles
import './App.css'


function App() {
    return (
<>
    <BrowserRouter>

      <header>
        <Navbar/>
      </header>

      <main>
      <p>Dessous vont s'afficher les pages</p>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>

      </main>

      <footer>
        <Footer/>
      </footer>
    </BrowserRouter>
     
</>
   
  )
}

export default App
