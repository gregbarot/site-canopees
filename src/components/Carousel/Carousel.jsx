import { useState } from "react";
import "./Carousel.css";

import real_01 from "../../assets/images/realisations/img_realisations_01.png"
import real_02 from "../../assets/images/realisations/img_realisations_02.png"
import real_03 from "../../assets/images/realisations/img_realisations_03.png"
import real_04 from "../../assets/images/realisations/img_realisations_04.png"
import real_05 from "../../assets/images/realisations/img_realisations_05.png"

const realisations = [
    {
        id: 1,
        image: real_01,
        alt: "Réalisation d'aménagement de jardin",
    },
    {
        id: 2,
        image: real_02,
        alt: "Réalisation d'aménagement de jardin",
    },
    {
        id: 3,
        image: real_03,
        alt: "Réalisation d'aménagement de jardin",
    },
    {
        id: 4,
        image: real_04,
        alt: "Réalisation d'aménagement de jardin",
    },
    {
        id: 5,
        image: real_05,
        alt: "Réalisation d'aménagement de jardin",
    }
]



export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleImages = () => {

        const previousIndex =
        currentIndex === 0 ? realisations.length - 1 : currentIndex - 1;

        const nextIndex =
        currentIndex === realisations.length - 1 ? 0 : currentIndex + 1;

        return [
        { ...realisations[previousIndex],
            className: "side-image",
            index: previousIndex
        },
        { ...realisations[currentIndex],
            className: "center-image",
            index: currentIndex
        },
        { ...realisations[nextIndex],
            className: "side-image",
            index: nextIndex
        },
        ];
    };


 return (
   
            
     

        <div className="realisations-carousel d-flex justify-content-center">
                    <div className="carousel-container d-flex align-items-center justify-content-center gap-1">
                      
                        {/* Je cree mon tableau des images à afficher dans l'ordre que je veux */}
                        {getVisibleImages().map((realisation) => (
                        <div
                            className={`carousel-image ${realisation.className}`}
                            key={realisation.id}
                            onClick={() => setCurrentIndex(realisation.index)}>
                            <img src={realisation.image} alt={realisation.alt} />
                        </div>
                        ))}
            
                    </div>
        </div>
  );


  
}