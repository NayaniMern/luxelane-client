import React, { useState } from "react";
import "./Lookbook.css";
import image1 from "./assets/g1.webp";
import image2 from "./assets/g2.jpeg";
import image3 from "./assets/g3.webp";
import image4 from "./assets/g4.jpeg";
import image5 from "./assets/g5.jpeg";
import image6 from "./assets/g6.jpeg";
import image7 from "./assets/g7.webp";
import image8 from "./assets/g8.webp";
import image9 from "./assets/g9.jpeg";
import image10 from "./assets/g10.webp";
import image11 from "./assets/g11.webp";
import image12 from "./assets/g12.webp";


const Lookbook = () => {
  const data = [
    {
      imgSrc:image1,
    },
    {
      imgSrc:image2,
    },
    {
      imgSrc:image3,
    },
    {
      imgSrc:image4,
    },
    {
      imgSrc:image5,
    },
    {
      imgSrc:image6,
    },
    {
      imgSrc:image7,
    },
    {
      imgSrc:image8,
    },
    {
      imgSrc:image9,
    },
    {
      imgSrc:image10,
    },
    {
      imgSrc:image11,
    },
    {
      imgSrc:image12,
    }
    
  ]
  const [model,setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImg = (imgSrc, index) => {
   // console.warn(imgSrc)
    setTempImgSrc(imgSrc);
    setCurrentIndex(index);
    setModel(true);

  }
  const showPrev = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTempImgSrc(data[newIndex].imgSrc);
  };

  const showNext = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTempImgSrc(data[newIndex].imgSrc);
  };
  return (
    <>
      <div className="container py-5 px-4 look-container overflow-hidden">
        <h1>LuxeLane Lookbook</h1>
        <p>Explore the style stories behind our most-loved piece, where elegance meets effortless fashion.</p>
      
        <div className={model? "model open" : "model"}>
          <img src={tempimgSrc} alt="error"/>
          <i className="bi bi-x-square" onClick= {()=> setModel(false)}> </i>
          <span className="prev-btn" onClick={showPrev}><i className="bi bi-caret-left-square"></i></span>
          <span className="next-btn" onClick={showNext}><i className="bi bi-caret-right-square"></i></span>
        </div>
        <div className="gallery  ">
        {data.map((image, index) => {
          return (
            <div key={index} className=" pics " onClick={()=> getImg(image.imgSrc,index)}>
              
                <img src={image.imgSrc} style={{width:'100%'}} alt="error" />
                
          
            </div>
           
          );
        })}
      </div>
      </div>
        
     
    </>
  );
};

export default Lookbook;
