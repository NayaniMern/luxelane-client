import React from 'react'
import ob1 from "./assets/ob1.webp"
import ob2 from "./assets/ob2.webp"
import ob3 from "./assets/ob3.jpg"
import ob4 from "./assets/ob4.webp"
import ob5 from "./assets/ob5.jpg"
import ob6 from "./assets/ob6.jpg"
import ob7 from "./assets/ob7.jpeg"
import ob8 from "./assets/ob8.jpg"

const Posts = () => {
  return (
    <div className="col-lg-5 container p-5 posts-main">
          <h2 className="text-center">Featured Posts</h2>
          <div className="posts container p-3">
          
            <div className="d-flex mb-3 posts-content ">
              <img src={ob1} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>How to Style Your Denim Jacket for Any Occasion</p>
            </div>
            <div className="d-flex mb-3 posts-content">
              <img src={ob2} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Top 5 Summer Wardrobe Essentials</p>
            </div>
            <div className="d-flex mb-3 posts-content">
              <img src={ob3} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>The Ultimate Guide to Athleisure</p>
            </div>
            <div className="d-flex mb-3 posts-content">
              <img src={ob4} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Fall Fashion Trends You Need to Know</p>
            </div>
            <div className="d-flex mb-3 posts-content">
              <img src={ob5} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>The Best Sneakers for Every Occasion</p>
            </div>
            <div className="d-flex mb-3 posts-content">
              <img src={ob6} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>How to Choose the Perfect Pair of Boots</p>
            </div>
            <div className="d-flex mb-3 posts-content">
              <img src={ob7} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Choosing the Best Sandals for Summer</p>
            </div>
            <div className="d-flex mb-3">
              <img src={ob8} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>How to Care for Your Leather Accessories</p>
            </div>

          </div>
        </div>
  )
}

export default Posts