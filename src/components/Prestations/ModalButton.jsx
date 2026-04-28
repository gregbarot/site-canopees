import { useState } from "react"
import { createPortal } from "react-dom"
import ModalPrestation from "./ModalPrestation"
import "./ModalButton.css"

export default function ModalButton() {
    const [showModal, setShowModal] = useState(false)


  return (
    <>
        <button 
        onClick={() => setShowModal(true)}
        className="prestation-button"
        >Découvrir en images.
        </button>
        {showModal && createPortal(<ModalPrestation closeModal={() => setShowModal(false)}/>, document.body)}
    </>
  )
}