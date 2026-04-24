import { Link } from "react-router-dom";
import pinmap from "../assets/icons/pinmap.svg"
import phone from "../assets/icons/phone.svg"
import mail from "../assets/icons/mail.svg"
import logo_facebook from "../assets/icons/logo_facebook.svg"
import logo_instagram from "../assets/icons/logo_instagram.svg"
import logo_linkedin from "../assets/icons/logo_linkedin.svg"


export default function Footer() {
  return (
  //  <footer className="footer py-4">
  //       <div className="container">
  //         <div className="row align-items-center">

  //             <div className="top-footer text-center mb-3">
  //               <p className="footer-title mb-4">Canopées</p>
  //               <div className="d-flex flex-column flex-md-row justify-content-center">
  //                 <p className="">
  //                   <img src={pinmap} alt="" className="pe-2"/><span className="footer-text px-2">820 Boulevard des Capucines, 82000 Montauban</span>
  //                 </p>
  //                 <p className="">
  //                   <img src={phone} alt="" className="px-2"/><span className="footer-text px-2">09.48.56.87.96</span>
  //                 </p>
  //                 <p className="">
  //                   <img src={mail} alt="" className="px-2"/><span className="footer-text ps-2"> contact@canopees.com</span>
  //                 </p>
  //               </div>
  //               <div className="divider"></div>
  //             </div>


  //             <div className="bottom-footer px-5 text-center mb-3">
  //               <ul className="navbar-nav footer-links d-flex justify-content-center gap-3 p-0 m-0">
  //                 <li><Link to="/mentions-legales">Mentions légales</Link></li>
  //                 <li><Link to="/cgu">CGU</Link></li>
  //                 <li><Link to="/cgv">CGV</Link></li>
  //               </ul>
  //             </div>

  //         </div>
  //       </div>
  //   </footer>
   <footer>
        <div className="container">
          <div className="">

              <p className="footer-title mb-4 d-flex justify-content-center">Canopées</p>

            
              <div className="row justify-content-center  gy-4">
                <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
                  <img src={pinmap} alt="" className="pe-2"/><span className="footer-text px-2">820 Boulevard des Capucines, 82000 Montauban</span>
                </div>
                <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
                  <img src={phone} alt="" className="px-2"/><span className="footer-text px-2">09.48.56.87.96</span>
                </div>
                <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
                  <img src={mail} alt="" className="px-2"/><span className="footer-text ps-2"> contact@canopees.com</span>
                </div>
              </div>
            
              <div className="divider my-4"></div>

              <div className="navbar navbar-expand">
                <div className="container justify-content-center">
                    <ul className="navbar-nav justify-content-center">
                      <li className="nav-item">
                        <Link className="footer-link" to="/mentions-legales">Mentions légales</Link>
                        <span className="px-2">-</span>
                      </li>
                      <li className="nav-item">
                        <Link className="footer-link" to="/cgu">CGU</Link>
                        <span className="px-2">-</span>
                      </li>
                      <li className="nav-item">
                        <Link className="footer-link" to="/cgv">CGV</Link>
                      </li>
                    </ul>
                  </div>
              </div>

          </div>
        </div>
    </footer>
  )
}