import "../styles/Prestations.css"
import PrestationCard from "../components/Prestations/PrestationCard"

import { prestations } from "../data/prestations_data"

export default function Prestations() {
  

  return (
    <section className="pt-4" id="prestations">
      <h1>Nos prestations.</h1>
      <div className="prestation-card-container">
        {prestations.map((element) => (
        <PrestationCard key={element.id} prestation={element} />
      ))}
      </div>
    </section>
  )
}