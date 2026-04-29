import Formulaire from "../components/Contact/Formulaire"

export default function Contact() {
  return (
    <section className="pt-4" id="contact">
      <h1>Contact</h1>

      <div className="row flex-md-row-reverse">
        <div className="contact-form col-12 col-md-8">
          <h2>formulaire</h2>
          <Formulaire/>
          {/* Demande */}
     



        </div>





        <div className="contact-infos col-12 col-md-4">
          <h2>infos</h2>
        </div>



      </div> 

  
  
    </section>
  )
}