import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider"
import Description from "../components/Accueil/Description";
import Clients from "../components/Accueil/Clients";
import Realisations from "../components/Accueil/Realisations"
import "../styles/Accueil.css";


export default function Accueil() {
  return (

      <>
        <section id="hero-slider">
           {/* Contenu au dessus du slider */}
              <div className="slider-content col-8 col-lg-6">
                <p className="surtitle">
                  Création et entretien d'espaces verts
                  </p>

                <Link to="/prestations"
                className="slider-button">
                  Découvrez nos prestations</Link>
              </div>

            {/* Le slider */}
              <Slider/>
        </section>
     
     
        <Description/>

        <Clients/>

        <Realisations/>       
      </>

  )
}