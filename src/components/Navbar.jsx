import { Link, NavLink} from "react-router-dom";
import logo from "../assets/images/logo-canopees.png"



export default function Navbar() {
  return (
    <header className="container pb-3 shadow-sm">
     
      {/* Logo */}
        <div className="d-flex justify-content-center py-5 px-5">
          <Link to="/">
            <img
              className="logo img-fluid"
              src={logo}
              alt="logo de Canopées"
              />
          </Link>
        </div>

      {/* Navbar */}
      <nav className="custom-navbar navbar navbar-expand-lg pt-2 pb-2">
          <div className="container-fluid justify-content-center px-5">


            {/* Grand ecran */}
            <ul className="navbar-nav d-flex justify-content-around w-100 px-0 m-0 fs-5">
             
              <li className="nav-item col-auto">
                <NavLink
                to="/"
                  end 
                  className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"}
                  >
                    Accueil</NavLink>
              </li>

              <li className="nav-item col-auto">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"} to="/qui-sommes-nous">Qui sommes-nous</NavLink>
              </li>

              <li className="nav-item col-auto">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"} to="/prestations">Prestations</NavLink>
              </li>

              <li className="nav-item col-auto">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"} to="/tarifs">Tarifs</NavLink>
              </li>

              <li className="nav-item col-auto">
                <NavLink className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"} to="/contact">Contact</NavLink>
              </li>

            </ul>

          </div>
      </nav>

   </header>
    
  )
}