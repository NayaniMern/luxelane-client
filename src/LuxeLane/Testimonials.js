import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "./assets/ts1.avif";
import testimonial2 from "./assets/ts2.avif";
import testimonial3 from "./assets/ts3.avif";
import testimonial4 from "./assets/ts4.avif";
import testimonial5 from "./assets/ts5.avif";
import testimonial6 from "./assets/ts6.avif";
import testimonial7 from "./assets/ts7.avif";

const Testimonials = () => {
    const data = [
        { image: testimonial1, name: "Vamsi Reddy", profession: "Fashion Blogger", testimonial: "Luxe Lane’s collection is amazing! High-quality fabrics, trendy styles, and a seamless shopping experience. Definitely my favorite online store!" },
        { image: testimonial2, name: "Ramya Krishna", profession: "Stylist", testimonial: "The clothes here are not only stylish but also super comfortable. The quality is top-notch, and every shopping experience is fantastic!" },
        { image: testimonial3, name: "Sreekanth Varma", profession: "Designer", testimonial: "I love the trendy designs at Luxe Lane. Each piece is crafted with elegance and precision. The customer support is also excellent!" },
        { image: testimonial4, name: "Anusha Goud", profession: "Model", testimonial: "Luxe Lane’s outfits make me feel stylish and comfortable. High-quality collections, fast delivery – I am truly satisfied!" },
        { image: testimonial5, name: "Priyadarshini Naidu", profession: "Influencer", testimonial: "This is my go-to brand! Every dress is classy and beautiful. I haven’t seen such unique designs anywhere else. Highly recommended!" },
        { image: testimonial6, name: "Raghuram Choudhary", profession: "Photographer", testimonial: "The outfits available at Luxe Lane are perfect for photoshoots. Modern styles, superior fabric – an amazing experience!" },
        { image: testimonial7, name: "Hemalatha Raju", profession: "Corporate Employee", testimonial: "I always choose Luxe Lane for office wear. Premium fabrics, trendy designs, and a hassle-free shopping experience – I absolutely love it!" }
    ];

    const settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true,
        responsive: [
            { 
                breakpoint: 1024, 
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } 
            },
            { 
                breakpoint: 667,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } 
            }
        ]
    };

    return (
        <section className="container p-4 testimonial-container overflow-hidden ">
            <h1 className="text-center mb-4">Real Reviews, Real Style</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    
                    {data.map((testimonial, index) => {
                        return(
                        <div key={index} className="p-2">
                            <div className="card shadow p-3">
                                <div className='card-head'>
                                <img src={testimonial.image} className="card-img-top rounded mx-auto" alt="error" style={{ maxWidth: "100px", objectFit: "cover" }} />

                                </div>
                                <div className="card-body text-center d-flex flex-column">
                                    <h5 className="fw-bold">{testimonial.name}</h5>
                                    <h3 className=" mb-2">{testimonial.profession}</h3>
                                    <p className="px-5">{testimonial.testimonial}</p>
                                    <div className='icons d-flex justify-content-center 'style={{color:'gold'}}>
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        )
})}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
