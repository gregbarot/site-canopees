export default function ModalPrestation({closeModal}) {
  return (
       <div
        onClick={closeModal}
        className="">
          <div 
          onClick={e => e.stopPropagation()}
          className="">
              <button 
              onClick={closeModal}
              className="btn btn-danger">x</button>
              <h1>C'est la modale</h1>

          </div>
    
    </div>
  )
}