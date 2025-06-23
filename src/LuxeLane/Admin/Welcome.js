import React from "react";

import useCallApi from "./CallApi";
import CountUp from "react-countup";

const Welcome = () => {
  const Men = useCallApi(`https://luxelane-server-zyhb.onrender.com/mens`);
  const Women = useCallApi(`https://luxelane-server-zyhb.onrender.com/womens`);
  const Kids = useCallApi(`https://luxelane-server-zyhb.onrender.com/kids`);
  const FA = useCallApi(`https://luxelane-server-zyhb.onrender.com/footwear_and_accessories`);
  const blogs = useCallApi(`https://luxelane-server-zyhb.onrender.com/blogs`);
  const enquiries = useCallApi(`https://luxelane-server-zyhb.onrender.com/enquiries`);
  const usersignup = useCallApi(`https://luxelane-server-zyhb.onrender.com/usersignup`);
  return (
    <div className="container p-5">
      <div className="row justify-content-center welcome">
        <div className="content">
          <h1>Welcome to LUXELANE Dashboard!</h1>
          <h2>your online store at a glance</h2>
          <p>you'll find everthing you need to manage and grow our online store,track performance, and engage wity our customers.</p>
        </div>
        
      </div>
      <div className='row api mt-5  '>
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
             
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={Men.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>

                  Men's Wear
                </h5>
              </div>
            </div>
          </div>
          <div className=' col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={Women.length} duration={10} delay={0}/>
                 +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Women's Wear
                </h5>
              </div>
            </div>
          </div>
          <div className=' col-md-6 col-lg-4'>
            <div className='card mb-3 '>
              <div className='card-body text-center fw-bold ' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={Kids.length} duration={10} delay={0}/>
                 +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Kid's Wear
                </h5>
              </div>
            </div>
          </div>
          <div className=' col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={FA.length} duration={10} delay={0}/>
                 +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                Footwear & Accessories
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={blogs.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Blogs
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={enquiries.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Enquiries
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#8a3071"}}>
                <CountUp start={0} end={usersignup.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Users
                </h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Welcome;
