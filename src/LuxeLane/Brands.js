import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bb1 from "./assets/bb1.jpg"
import bb2 from "./assets/bb2.png"
import bb3 from "./assets/bb3.png"
import bb4 from "./assets/bb4.png"
import bb5 from "./assets/bb5.png"
import bb6 from "./assets/bb6.png"
import bb7 from "./assets/bb7.jpg"


const Brands = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplaySpeed: 2000,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
               
               
              }
            }
          ]
      };
      return (
        <div className="slider-container brands-wrapper  container p-4 ">
            <h1 className='mb-5'>Shop by Brands</h1>
          <Slider {...settings}>
            <div>
             <img src={bb1} className='w-75 h-50' alt='error'/>
            </div>
            <div>
            <img src={bb2} className='w-75 h-50' alt='error'/>
            </div>
            <div>
            <img src={bb3} className='w-75 h-50' alt='error'/>
            </div>
            <div>
            <img src={bb4} className='w-75 h-50' alt='error'/>
            </div>
            <div>
            <img src={bb5} className='w-75 h-50' alt='error'/>
            </div>
            <div>
            <img src={bb6} className='w-75 h-50' alt='error'/>
            </div>
            <div>
            <img src={bb7} className='w-75 h-50' alt='error'/>
            </div>
          </Slider>
        </div>
      );
    }

export default Brands