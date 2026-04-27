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
        alt: "",
    },
    {
        id: 2,
        image: real_02,
        alt: "",
    },
    {
        id: 3,
        image: real_03,
        alt: "",
    },
    {
        id: 4,
        image: real_04,
        alt: "",
    },
    {
        id: 5,
        image: real_05,
        alt: "",
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
            { ...realisations[previousIndex], className: "side-image", index: previousIndex },
            { ...realisations[currentIndex], className: "center-image", index: currentIndex  },
            { ...realisations[nextIndex], className: "side-image", index: nextIndex  },
            ];
            };


 return (
   
            

        <div className="realisations-carousel d-flex align-items-center justify-content-center gap-3">

            <div className="carousel-images d-flex align-items-center justify-content-center gap-4">
                {getVisibleImages().map((realisation, index) => (
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