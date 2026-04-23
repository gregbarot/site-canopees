import { Link } from "react-router-dom";

export default function Footer() {
  return (
   <footer>
      <p>Ceci est le footer</p>

      <p>Canopées</p>
      <p>
        <span>820 Boulevard des Capucines, 82000 Montauban</span>
        <span>09.48.56.87.96</span>
        <span> contact@canopees.com</span>
      </p>
      <ul>
        <li><Link to="/mentions-legales">Mentions légales</Link></li>
        <li><Link to="/cgu">CGU</Link></li>
        <li><Link to="/cgv">CGV</Link></li>
      </ul>
    </footer>
  )
}